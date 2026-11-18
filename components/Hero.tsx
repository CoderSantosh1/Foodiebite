
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[580px] overflow-hidden bg-[#001b12] text-white lg:min-h-[610px]">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 98%, #8b9d8f 98%), linear-gradient(0deg, transparent 98%, #8b9d8f 98%)",
          backgroundSize: "275px 100%",
        }}
      />

      {/* Main Container */}
      <div className="relative mx-auto grid min-h-[580px] max-w-[1440px] items-center gap-8 px-5 py-12 sm:px-8 lg:min-h-[610px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:px-11 lg:py-10">

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start">

          {/* Heading */}
          <div className="relative max-w-full">

            <h1 className="font-serif text-[clamp(42px,5.8vw,94px)] font-bold leading-[1.08] tracking-tight">

              <span className="block whitespace-nowrap text-white">
                {siteData.hero.title}
              </span>

              <span className="mt-1 block whitespace-nowrap font-serif italic text-[#ff9f00]">
                {siteData.hero.highlight}
              </span>

            </h1>

            {/* Decorative Accent */}
            <div className="absolute right-8 top-[-0px] flex rotate-[30deg] items-center gap-1">
            {/* Decorative Orange Accent */}
           
            {/* Decorative Orange Accent */}
            <svg
              viewBox="0 0 64 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute -right-7 -top-8 h-[52px] w-[64px] sm:-right-9 sm:-top-10 sm:h-[60px] sm:w-[72px]"
            >
              {/* Left Leaf */}
              <path
                d="M15 43C8 36 7 23 10 13C12 6 17 3 21 8C27 16 27 33 20 42C18 44 16 44 15 43Z"
                fill="#FF9F00"
              />

              {/* Right Leaf */}
              <path
                d="M35 42C34 31 39 16 47 8C52 3 58 5 58 12C58 23 49 37 39 43C37 44 36 44 35 42Z"
                fill="#FF9F00"
              />
            </svg>

            </div>

          </div>

          {/* Description */}
          <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-6">

            <span className="hidden h-[3px] w-[115px] shrink-0 bg-[#ffb900] sm:block" />

            <p className="max-w-[540px] text-base leading-7 text-gray-100 sm:text-lg sm:leading-8">
              {siteData.hero.description}
            </p>

          </div>

          {/* CTA Button */}
          <Link
            href={siteData.hero.buttonHref}
            className="mt-8 inline-flex items-center gap-5 rounded-md bg-[#ffbf27] px-7 py-4 text-base font-bold text-[#101b0d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd15c] sm:ml-[140px] sm:mt-9 sm:px-8 sm:text-lg"
          >
            {siteData.hero.button}
            <ArrowRight size={23} strokeWidth={2.2} />
          </Link>

        </div>

        {/* Right Food Image */}
        <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:-ml-4 lg:max-w-none">

          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-[15%] rounded-full bg-[#ff9f00]/10 blur-[90px]" />

          {/* Food Image */}
          <div className="relative aspect-square w-full max-w-[540px]">

            <Image
              src={siteData.hero.image}
              alt={siteData.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-contain mix-blend-lighten drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
