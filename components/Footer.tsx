
"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservations", href: "#contact" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.4v2.3H7.4v3.2h2.8V21h3.3Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="size-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.2L5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7C.5 8.9.5 12 .5 12s0 3.1.5 5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17c.5-1.9.5-5 .5-5s0-3.1-.5-5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b121d] px-5 text-white sm:px-8">

      <div className="mx-auto max-w-[1240px] py-12 sm:py-14 lg:py-16">

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="FoodieBite Home">
            <Image
              src="/images/logo.png"
              alt="FoodieBite"
              width={270}
              height={130}
              className="h-auto w-[190px] object-contain sm:w-[220px]"
              priority
            />
          </Link>
        </div>

        {/* Description */}
        <div className="mx-auto mt-5 max-w-[1050px] text-center">
          <p className="text-sm leading-7 text-gray-100 sm:text-lg sm:leading-[30px]">
            FoodieBite is your go-to destination for delicious food,
            great ambiance, and memorable dining experiences.
            <br className="hidden sm:block" />
            We serve a variety of cuisines made with fresh ingredients
            and a passion for good food.
          </p>
        </div>

        {/* Decorative Separator */}
        <div className="my-7 flex items-center justify-center gap-5 sm:my-8">

          <span className="h-[2px] w-20 bg-[#ffb51b] sm:w-[145px]" />

          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="size-7 text-[#ffb51b]"
          >
            <path
              d="M7 4L25 28M25 4L7 28"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M4 5L11 3L14 10L9 14L4 5ZM28 5L21 3L18 10L23 14L28 5Z"
              fill="currentColor"
            />
          </svg>

          <span className="h-[2px] w-20 bg-[#ffb51b] sm:w-[145px]" />

        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-6 lg:gap-x-7">

          {navigation.map((item, index) => (
            <div key={item.name} className="flex items-center gap-4 sm:gap-6 lg:gap-7">

              <Link
                href={item.href}
                className="whitespace-nowrap font-serif text-base text-white transition-colors duration-300 hover:text-[#ffb51b] sm:text-xl"
              >
                {item.name}
              </Link>

              {index !== navigation.length - 1 && (
                <span className="hidden text-xl text-white sm:block">
                  |
                </span>
              )}

            </div>
          ))}

        </nav>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-9 sm:gap-5">

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex size-11 items-center justify-center rounded-full border-2 border-[#ffb51b] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffb51b] hover:text-[#0b121d] sm:size-[50px]"
            >
              {social.icon}
            </a>
          ))}

        </div>

        {/* Copyright */}
        <div className="mt-9 border-t border-white/40 pt-5 text-center sm:mt-10 sm:pt-6">

          <p className="font-serif text-sm text-white sm:text-xl">
            © 2026{" "}
            <span className="font-bold text-[#ffb51b]">
              FoodieBite.
            </span>{" "}
            All Rights Reserved. Powered by Lestow.
          </p>

        </div>

      </div>
    </footer>
  );
}
