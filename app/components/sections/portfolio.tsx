"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const portfolioImages = [
  {
    type: "portrait",
    image:
      "/images/portrait5.png",
    title: "Weddings",
  },
  {
    type: "portrait",
    image:
      "/images/heronew3.png",
    title: "Portraits",
  },
  {
    type: "landscape",
    image:
      "/images/seeing1.png",
    title: "Editorial",
  },
  {
    type: "portrait",
    image:
      "/images/new.png",
    title: "Luxury",
  },
  {
    type: "portrait",
    image:
      "/images/hero.png",
    title: "Stories",
  },
];

export default function PortfolioSection() {
    const router = useRouter();
  return (
    <section id="portfolio" className="w-full bg-[#2e2d2d] py-28 px-5 md:px-10">
      
      <div className="mx-auto max-w-[760px]">

        {/* TOP TEXT */}
        <div className="mb-16 text-center">
          
          <p
            className="
              font-clean
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white/60
            "
          >
            Signature Work
          </p>

          <h2
            className="
              font-luxury
              mt-5
              leading-[0.85]
              text-white
              text-[4rem]
              sm:text-[6rem]
              md:text-[8rem]
            "
          >
            PORTFOLIO
          </h2>
        </div>

        {/* GRID */}
        <div className="space-y-0 overflow-hidden">

          {/* FIRST 2 PORTRAITS */}
          <div className="grid grid-cols-2 gap-0">
            {portfolioImages.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                  group
                  relative
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="
                    h-[420px]
                    md:h-[560px]
                    w-full
                    object-cover
                    transition-transform
                    duration-[1800ms]
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    transition-all
                    duration-700
                    group-hover:bg-black/30
                  "
                />

                {/* TEXT */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                

                  {/* <button
                    className="
                      mt-6
                      border
                      border-white/40
                      px-6
                      py-3
                      font-clean
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-white
                      transition-all
                      duration-500
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    Browse Portfolio
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* LANDSCAPE */}
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="
              group
              relative
              overflow-hidden
            "
          >
            <img
              src={portfolioImages[2].image}
              alt=""
              className="
                h-[300px]
                md:h-[520px]
                w-full
                object-cover
                transition-transform
                duration-[1800ms]
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/10
                transition-all
                duration-700
                group-hover:bg-black/30
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
              "
            >
             

              {/* <button
                className="
                  mt-6
                  border
                  border-white/40
                  px-6
                  py-3
                  font-clean
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                "
              >
                Browse Portfolio
              </button> */}
            </div>
          </motion.div>

          {/* LAST 2 PORTRAITS */}
          <div className="grid grid-cols-2 gap-0">
            {portfolioImages.slice(3, 5).map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                  group
                  relative
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="
                    h-[420px]
                    md:h-[560px]
                    w-full
                    object-cover
                    transition-transform
                    duration-[1800ms]
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    transition-all
                    duration-700
                    group-hover:bg-black/30
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                 
{/* 
                  <button
                    className="
                      mt-6
                      border
                      border-white/40
                      px-6
                      py-3
                      font-clean
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-white
                      transition-all
                      duration-500
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    Browse Portfolio
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
          onClick={()=> router.push("/portfolio")}
            className="
              group
              relative
              overflow-hidden
              border
              border-white/20
              px-10
              py-5
            "
          >
            <span
              className="
                relative
                z-10
                font-clean
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white
                transition-colors
                duration-500
                group-hover:text-black
              "
            >
              View Full Portfolio
            </span>

            <div
              className="
                absolute
                inset-0
                translate-y-full
                bg-white
                transition-transform
                duration-500
                group-hover:translate-y-0
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}