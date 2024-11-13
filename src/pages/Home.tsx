import React from 'react';
import { SocialFeed } from '../components/SocialFeed';
import { LiveMatch } from '../components/LiveMatch';
import { Recommendations } from '../components/Recommendations';

export function Home() {
  return (
    <>
      <main className="flex-1">
        <LiveMatch />
        <SocialFeed />
      </main>
      <aside className="lg:w-80 shrink-0">
        <Recommendations />
      </aside>
    </>
  );
}