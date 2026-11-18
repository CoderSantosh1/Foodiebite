
"use client";

import Image from "next/image";
import {
  Bike,
  ChefHat,
  Leaf,
  Sandwich,
} from "lucide-react";
import { siteData } from "@/data";

const icons = { Bike, ChefHat, Leaf, Sandwich };
const benefits = siteData.whyUs.benefits;

function DecorativeMarks() {
  return (
    <div className="pointer-events-none absolute -right-3 -top-1 flex rotate-12 items-center gap-1">
      <span className="h-3 w-1 rounded-full bg-[#ff9f00]" />
      <span className="h-5 w-1 rounded-full bg-[#ff9f00]" />
      <span className="h-3 w-1 rounded-full bg-[#ff9f00]" />
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative mt-0 overflow-hidden bg-[#fff8ee] px-4 pb-8 sm:mt-0 sm:px-8 sm:pb-10 lg:mt-[-30px] lg:px-12"
    >
      {/* Main Container */}
      <div className="relative mx-auto max-w-[1300px]">

        {/* Pizza Decoration */}
        <div className="pointer-events-none absolute right-0 top-[-25px] z-0 hidden h-[205px] w-[245px] xl:block 2xl:h-[225px] 2xl:w-[270px]">
          <Image
            src={siteData.whyUs.image}
            alt={siteData.whyUs.imageAlt}
            fill
            priority
            sizes="270px"
            className="object-contain object-right-top"
          />
        </div>

        {/* Section Heading */}
        <div className="relative z-10 px-1 py-8 sm:px-10 sm:py-15">

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-lg font-bold text-[#003c2a] sm:text-2xl">
              {siteData.whyUs.eyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#ff9f00] sm:w-28" />
          </div>

          <h2 className="mt-2 max-w-[340px] font-sans text-[27px] font-extrabold leading-[1.12] text-[#003c2a] sm:text-4xl lg:max-w-none lg:text-[50px]">
            {siteData.whyUs.title}{" "}
            <span className="text-[#f47716]">
              {siteData.whyUs.highlight}
            </span>
          </h2>

        </div>

        {/* Benefits Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-4 lg:gap-y-0">

          {benefits.map(({ title, text, icon }, index) => {
            const Icon = icons[icon as keyof typeof icons];
            return (
            <article
              key={title}
              className={`group relative px-1 sm:px-5 lg:px-6 ${
                index % 2 === 0
                  ? "sm:border-r sm:border-[#eadcc9]"
                  : ""
              } ${
                index < 2 ? "sm:pb-8 lg:pb-0" : ""
              } ${
                index < 3
                  ? "lg:border-r lg:border-[#eadcc9]"
                  : ""
              }`}
            >

              {/* Icon */}
              <div className="relative mx-auto mb-2.5 flex size-[78px] items-center justify-center rounded-full bg-[#ffedbd] transition-transform duration-300 group-hover:-translate-y-2 sm:mx-0 sm:mb-3 sm:size-[96px]">

                <Icon
                  size={48}
                  strokeWidth={1.7}
                  className="text-[#003c2a] transition-transform duration-300 group-hover:scale-110 sm:size-[61px]"
                />

                <DecorativeMarks />

              </div>

              {/* Title */}
              <h3 className="text-center text-lg font-extrabold leading-tight text-[#003c2a] sm:text-left sm:text-[22px] lg:text-[25px]">
                {title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-1.5 max-w-[270px] text-center text-sm leading-[22px] text-[#343b45] sm:mx-0 sm:mt-2 sm:text-left sm:text-[17px] sm:leading-[26px]">
                {text}
              </p>

            </article>
          );
          })}

        </div>

      </div>
    </section>
  );
}
