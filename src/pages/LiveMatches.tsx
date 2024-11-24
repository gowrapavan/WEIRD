import React from 'react';
import { LiveMatch } from '../components/LiveMatch';

const matches = [
  {
    league: 'Premier League',
    views: '10.5K',
    isLive: true,
    homeImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/56vquJBk5U16Dng7txLXCw_96x96.png',
    homeName: 'Ipswich Town',
    awayImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png',
    awayName: 'Man United',
    score: '0 - 1',
    src: 'https://e0.365dm.com/24/11/2048x1152/skysports-ipswich-town-man-utd_6751113.jpg?20241118130313',
    vidsrc: 'https://2kora.naba24.net/albaplayer/bein-pemium-3hd/?serv=0',
    date: '24 Nov 2024',
    time: '10:30 PM',
  },
  {
    league: 'La Liga',
    views: '8.2K',
    isLive: true,
    homeImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Id84F7Ji9rZGVacaazlBYA_96x96.png',
    homeName: 'CD Leganés',
    awayImg: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    awayName: 'Real Madrid',
    score: '2 - 2',
    src: 'https://cdn.ratingbet.com/ratingbet/20241122/8e50465877afd24dd3de41197544b08cbfaf9cdd86756dd1d163ad0e5639a7e1-800-500.jpg',
    vidsrc: 'https://2kora.naba24.net/albaplayer/bn3/?serv=0',
    date: '24 Nov 2024',
    time: '11:0 PM',
  },
  // Add more match objects if needed
];

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
        {matches.map((match, index) => (
          <LiveMatch key={index} {...match} />
        ))}
      </div>
    </div>
  );
}


<br><br>