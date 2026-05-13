'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: '/images/hi1.jpg' },
  { id: 2, src: '/images/hi2.jpg' },
  { id: 3, src: '/images/hi3.jpg' },
  { id: 4, src: '/images/hi4.jpg' },
  { id: 5, src: '/images/hi5.jpg' },
  { id: 6, src: '/images/hi6.jpg' },
];

const HighlightsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // AUTO SLIDE EVERY 5 SEC
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const left = (currentIndex - 1 + images.length) % images.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % images.length;

    return [images[left], images[center], images[right]];
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-28 overflow-hidden">
      
      {/* FIXED HEADING */}
      <div className="mb-16 text-center pointer-events-none">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-[0.35em] text-stone-300 uppercase leading-none">
          Highlights
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-7xl flex items-center justify-center gap-5 md:gap-12 px-6">

        <AnimatePresence mode="wait">
          {getVisibleImages().map((img, index) => {
            const isCenter = index === 1;

            return (
              <motion.div
                key={img.id}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -120 : 120,
                  scale: 0.85,
                }}
                animate={{
                  opacity: isCenter ? 1 : 0.35,
                  x: 0,
                  scale: isCenter ? 1 : 0.82,
                }}
                exit={{
                  opacity: 0,
                  x: index === 0 ? -120 : 120,
                  scale: 0.85,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden ${
                  isCenter
                    ? 'z-20 w-[46%] md:w-[30%]'
                    : 'hidden md:block z-10 w-[22%]'
                }`}
              >
                {/* IMAGE */}
                <div className="w-full aspect-[2/3] overflow-hidden bg-stone-100">
                  <motion.img
                    src={img.src}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* NAVIGATION */}
      <div className="mt-20 w-full max-w-6xl flex justify-between items-center px-10 md:px-16">

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
            className="text-stone-400 group-hover:text-black transition-colors duration-300"
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
            className="text-stone-400 group-hover:text-black transition-colors duration-300"
          >
            <path
              d="M0 8H54M54 8L47 1M54 8L47 15"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HighlightsCarousel;