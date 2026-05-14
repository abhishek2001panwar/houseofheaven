'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
const Footer: React.FC = () => {

    const router = useRouter();
  
  /* 9 DIFFERENT IMAGES */
  const instaGrid = [
    {
      id: 1,
      src: "/images/couple1.png",
    },
    {
      id: 2,
      src: "/images/drag4.png",
    },
    {
      id: 3,
      src: "/images/drag6.png",
    },
    {
      id: 4,
      src: "/images/overlay1.png",
    },
    {
      id: 5,
      src: "/images/portrait6.png",
    },
    {
      id: 6,
      src: "/images/random2.png",
    },
    {
      id: 7,
      src: "/images/worklast.png",
    },
    {
      id: 8,
      src: "/images/workcenter.png",
    },
    {
      id: 9,
      src: "/images/seeing.png",
    },
  ];

  return (

    <footer className="w-full bg-[#111111] text-stone-300 py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:gap-8 lg:grid lg:grid-cols-3">
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
            {/* LOGO */}
            <div className="relative mb-4 sm:mb-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="object-contain"
                priority
                height={50}
                width={140}
              />
            </div>
            {/* NAV */}
            <div className="flex flex-col gap-3 border-l border-stone-800 pl-6 sm:pl-12 py-2 w-full">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "About", href: "/#about" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
              {/* SOCIAL */}
              <div className="mt-6 flex gap-4 border-t border-stone-800/50 pt-6">
                <a
                  href="https://www.instagram.com/houseofheaven.in"
                  aria-label="Instagram"
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-all hover:border-stone-400 hover:text-white"
                >
                  <FaInstagram size={14} strokeWidth={1.8} />
                </a>
                {/* <div className="h-3 w-3 cursor-pointer rounded-full bg-stone-700 transition-colors hover:bg-stone-400" />
                <div className="h-3 w-3 cursor-pointer rounded-full bg-stone-700 transition-colors hover:bg-stone-400" /> */}
              </div>
            </div>
          </div>
          {/* CENTER GRID */}
          <div className="flex justify-center lg:justify-start">
            <div className="grid max-w-[320px] grid-cols-3 gap-2">
              {instaGrid.map((img) => (
                <div
                  key={img.id}
                  className="
                    aspect-square
                    w-20 sm:w-24
                    overflow-hidden
                    transition-all
                    duration-700
                  "
                >
                  <img
                    src={img.src}
                    alt="Gallery"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                  />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col items-center space-y-8 text-center lg:items-end lg:text-right mt-8 lg:mt-0">
            <div className="space-y-4">
              <h3 className="text-2xl text-stone-200">House of Heaven</h3>
              <p
                className="
                  max-w-[300px]
                  text-[11px]
                  font-light
                  leading-relaxed
                  tracking-wider
                  text-stone-500
                "
              >
                Capturing timeless weddings with
                an editorial & cinematic approach
                for modern couples worldwide.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-[12px] text-stone-300 font-semibold"><span className="text-stone-400 font-normal mr-1">Phone:</span>95358 72776</p>
                <p className="text-[11px] text-stone-400"><span className="text-stone-500 font-normal mr-1">Location:</span>Bangalore, India</p>
              </div>
            </div>
            <button
            onClick={()=>router.push("/portfolio")}
              className="
                border
                border-stone-800
                px-8 sm:px-10
                py-3 sm:py-4
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-stone-300
                transition-all
                hover:bg-stone-200
                hover:text-black
              "
            >
              Explore more
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-16 md:mt-24
            flex flex-col md:flex-row
            items-center md:items-center
            justify-between
            gap-4
            border-t
            border-stone-900
            pt-8
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-stone-600
              text-center md:text-left
            "
          >
            © 2026 HOUSE OF HEAVEN PHOTOGRAPHY
          </p>
          <div
            className="
              flex
              gap-6
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-stone-600
              justify-center md:justify-end
              w-full md:w-auto
            "
          >
            <a
              href="#"
              className="hover:text-stone-400"
            >
              Terms + Privacy
            </a>
            <span className="text-stone-800">|</span>
            <a
              href="#"
              className="hover:text-stone-400"
            >
              Site Credit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;