# WEIRD Platform Documentation

## Overview
WEIRD is a social media aggregation platform that integrates content from multiple social platforms including Instagram, Twitter, and YouTube. The platform supports real-time content embedding, user interactions, and platform-specific feeds.

## Architecture

### Component Structure
- `SocialFeed`: Main component for displaying posts
- `InstagramEmbed`: Handles Instagram post embedding
- `TwitterEmbed`: Manages Twitter post embedding
- `YouTubeEmbed`: Handles YouTube video embedding

### State Management
- Uses Zustand for centralized state management
- Handles post data, user interactions (likes, comments, shares)
- Maintains platform-specific filters and sorting

## Social Media Integration

### YouTube Integration
```typescript
<YouTubeEmbed videoId="VIDEO_ID" />
```
- Requires valid YouTube video ID
- Uses iframe embedding
- Supports fullscreen and standard YouTube player controls

### Twitter Integration
```typescript
<TwitterEmbed tweetId="TWEET_ID" />
```
- Requires valid Tweet ID
- Dynamically loads Twitter widget script
- Supports dark/light theme

### Instagram Integration
```typescript
<InstagramEmbed postUrl="POST_URL" />
```
- Requires valid Instagram post URL
- Dynamically loads Instagram embed script
- Processes embeds using Instagram's API

## Troubleshooting Guide

### Common Issues

#### Posts Not Displaying
1. Check if post data includes required fields:
   - `id`
   - `platform`
   - `embedId`
   - `author`
   - `content`

2. Verify embed IDs:
   - YouTube: Should be video ID from URL
   - Twitter: Should be numeric tweet ID
   - Instagram: Should be complete post URL

#### Embed Loading Issues
1. YouTube:
   - Ensure videoId is correct
   - Check iframe src URL format
   - Verify allow attributes

2. Twitter:
   - Check if Twitter script loads
   - Verify tweet ID format
   - Ensure tweet is public

3. Instagram:
   - Verify Instagram script loads
   - Check post URL format
   - Ensure post is public

## Development Guidelines

### Adding New Posts
```typescript
const post = {
  id: number,
  platform: 'instagram' | 'twitter' | 'youtube' | 'text',
  identityNumber: number, // 1-7 for sorting
  author: {
    name: string,
    avatar: string
  },
  content: string,
  embedId: string,
  timestamp: string,
  likes: number,
  comments: number,
  shares: number
};
```

### Platform-Specific Pages
- Each platform has a dedicated page
- Uses `platformFilter` prop for content filtering
- Maintains consistent layout with main feed

### Best Practices
1. Always validate embed IDs before rendering
2. Handle loading states for embeds
3. Implement error boundaries for embed failures
4. Clean up embed scripts on component unmount
5. Use proper TypeScript types for all props