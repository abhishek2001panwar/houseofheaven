"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Our Couples", href: "/#couple" },
];

export default function LuxuryNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

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
          {/* <div
            className="
              absolute
              inset-0
              bg-black/10
              backdrop-blur-[10px]
            "
          /> */}

          {/* BORDER */}
          {/* <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-full
              bg-white/10
            "
          /> */}

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
                onClick={() =>
                  setIsMobileMenuOpen((prev) => !prev)
                }
                aria-label={
                  isMobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
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
                {isMobileMenuOpen ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <Menu size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="mx-6 mb-4 rounded-2xl border border-white/15 bg-black/85 p-5 backdrop-blur-md lg:hidden"
              >
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[11px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <button
                  onClick={() => {
                    router.push("/#contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-6 w-full border border-white/25 px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  Inquire
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}