'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function PremiumVideoFrame() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: '1',
      type: 'portrait',
      src: 'https://ik.imagekit.io/d9tsatbk5/IMG_6823%20(1).MOV',
      title: 'Ethereal Moments',
      category: 'Portrait',
    },
    {
      id: '2',
      type: 'featured',
      src: 'https://ik.imagekit.io/d9tsatbk5/IMG_6822.MP4',
      title: 'Wedding Teaser',
      category: '',
    },
    {
      id: '3',
      type: 'landscape',
      src: 'https://ik.imagekit.io/d9tsatbk5/IMG_6827.MP4',
      title: 'Celebration',
      category: 'Moments',
    },
    {
      id: '4',
      type: 'landscape',
      src: 'https://ik.imagekit.io/d9tsatbk5/IMG_6828.MP4',
      title: 'Together',
      category: 'Moments',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white pt-12 pb-12 md:pt-16 md:pb-16 overflow-hidden">
      {/* SUBTLE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-black/[0.02] blur-3xl rounded-full" />
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-black/[0.02] blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        {/* PREMIUM HEADER */}
        <div className="w-full mx-4 sm:mx-10 mb-8 md:mb-10 text-left space-y-4 md:space-y-6">
         
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-light tracking-tight text-black leading-tight">
           <p
            className="
              font-clean
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.4em]
              text-black/90
            "
          >
           Video  Gallery
          </p>  
          </h1>

         

         
        </div>

        {/* FULL WIDTH VIDEO GALLERY */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-px px-4 md:px-8 lg:px-16">
            {/* LEFT - PORTRAIT VIDEO */}
            <div
              className="md:col-span-3 h-[280px] sm:h-[360px] md:h-[700px]"
              onMouseEnter={() => setHoveredId('1')}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative w-full h-full overflow-hidden   transition-all duration-500 shadow-lg hover:shadow-2xl">
                <video
                  src={videos[0].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent Line */}
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* No Play Button or Title for left video */}
              </div>
            </div>

            {/* CENTER - FEATURED VIDEO */}
            <div
              className="md:col-span-6 h-[320px] sm:h-[420px] md:h-[700px]"
              onMouseEnter={() => setHoveredId('2')}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative w-full h-full overflow-hidden   transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl">
                <video
                  src={videos[1].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Accent Corner Lines */}
                <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 h-px w-12 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Only show title/category for center video */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 z-10">
                  <p className="text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-white/70 uppercase font-light">
                    {videos[1].category}
                  </p>
                  <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-white">
                    {videos[1].title}
                  </h2>
                </div>
              </div>
            </div>

            {/* RIGHT - TWO LANDSCAPE VIDEOS */}
            <div className="md:col-span-3 flex flex-col gap-4 md:gap-px h-[460px] sm:h-[540px] md:h-[700px]">
              {/* Top Landscape */}
              <div
                className="flex-1"
                onMouseEnter={() => setHoveredId('3')}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="group relative w-full h-full overflow-hidden   transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl min-h-[170px] sm:min-h-0">
                  <video
                    src={videos[2].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* No Play Button or Title for right top video */}
                </div>
              </div>

              {/* Bottom Landscape */}
              <div
                className="flex-1"
                onMouseEnter={() => setHoveredId('4')}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="group relative w-full h-full overflow-hidden   transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl min-h-[170px] sm:min-h-0">
                  <video
                    src={videos[3].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* No Play Button or Title for right bottom video */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}