import { create } from 'zustand';

export interface Post {
  id: number;
  platform: 'instagram' | 'twitter' | 'youtube' | 'text';
  identityNumber: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  embedId?: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}

interface SocialStore {
  posts: Post[];
  likedPosts: number[];
  toggleLike: (postId: number) => void;
  addComment: (postId: number) => void;
  share: (postId: number) => void;
}

/*
{
  id: 1,
  platform: 'instagram',
  identityNumber: 7,
  author: {
    name: 'Alex Rivers',
    avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
  },
  content: 'Championship vibes! 🏆 #WEIRD #Gaming',
  embedId: 'https://www.instagram.com/p/DCTnpo8oWaA/?utm_source=ig_web_copy_link',
  timestamp: '2 hours ago',
  likes: 1234,
  comments: 89,
  shares: 32,
}
   {
      id: 2,
      platform: 'youtube',
      identityNumber: 6,
      author: {
        name: 'WEIRD',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'Match highlights from yesterday! 🎮',
      embedId: 'DvaPazAX7lw', // Video ID for embedding
      timestamp: '4 hours ago',
      likes: 856,
      comments: 134,
      shares: 21,
    },
    {
      id: 3,
      platform: 'twitter',
      identityNumber: 5,
      author: {
        name: 'WEIRD',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'What a match! Congratulations to both teams! 🎉',
      embedId: '1828924187693494733',
      timestamp: '1 hour ago',
      likes: 2341,
      comments: 156,
      shares: 89,
    },
*/
export const useSocialStore = create<SocialStore>((set) => ({
  posts: [ //last post id is 5 IN is 9
    {
      id: 5,
      platform: 'youtube',
      identityNumber: 9,
      author: {
        name: 'ISHOWSPEED',
        avatar:
          'https://yt3.ggpht.com/_Mj_eHbehGaSOe8yi57I_b99kagnBcFNuWvgtM64eqqmZZ4jLRzhvCAkfakuZL-QswRXM3xNew=s48-c-k-c0x00ffffff-no-rj',
       },
      content: 'NOT ENDING UNTIL I LAND A DOUBLE BACKFLIP....! 🎮',
      embedId: 'DvaPazAX7lw', // Video ID for embedding
      timestamp: '4 hours ago',
      likes: 85852 ,
      comments: 12134,
      shares: 21,
    },

    {
      id: 4,
      platform: 'instagram',
      identityNumber: 8,
      author: {
        name: 'WEIRD FC',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'Comment your thoughts 💬in INSTA #WEIRD #Gaming',
      embedId: 'https://www.instagram.com/reel/DCLXFSfgbi0/',
      timestamp: '2 hours ago',
      likes: 1234,
      comments: 89,
      shares: 32,
    },
    {
      id: 1,
      platform: 'instagram',
      identityNumber: 7,
      author: {
        name: 'WEIRD FC',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'Championship vibes! 🏆 #WEIRD #Gaming',
      embedId: 'https://www.instagram.com/p/DCTnpo8oWaA/?utm_source=ig_web_copy_link',
      timestamp: '2 hours ago',
      likes: 1234,
      comments: 89,
      shares: 32,
    },
    {
      id: 2,
      platform: 'youtube',
      identityNumber: 6,
      author: {
        name: 'WEIRD',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'Match highlights from yesterday! 🎮',
      embedId: '5UqROGX6dU8?si=FP6r_2t34Pzym0zZ', // Video ID for embedding
      timestamp: 'Premier League · Sat, 9 Nov',
      likes: 856,
      comments: 134,
      shares: 21,
    },
    {
      id: 3,
      platform: 'twitter',
      identityNumber: 5,
      author: {
        name: 'WEIRD',
        avatar:
          'https://scontent.cdninstagram.com/v/t51.2885-19/447519004_1938646279939307_7197080482607600566_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=1&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=KGLnvUDhcJ4Q7kNvgEo8rtN&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYCn1tjDVkAruG91RrOya4FGoJT4LKdE7Q2sINVqfmNa_Q&oe=673A46E9',
      },
      content: 'What a match! Congratulations to both teams! 🎉',
      embedId: '1828924187693494733',
      timestamp: '1 hour ago',
      likes: 2341,
      comments: 156,
      shares: 89,
    },
  ],
  likedPosts: [],
  toggleLike: (postId) =>
    set((state) => ({
      likedPosts: state.likedPosts.includes(postId)
        ? state.likedPosts.filter((id) => id !== postId)
        : [...state.likedPosts, postId],
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes + (state.likedPosts.includes(postId) ? -1 : 1),
              isLiked: !state.likedPosts.includes(postId),
            }
          : post
      ),
    })),
  addComment: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, comments: post.comments + 1 } : post
      ),
    })),
  share: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      ),
    })),
}));
