import React from 'react';
import { useSocialStore } from '../store/useSocialStore';
import { SocialFeed } from '../components/SocialFeed';
import { Recommendations } from '../components/Recommendations';

export function TwitterFeed() {
  const posts = useSocialStore((state) =>
    state.posts.filter((post) => post.platform === 'twitter')
  );

  return (
    <>
      <main className="flex-1">
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Twitter Feed
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time updates from the gaming community
          </p>
        </div>
        <SocialFeed platformFilter="twitter" />
      </main>
      <aside className="lg:w-80 shrink-0">
        <Recommendations />
      </aside>
    </>
  );
}
