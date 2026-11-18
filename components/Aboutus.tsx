
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Leaf,
  Utensils,
} from "lucide-react";
import { siteData } from "@/data";

const aboutIcons = { ChefHat, Leaf, Utensils };
const aboutData = siteData.about;

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-2 lg:gap-14">

        {/* Left Image Section */}
        <div className="relative mx-auto w-full max-w-[600px]">

          {/* Main Pizza Image */}
          <div className="relative aspect-[1.15/1] w-full">

            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain"
            />

            {/* Pizza Top Decorative Accent */}
            <svg
              viewBox="0 0 100 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute -top-5 left-[53%] z-20 h-[75px] w-[90px] sm:-top-8 sm:h-[90px] sm:w-[105px]"
            >
              <path
                d="M12 43 Q25 43 43 55"
                stroke="#F59E0B"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M48 8 Q57 23 63 42"
                stroke="#F59E0B"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M78 5 Q83 23 86 36"
                stroke="#F59E0B"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

          </div>

          {/* EST Badge */}
          <div className="absolute -left-1 top-1 z-10 flex h-[105px] w-[125px] -rotate-[9deg] items-center justify-center sm:left-0 sm:top-0 sm:h-[120px] sm:w-[140px]">

            <svg
              viewBox="0 0 150 130"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M18 24 Q28 10 53 13 L119 9 Q140 12 139 37 L145 82 Q143 105 120 108 L91 108 L76 124 L62 108 L29 108 Q9 105 8 82 L7 43 Q8 30 18 24Z"
                stroke="#F59E0B"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
            </svg>

            <span className="relative text-center text-xl font-bold leading-7 text-[#171717] sm:text-2xl">
              EST.
              <br />
              {aboutData.established}
            </span>

            {/* EST Badge Decorative Lines */}
            <svg
              viewBox="0 0 60 55"
              fill="none"
              className="pointer-events-none absolute -right-3 -top-9 h-12 w-14"
            >
              <path
                d="M15 35 Q12 22 10 8"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M29 32 Q31 16 37 3"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M42 37 Q48 27 55 24"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-3 left-0 z-10 flex size-[145px] flex-col items-center justify-center rounded-full border-[5px] border-white bg-[#171717] text-center text-white shadow-xl sm:-bottom-3 sm:left-2 sm:size-[175px]">

            <span className="font-serif text-4xl font-bold text-[#ffb323] sm:text-5xl">
              {aboutData.experience}
            </span>

            <span className="mt-1 text-base font-bold leading-5 sm:text-lg sm:leading-6">
              Years of
              <br />
              Experience
            </span>

          </div>

        </div>

        {/* Right Content Section */}
        <div className="flex flex-col">

          {/* Small Heading */}
          <div className="mb-3 flex items-center gap-4">
            <span className="text-sm font-bold tracking-[2px] text-[#e87512] sm:text-base">
              {aboutData.eyebrow}
            </span>

            <span className="h-[2px] w-12 bg-[#f59e0b]" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl font-bold leading-[1.15] text-[#171717] sm:text-5xl lg:text-[48px]">
            {aboutData.title}

            <span className="mt-1 block font-serif italic text-[#e87512]">
              {aboutData.highlight}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-[#424242] sm:text-[17px] sm:leading-[29px]">
            {aboutData.description}
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-gray-300">
            {aboutData.features.map((feature) => {
              const Icon = aboutIcons[feature.icon as keyof typeof aboutIcons];
              return (
                <div key={feature.label} className="flex flex-col items-center gap-3 px-2 py-2 sm:flex-row sm:gap-4 sm:px-4">
                  <Icon size={49} strokeWidth={1.8} className="shrink-0 text-[#ffad16] sm:size-[55px]" />
                  <span className="text-center text-xs font-bold leading-5 text-[#171717] sm:text-left sm:text-base sm:leading-6">{feature.label}</span>
                </div>
              );
            })}
          </div>

          {/* Learn More Button */}
          <div className="mt-9">
            <Link
              href={aboutData.buttonHref}
              className="inline-flex items-center justify-center gap-4 rounded-full bg-[#ffb51b] px-8 py-4 text-base font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f59e0b] sm:px-9 sm:text-lg"
            >
              {aboutData.button}
              <ArrowRight size={23} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
