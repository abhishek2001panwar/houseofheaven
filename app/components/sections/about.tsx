"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MomentsSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const images = [
    {
      id: "left",
      src: "/images/moments.jpg",
      alt: "Wedding moment",
    },
    {
      id: "center",
      src: "/images/about.png",
      alt: "Bride and groom",
    },
    {
      id: "right",
      src: "/images/moments1.jpg",
      alt: "Celebration moment",
    },
  ];

  return (
    <section id="about" className="w-full bg-gradient-to-b from-[#f5f3ef] to-[#faf8f5] px-5 py-24 md:px-10 lg:px-20">
      
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER WITH ACCENT */}
        <div className="mx-auto max-w-4xl mb-6">
          

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              text-[2rem]
              md:text-5xl
              lg:text-6xl
              leading-[1.15]
              text-[#111]
              font-medium
            "
          >
            Capturing the{" "}
            <span className="italic font-light text-[#8B7355]">
              moments
            </span>
            {" "}that{" "}
            <span className="italic font-light text-[#8B7355]">
              really
            </span>
            {" "}
            <span className="font-regular">MATTER</span>
          </motion.h2>

         
        </div>

        {/* IMAGE GALLERY WITH ENHANCED LAYOUT */}
        <div className="mt-14">
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:gap-8
              md:grid-cols-[0.8fr_1.8fr_0.8fr]
              md:items-start
            "
          >

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:mt-[200px] flex justify-center"
              onMouseEnter={() => setHoveredImage("left")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="
                  overflow-hidden
                  w-full
                  max-w-[280px]
                  rounded-lg
                  shadow-xl
                  aspect-[3/4]
                  group
                  cursor-pointer
                "
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            {/* CENTER IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex justify-center"
              onMouseEnter={() => setHoveredImage("center")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="
                  overflow-hidden
                  w-full
                  max-w-[500px]
                  rounded-lg
                  shadow-2xl
                  aspect-[3/5]
                  group
                  cursor-pointer
                "
              >
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:mt-[60px] flex justify-center"
              onMouseEnter={() => setHoveredImage("right")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="
                  overflow-hidden
                  w-full
                  max-w-[280px]
                  rounded-lg
                  shadow-xl
                  aspect-[3/4]
                  group
                  cursor-pointer
                "
              >
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
}