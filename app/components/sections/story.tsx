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
        <div className="max-w-[320px] md:max-w-[400px]">
          {/* SMALL LABEL */}
          <p
            className="font-sans text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-white/70 mb-2"
          >
            Wedding Stories
          </p>
          {/* MODERN HEADING */}
          <h1
            className="text-white font-bold text-2xl md:text-4xl leading-tight mb-4 drop-shadow-lg"
          >
            Timeless. Honest. You.
          </h1>
          {/* SHORT MODERN SUBTEXT */}
          <p
            className="text-white/80 text-[12px] md:text-[14px] font-light"
          >
            Modern wedding photography for real moments and real people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;