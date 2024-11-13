import React from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';
import { InstagramEmbed } from './embeds/InstagramEmbed';
import { TwitterEmbed } from './embeds/TwitterEmbed';
import { YouTubeEmbed } from './embeds/YouTubeEmbed';
import { useSocialStore, Post } from '../store/useSocialStore';

interface SocialFeedProps {
  platformFilter?: 'instagram' | 'twitter' | 'youtube';
}

export function SocialFeed({ platformFilter }: SocialFeedProps) {
  const posts = useSocialStore((state) =>
    platformFilter
      ? state.posts
          .filter((post) => post.platform === platformFilter)
          .sort((a, b) => b.id - a.id) // Sorting by 'id' in descending order
      : state.posts.sort((a, b) => b.id - a.id) // Sorting by 'id' in descending order
  );

  const likedPosts = useSocialStore((state) => state.likedPosts);
  const toggleLike = useSocialStore((state) => state.toggleLike);
  const addComment = useSocialStore((state) => state.addComment);
  const share = useSocialStore((state) => state.share);

  const renderEmbed = (post: Post) => {
    if (!post.embedId) return null;

    switch (post.platform) {
      case 'instagram':
        return (
          <div className="flex justify-center">
            <InstagramEmbed postUrl={post.embedId} />
          </div>
        );
      case 'twitter':
        return (
          <div className="flex justify-center">
            <TwitterEmbed tweetId={post.embedId} />
          </div>
        );
      case 'youtube':
        return <YouTubeEmbed videoId={post.embedId} />;
      default:
        return null;
    }
  };

  const handleLike = (postId: number) => {
    toggleLike(postId);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => {
        const isLiked = likedPosts.includes(post.id);

        return (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.timestamp}
                  </p>
                </div>
              </div>

              <p className="text-gray-800 dark:text-gray-200 mb-4">
                {post.content}
              </p>

              <div className="mb-4">
                {renderEmbed(post)}
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full rounded-lg mb-4"
                />
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`group flex items-center space-x-2 transition-all duration-200 ${
                    isLiked
                      ? 'text-red-500'
                      : 'text-gray-500 hover:text-red-500 dark:text-gray-400'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isLiked ? 'fill-current scale-110' : 'group-hover:scale-110'
                    }`}
                  />
                  <span className="transition-all duration-200">
                    {post.likes + (isLiked ? 1 : 0)}
                  </span>
                </button>
                <button
                  onClick={() => addComment(post.id)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button
                  onClick={() => share(post.id)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-green-500 dark:text-gray-400 transition-colors duration-200"
                >
                  <Share2 className="w-5 h-5" />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
