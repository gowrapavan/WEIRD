import React, { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  postUrl: string;
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!postUrl || !containerRef.current) return;

    // Remove any existing Instagram embeds
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // Clean up
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [postUrl]);

  if (!postUrl) return null;

  return (
    <div ref={containerRef} className="instagram-embed w-full max-w-[540px] mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '0',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%',
        }}
      />
    </div>
  );
}