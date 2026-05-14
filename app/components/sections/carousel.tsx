'use client';

import React, { useState, useEffect } from 'react';

const images = [
  { id: 1, src: '/images/hi1.jpg' },
  { id: 2, src: '/images/hi2.jpg' },
  { id: 3, src: '/images/hi3.jpg' },
  { id: 4, src: '/images/hi4.jpg' },
  { id: 5, src: '/images/hi5.jpg' },
  { id: 6, src: '/images/hi6.jpg' },
];

const HighlightsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };


  const getVisibleImages = () => {
    const total = images.length;

    return [
      images[(currentIndex - 2 + total) % total],
      images[(currentIndex - 1 + total) % total],
      images[currentIndex],
      images[(currentIndex + 1) % total],
      images[(currentIndex + 2) % total],
    ];
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f4ef]
        py-10
        md:py-10
      "
    >
      {/* BLUR BACKGROUND */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/5
          blur-3xl
        "
      />

      {/* HEADING */}
      <div className="relative z-10 mb-16 text-center">
        

        <h2
          className="
            mt-4
            text-5xl
            uppercase
            tracking-[0.08em]
            text-black
            md:text-7xl
          "
        >
          Highlights
        </h2>
      </div>

      {/* FRAME */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1700px]
          items-end
          justify-center
          gap-3
          px-4
          md:gap-6
        "
      >
        {getVisibleImages().map((img, index) => {
          const isCenter = index === 2;

          return (
            <div
              key={img.id}
              className={`
                relative
                overflow-hidden
                rounded-[28px]
                transition-all
                duration-700
                ease-out
                ${
                  isCenter
                    ? `
                      z-20
                      scale-100
                      opacity-100
                      shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                      w-[44%]
                      md:w-[28%]
                    `
                    : `
                      z-10
                      scale-[0.88]
                      opacity-60
                      w-[18%]
                      hidden md:block
                    `
                }
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  overflow-hidden
                  bg-neutral-200
                  ${
                    isCenter
                      ? 'aspect-[2/3]'
                      : 'aspect-[2/3]'
                  }
                `}
              >
                <img
                  src={img.src}
                  alt=""
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/10
                "
              />
            </div>
          );
        })}
      </div>

      {/* NAVIGATION */}
      <div
        className="
          relative
          z-10
          mt-16
          flex
          items-center
          justify-center
          gap-5
        "
      >
        <div className="mt-3 w-full max-w-6xl flex justify-between items-center px-10 md:px-16">
          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="group transition-all duration-300 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              width="55"
              height="16"
              viewBox="0 0 55 16"
              fill="none"
              className="text-black group-hover:text-stone-400 transition-colors duration-300"
            >
              <path
                d="M55 8L1 8M1 8L8 1M1 8L8 15"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="group transition-all duration-300 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              width="55"
              height="16"
              viewBox="0 0 55 16"
              fill="none"
              className="text-black group-hover:text-stone-400 transition-colors duration-300"
            >
              <path
                d="M0 8H54M54 8L47 1M54 8L47 15"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;