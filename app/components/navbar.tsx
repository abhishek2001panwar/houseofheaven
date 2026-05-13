"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Couple", href: "/#couple" },
];

export default function LuxuryNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ONLY SHOW INSIDE HERO AREA
      if (currentScrollY > window.innerHeight * 0.9) {
        setShowNavbar(false);
        return;
      }

      // SHOW WHEN SCROLLING UP
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      // HIDE WHEN SCROLLING DOWN
      else {
        setShowNavbar(false);
      }

      // ALWAYS SHOW AT VERY TOP
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            top-0
            left-0
            z-50
            w-full
          "
        >
          {/* GLASS */}
          <div
            className="
              absolute
              inset-0
              bg-black/10
              backdrop-blur-[10px]
            "
          />

          {/* BORDER */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-full
              bg-white/10
            "
          />

          <div
            className="
              relative
              mx-auto
              flex
              h-[90px]
              max-w-[1600px]
              items-center
              justify-between
              px-6
              md:px-10
            "
          >
            {/* LEFT */}
            <Link
              href="/"
              className="
                group
                relative
                inline-block
              "
            >

              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[1px]
                  w-0
                  bg-white
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Link>

            {/* CENTER */}
            <nav
              className="
                hidden
                items-center
                gap-10
                lg:flex
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-white/75
                    transition-all
                    duration-500
                    hover:text-white
                  "
                >
                  {item.label}
                  <span
                    className="
                      absolute
                      bottom-[-6px]
                      left-0
                      h-[1px]
                      w-0
                      bg-white
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-5">
              
              {/* CTA */}
              <button
              onClick={() => router.push("/#contact")}
                className="
                  hidden
                  overflow-hidden
                  border
                  border-white/20
                  px-6
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white
                  transition-all
                  duration-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  md:block
                "
              >
                Inquire
              </button>

              {/* MOBILE */}
              <button
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-white
                  transition-all
                  duration-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  lg:hidden
                "
              >
                <Menu size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}