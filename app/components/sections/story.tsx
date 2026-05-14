import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black/95">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 h-[110vh] w-full bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('/images/heronew.png')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 py-14 md:px-14">
        
        {/* Frosted Glass Card */}
        <div className="w-full max-w-[480px] rounded-xl border border-white/15 bg-white/8 p-8 backdrop-blur-xl">
          
          {/* Accent Line */}
          
          {/* Label */}
          <p className="mb-3 text-[11px] font-medium tracking-[3px] uppercase text-white/70">
            Wedding Stories
          </p>
          
          {/* Heading */}
          <h1 className="mb-5 text-4xl font-semibold leading-tight text-white md:text-[42px]">
            Timeless. Honest. You.
          </h1>
          
          {/* Subtext */}
          <p className="text-sm font-normal leading-relaxed text-white/85 md:text-base">
            Modern wedding photography that captures real moments with authentic storytelling.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Story;