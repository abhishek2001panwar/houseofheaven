import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          h-[110vh]
          w-full
          bg-cover
          bg-center
          bg-no-repeat
          bg-fixed
        "
        style={{
          backgroundImage: `url('/images/heronew.png')`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-start
          px-6
          pt-28
          md:px-14
          md:pt-36
        "
      >
        
        {/* TEXT BLOCK */}
        <div className="max-w-[260px] md:max-w-[340px]">
          
          {/* SMALL LABEL */}
          <p
            className="
              font-clean
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/60
            "
          >
            Wedding Photography
          </p>

          {/* HEADING */}
          <h1
            className="
              mt-5
              font-luxury
              text-left
              text-white
              uppercase
              leading-[1.5]
              tracking-[0.22em]
              text-[13px]
              md:text-[20px]
              font-light
            "
          >
            Honest imagery
            <br />
            with timeless
            <br />
            storytelling
          </h1>

          {/* SMALL TEXT */}
          <p
            className="
              mt-6
              font-clean
              text-left
              text-white/75
              uppercase
              leading-[2]
              tracking-[0.16em]
              text-[8px]
              md:text-[9px]
            "
          >
            Capturing refined moments,
            natural emotion, and the
            atmosphere that defines
            your story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;