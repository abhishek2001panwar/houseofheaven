'use client';

import { motion } from 'framer-motion';

import { useState } from 'react';

const couples = [
  {
    id: 1,
    names: 'Prathibha & Akshay',
    mainImg:
      '/images/drag6.png',
    smallImg:
      '/images/drag7.png',
    bg:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2400&auto=format&fit=crop',
  },

  {
    id: 2,
    names: 'Surabhi & Sanketh',
    mainImg:
      '/images/hero1.png',
    smallImg:
      '/images/portrait4.png',
    bg:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2200&auto=format&fit=crop',
  },

  {
    id: 3,
    names: 'Pravallika & Akhil',
    mainImg:
      '/images/pravalika.jpg',
    smallImg:
      '/images/portrait7.png',
    bg:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2200&auto=format&fit=crop',
  },
];

export default function CoupleStories() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % couples.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? couples.length - 1 : prev - 1
    );
  };

  return (
    <section
    id='couple'
      className="
        relative
        w-full
        overflow-hidden
        bg-[#ece7e1]
        py-20
        md:py-32
      "
    >
        <div className="flex items-start mb-4 z-[999] absolute top-10 left-3">
                <p
            className="
              font-clean
              text-[12px]
              uppercase
              tracking-[0.2em]
              text-black/60
              ml-2 md:ml-10
            "
          >
           Our  couples
          </p>
        </div>
    
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={couples[active].bg}
          alt="Background"
          className="
            h-full
            w-full
            object-cover
            opacity-[0.18]
            scale-110
            blur-[2px]
            transition-all
            duration-1000
          "
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#ebe5de]/75" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1800px]
          px-5
          lg:px-10
        "
      >
        
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1.1fr_0.7fr]
          "
        >
          
          {/* LEFT IMAGE */}
          <motion.div
            key={couples[active].mainImg}
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              relative
              overflow-hidden
            "
          >
            <img
              src={couples[active].mainImg}
              alt={couples[active].names}
              className="
                h-[350px]
                md:h-[650px]
                w-full
                object-cover
              "
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              lg:-ml-24
            "
          >
            
            {/* SMALL IMAGE */}
            <motion.div
              key={couples[active].smallImg}
              initial={{
                opacity: 0,
                y: -60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                absolute
                -top-10
                right-0
                hidden
                overflow-hidden
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                md:block
              "
            >
              <img
                src={couples[active].smallImg}
                alt="Portrait"
                className="
                  h-[260px]
                  w-[210px]
                  object-cover
                "
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              key={couples[active].names}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                relative
                z-20
                mt-20
                text-center
                lg:text-left
              "
            >
              
              <h1
                className="
                  text-[3rem]
                  uppercase
                  leading-[0.9]
                  text-white
                  drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                  md:text-[6rem]
                  lg:text-[7rem]
                "
              >
                {couples[active].names}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* NAVIGATION BELOW NAMES */}
        <div className="mt-10 w-full max-w-6xl flex justify-between items-center px-10 md:px-16">
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
}