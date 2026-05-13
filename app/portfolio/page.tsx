"use client";

import { motion } from "framer-motion";
import LuxuryNavbar from "../components/navbar";


const portfolioImages = [
  {
    id: 1,
    src:
      "/images/portrait5.png",
    title: "Weddings",
  },
  {
    id: 2,
    src:
      "/images/heronew3.png",
    title: "Portraits",
  },
  {
    id: 3,
    src:
      "/images/seeing1.png",
    title: "Editorial",
  },
  {
    id: 4,
    src:
      "/images/new.png",
    title: "Luxury",
  },
  {
    id: 5,
    src:
      "/images/hero.png",
    title: "Stories",
  },
    {
    id: 6,
    src:
      "/images/p1.jpg",
    title: "Couples",
  },
  {
    id: 7,
    src:
      "/images/p2.jpg",
    title: "Stories",
  },
    {
    id: 8,
    src:
      "/images/p3.jpg",
    title: "Couples",
  },
   {
    id: 9,
    src:
      "/images/p4.jpg",
    title: "Stories",
  },
    {
    id: 10,
    src:
      "/images/p5.jpg",
    title: "Couples",
  },
   {
    id: 11,
    src:
      "/images/p6.jpg",
    title: "Stories",
  },
    {
    id: 12,
    src:
      "/images/p7.jpg",
    title: "Couples",
  },
  {
    id: 13,
    src:
      "/images/p8.jpg",
    title: "Stories",
  },
    {
    id: 14,
    src:
      "/images/p9.jpg",
    title: "Couples",
  },
   {
    id: 15,
    src:
      "/images/p10.jpg",
    title: "Stories",
  },
    {
    id: 16,
    src:
      "/images/p11.jpg",
    title: "Couples",
  },
   {
    id: 17,
    src:
      "/images/p12.jpg",
    title: "Stories",
  }
];

function Page() {
  return (
    <main className="min-h-screen w-full bg-[#f7f4ef] pt-28 md:pt-36">
      <LuxuryNavbar />
      {/* TOP */}
      <section className="px-6 md:px-10">
        
        <div className="mx-auto max-w-xl text-center">
          
         

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              leading-[0.9]
              text-black

              text-[4rem]
              sm:text-[5rem]
              md:text-[6rem]
              uppercase
            "
          >
            Portfolio
          </motion.h1>
        </div>
      </section>

      {/* GRID */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        
        <div
          className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-2
            gap-px
            overflow-hidden
          "
        >
          
          {portfolioImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.3,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                group
                relative
                overflow-hidden
              "
            >
              
              <div
                className="
                  relative
                  h-[280px]
                  overflow-hidden

                  sm:h-[420px]

                  md:h-[560px]

                  lg:h-[650px]
                "
              >
                <img
                  src={img.src}
                  alt="Portfolio"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[2200ms]
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/[0.03]
                    transition-all
                    duration-700
                    group-hover:bg-black/[0.12]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;