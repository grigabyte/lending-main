'use client';

import React from 'react';

const BackgroundVideo = () => {
  return (
    <div
      className="video-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Base layer
        overflow: 'hidden',
        background: '#000'
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/vhs.mp4"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
