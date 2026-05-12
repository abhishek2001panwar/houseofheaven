import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="flex h-screen w-full flex-col overflow-hidden bg-[#f8f6f2] lg:flex-row">
      
      {/* IMAGE SIDE */}
      <div className="relative h-[38vh] w-full overflow-hidden lg:h-screen lg:w-[46%]">
        <img
          src="/images/contact.png"
          alt="Editorial Portrait"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* FORM SIDE */}
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          px-6
          py-10
          md:px-14
          lg:w-[54%]
          lg:px-20
        "
      >
        <div className="w-full max-w-[640px]">
          
          {/* HEADING */}
          <h1
            className="
              max-w-[580px]
              text-[2rem]
              leading-[1.1]
              text-black
              md:text-[3rem]
            "
          >
            Tell us more about your
            <br />
            celebration & vision.
          </h1>

          {/* FORM */}
          <form className="mt-10 space-y-5">
            
            {/* FULL */}
            <div className="border-b border-black/15 pb-2">
              <p
                className="
                  mb-1
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                Your Name & Partner&apos;s Name
              </p>

              <input
                type="text"
                className="
                  w-full
                  bg-transparent
                  py-1
                  text-[14px]
                  text-black
                  outline-none
                "
              />
            </div>

            {/* 2 COL */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              
              <div className="border-b border-black/15 pb-2">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Email
                </p>

                <input
                  type="email"
                  className="
                    w-full
                    bg-transparent
                    py-1
                    text-[14px]
                    outline-none
                  "
                />
              </div>

              <div className="border-b border-black/15 pb-2">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Phone
                </p>

                <input
                  type="text"
                  className="
                    w-full
                    bg-transparent
                    py-1
                    text-[14px]
                    outline-none
                  "
                />
              </div>
            </div>

            {/* 2 COL */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              
              <div className="border-b border-black/15 pb-2">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Wedding Date
                </p>

                <input
                  type="text"
                  className="
                    w-full
                    bg-transparent
                    py-1
                    text-[14px]
                    outline-none
                  "
                />
              </div>

              <div className="border-b border-black/15 pb-2">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Location
                </p>

                <input
                  type="text"
                  className="
                    w-full
                    bg-transparent
                    py-1
                    text-[14px]
                    outline-none
                  "
                />
              </div>
            </div>

            {/* FULL */}
            <div className="border-b border-black/15 pb-2">
              <p
                className="
                  mb-1
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                Planner Name
              </p>

              <input
                type="text"
                className="
                  w-full
                  bg-transparent
                  py-1
                  text-[14px]
                  outline-none
                "
              />
            </div>

            {/* FULL */}
            <div className="border-b border-black/15 pb-2">
              <p
                className="
                  mb-1
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                How did you hear about us?
              </p>

              <input
                type="text"
                className="
                  w-full
                  bg-transparent
                  py-1
                  text-[14px]
                  outline-none
                "
              />
            </div>

            {/* TEXTAREA */}
            <div className="mt-2 bg-white/50 p-5">
              
              <p
                className="
                  mb-3
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                Tell us about your vision
              </p>

              <textarea
                rows={3}
                className="
                  w-full
                  resize-none
                  bg-transparent
                  text-[14px]
                  outline-none
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                group
                mt-4
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-black
                "
              >
                Submit Form
              </span>

              <div
                className="
                  h-px
                  w-10
                  bg-black
                  transition-all
                  duration-500
                  group-hover:w-16
                "
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;