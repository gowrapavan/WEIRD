import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  if (!videoId) return null;

  return (
    <div className="youtube-embed relative w-full pt-[56.25%] my-4">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}