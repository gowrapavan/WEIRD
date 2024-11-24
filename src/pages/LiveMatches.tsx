import React from 'react';
import { LiveMatch } from '../components/LiveMatch';

export function LiveMatches() {
  const matches = [
    {
      league: 'Nations League · Fri, 15 Nov, 1:15 am',
      views: '27.5K',
      isLive: true,
      homeImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Id84F7Ji9rZGVacaazlBYA_96x96.png',
      homeName: 'Leganes',
      awayImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
      awayName: 'Real Madrid',
      score: '0 - 0',
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    },
    {
      league: 'Premier League · Sat, 16 Nov, 7:00 pm',
      views: '35.2K',
      isLive: false,
      homeImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Id84F7Ji9rZGVacaazlBYA_96x96.png',
      homeName: 'Arsenal',
      awayImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
      awayName: 'Chelsea',
      score: '1 - 1',
      src: 'https://images.unsplash.com/photo-1587807803127-75cbb6ff14d1?auto=format&fit=crop&q=80&w=1200',
    },
  ];

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
        {matches.map((match, index) => (
          <LiveMatch key={index} {...match} />
        ))}
      </div>
    </div>
  );
}