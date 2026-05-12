"use client";

import { motion } from "framer-motion";

export default function MomentsSection() {
  return (
    <section className="w-full bg-[#f5f3ef] px-5 py-24 md:px-10 lg:px-20">
      
      <div className="mx-auto max-w-[1400px]">

        {/* TOP CONTENT */}
        <div className="mx-auto max-w-[850px] text-center">
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              font-luxury
              text-[#111]
              leading-[1.1]
              text-[2.3rem]
              md:text-[4.5rem]
            "
          >
            Capturing the{" "}
            <span className="italic font-light">
              moments
            </span>
            <br />
            that{" "}
            <span className="italic font-light">
              really
            </span>{" "}
            MATTER.
          </motion.h2>

        
        </div>

        {/* IMAGE LAYOUT */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-8
            md:grid-cols-[0.7fr_1.6fr_0.7fr]
            md:items-start
          "
        >

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              md:mt-[220px]
              flex
              justify-center
            "
          >
            <div
              className="
                overflow-hidden
                w-full
                max-w-[260px]
              "
            >
              <img
                src="/images/couple3.png"
                alt=""
                className="
                  h-[420px]
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div
              className="
                overflow-hidden
                w-full
                max-w-[720px]
              "
            >
              <img
                src="/images/house.png"
                alt=""
                className="
                  h-[320px]
                  md:h-[640px]
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="
              md:mt-[60px]
              flex
              justify-center
            "
          >
            <div
              className="
                overflow-hidden
                w-full
                max-w-[260px]
              "
            >
              <img
                src="/images/portrait5.png"
                alt=""
                className="
                  h-[340px]
                  md:h-[500px]
                  w-full
                  object-cover
                "
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
       
      </div>
    </section>
  );
}