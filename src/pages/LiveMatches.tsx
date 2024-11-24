import React from 'react';
import { LiveMatch } from './LiveMatch';

interface Match {
  league: string;
  views: string;
  isLive: boolean;
  homeImg: string;
  homeName: string;
  awayImg: string;
  awayName: string;
  score: string;
  src: string;
  vidsrc: string;
  date: string;
  time: string;
}

const matches: Match[] = [
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
    isLive: false,
    homeImg: '/images/team3.png',
    homeName: 'Real Madrid',
    awayImg: '/images/team4.png',
    awayName: 'Barcelona',
    score: '2 - 2',
    src: '/images/match2.jpg',
    vidsrc: 'https://2kora.naba24.net/albaplayer/bein-pemium-3hd/?serv=0',
    date: '24 Nov 2024',
    time: '10:30 PM',
  },
  {
    league: 'Serie A',
    views: '6.7K',
    isLive: true,
    homeImg: '/images/team5.png',
    homeName: 'AC Milan',
    awayImg: '/images/team6.png',
    awayName: 'Juventus',
    score: '0 - 1',
    src: '/images/match3.jpg',
    vidsrc: 'https://example.com/match3',
    date: '24 Nov 2024',
    time: '20:45 PM',
  },
];

export function LiveMatches() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match, index) => (
        <LiveMatch
          key={index}
          league={match.league}
          views={match.views}
          isLive={match.isLive}
          homeImg={match.homeImg}
          homeName={match.homeName}
          awayImg={match.awayImg}
          awayName={match.awayName}
          score={match.score}
          src={match.src}
          vidsrc={match.vidsrc}
          date={match.date}
          time={match.time}
        />
      ))}
    </div>
  );
}
