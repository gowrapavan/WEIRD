import React from 'react';
import { LiveMatch } from '../components/LiveMatch';

export function LiveMatches() {
  return (
    <div className="flex-1">
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Live Matches
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Watch ongoing tournaments and matches
        </p>
      </div>

      <div className="grid gap-6">
        <LiveMatch />
        <LiveMatch />
        <LiveMatch />
      </div>
    </div>
  );
}