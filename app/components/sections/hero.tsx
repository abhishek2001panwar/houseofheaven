"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 10,
        ease: "power2.out",
      });

      gsap.to(".hero-overlay", {
        opacity: 0.45,
        duration: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        relative
        h-screen
        min-h-[720px]
        w-full
        overflow-hidden
        bg-black
      "
    >
      
      {/* BACKGROUND */}
      <div
        ref={imageRef}
        className="absolute inset-0 scale-[1.03]"
      >
        <img
          src="/images/herosection.png"
          alt="Wedding"
          className="
            h-full
            w-full
           object-cover
           object-center

          "
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay absolute inset-0 bg-black/60" />

      {/* CINEMATIC OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          flex
          h-full
          items-end
          px-5
          pb-14
          sm:px-8
          md:px-12
          md:pb-20
          lg:px-16
        "
      >
        
        <div className="w-full max-w-[1400px]">
          
          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              mb-4
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/65
              sm:text-[10px]
              md:mb-5
              md:text-xs
            "
          >
            Photography Brand
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              leading-[0.88]
              uppercase
              tracking-[-0.04em]
              text-white

              text-[3.2rem]
              sm:text-[4.5rem]
              md:text-[6rem]
              lg:text-[7rem]
              xl:text-[7rem]
              2xl:text-[7rem]
            "
            style={{
              WebkitTextStroke:
                "0.5px rgba(255,255,255,0.9)",
            }}
          >
            House
            
            Of Heaven
          </motion.h1>

        
        </div>
      </div>

      {/* SCROLL TEXT */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-10
          right-5
          z-30

          sm:right-8
          md:bottom-14
          md:right-10
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/45

            sm:text-[10px]
          "
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}