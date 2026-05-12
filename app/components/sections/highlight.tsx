'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const gallery = [
  {
    id: 1,
    image:
      '/images/h1.png',
  },

  {
    id: 2,
    image:
      '/images/h2.png',
  },

  {
    id: 3,
    image:
      '/images/h3.png',
  },

  {
    id: 4,
    image:
      '/images/h4.png',
  },

  {
    id: 5,
    image:
      '/images/h5.png',
  },
];

export default function PortfolioHighlights() {
  const [active, setActive] = useState(1);

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const left =
    gallery[
      active === 0
        ? gallery.length - 1
        : active - 1
    ];

  const center = gallery[active];

  const right =
    gallery[
      active === gallery.length - 1
        ? 0
        : active + 1
    ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f4f2ef]
        py-24
        md:py-36
      "
    >
      
      {/* TOP LABEL */}
      <div className="mb-10 text-center">
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-black/60
          "
        >
          
        </p>

        <h1
          className="
            mt-5
            text-[4rem]
            leading-none
            text-black
            md:text-[6rem]
            uppercase
          "
        >
          Highlights
        </h1>
      </div>

      {/* SLIDER */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1700px]
          items-end
          justify-center
          gap-5
          px-4
          md:gap-10
        "
      >
        
        {/* LEFT IMAGE */}
        <motion.div
          key={left.id}
          initial={{
            opacity: 0,
            rotate: -8,
            x: -120,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            hidden
            overflow-hidden
            md:block
          "
        >
          <img
            src={left.image}
            alt=""
            className="
              h-[420px]
              w-[300px]
              object-cover
            "
          />
        </motion.div>

        {/* CENTER IMAGE */}
        <div
          className="
            relative
            z-20
            overflow-hidden
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={center.id}
              src={center.image}
              alt=""
              initial={{
                rotate: 10,
                scale: 0.75,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                rotate: -10,
                scale: 0.75,
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                h-[520px]
                w-[360px]
                object-cover
                md:h-[720px]
                md:w-[520px]
              "
            />
          </AnimatePresence>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={right.id}
          initial={{
            opacity: 0,
            rotate: 8,
            x: 120,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            hidden
            overflow-hidden
            md:block
          "
        >
          <img
            src={right.image}
            alt=""
            className="
              h-[420px]
              w-[300px]
              object-cover
            "
          />
        </motion.div>
      </div>

      {/* NAVIGATION */}
      <div
        className="
          mt-10
          flex
          items-center
          justify-center
          gap-16
        "
      >
        
        <button
          onClick={prevSlide}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            transition-all
            duration-500
            hover:scale-110
            hover:border-black
          "
        >
          <ArrowLeft
            size={20}
            strokeWidth={1.3}
            className="
              text-black/70
              transition-transform
              duration-500
              group-hover:-translate-x-1
            "
          />
        </button>

        <button
          onClick={nextSlide}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            transition-all
            duration-500
            hover:scale-110
            hover:border-black
          "
        >
          <ArrowRight
            size={20}
            strokeWidth={1.3}
            className="
              text-black/70
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </section>
  );
}