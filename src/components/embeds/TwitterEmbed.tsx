import React, { useEffect, useRef } from 'react';

interface TwitterEmbedProps {
  tweetId: string;
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tweetId || !containerRef.current) return;

    // Check if the Twitter script is already loaded
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    
    // If the script is not loaded, create and append it
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
      
      // Reload the Twitter widget on script load
      script.onload = () => {
        // After script load, initialize the Twitter widget
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(containerRef.current!);
        }
      };

      // Cleanup function
      return () => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      // If script exists, just reinitialize the widget
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(containerRef.current!);
      }
    }
  }, [tweetId]);

  if (!tweetId) return null;

  return (
    <div ref={containerRef} className="twitter-embed w-full max-w-[550px]">
      <blockquote className="twitter-tweet" data-theme="light">
        <a href={`https://twitter.com/x/status/${tweetId}`} />
      </blockquote>
    </div>
  );
}