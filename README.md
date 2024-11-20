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












# WEIRD Platform Documentation

## Firebase Setup and Authentication

### Initial Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication, Firestore, and Storage services
3. Add your web application to get the configuration

### Configuration

The Firebase configuration is stored in `src/config/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### Authentication Setup

1. Enable Email/Password authentication in Firebase Console:
   - Go to Authentication > Sign-in methods
   - Enable Email/Password provider

2. Implement authentication in your app:
   ```typescript
   import { auth } from '../config/firebase';
   import { signInWithEmailAndPassword } from 'firebase/auth';

   // Sign in
   await signInWithEmailAndPassword(auth, email, password);

   // Sign out
   await auth.signOut();
   ```

### Email Verification

1. Enable email verification in Firebase Console
2. Send verification email after registration:
   ```typescript
   import { sendEmailVerification } from 'firebase/auth';

   await sendEmailVerification(auth.currentUser);
   ```

### Password Reset

1. Implement password reset functionality:
   ```typescript
   import { sendPasswordResetEmail } from 'firebase/auth';

   await sendPasswordResetEmail(auth, email);
   ```

### Security Rules

1. Set up Firestore security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read: if request.auth != null;
         allow write: if request.auth.uid == userId;
       }
     }
   }
   ```

2. Set up Storage security rules:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /avatars/{userId} {
         allow read: if request.auth != null;
         allow write: if request.auth.uid == userId;
       }
     }
   }
   ```

### Best Practices

1. **Error Handling**
   - Always wrap Firebase operations in try-catch blocks
   - Provide user-friendly error messages
   - Log errors for debugging

2. **State Management**
   - Use React Context or state management libraries for auth state
   - Implement loading states for async operations
   - Handle offline scenarios

3. **Security**
   - Never expose Firebase config in client-side code
   - Implement proper security rules
   - Use environment variables for sensitive data

4. **Performance**
   - Enable offline persistence for Firestore
   - Implement proper data pagination
   - Use appropriate Firebase SDK features

### Example Usage

```typescript
// Sign up
const signUp = async (email: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(user);
    
    // Create user profile
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
    });
    
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign in
const signIn = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Reset password
const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Check if email verification is required
   - Verify correct email/password combination
   - Check if the user account exists

2. **Security Rules**
   - Verify security rules are properly configured
   - Check if user is authenticated
   - Ensure proper permissions for operations

3. **Offline Support**
   - Enable persistence for offline support
   - Handle offline scenarios gracefully
   - Implement proper error handling

### Support

For additional support:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Support](https://firebase.google.com/support)