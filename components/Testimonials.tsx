
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data";

const reviews = siteData.testimonials.items;

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const review = reviews[active];

  const change = (step: number) => {
    setActive((prev) => (prev + step + reviews.length) % reviews.length);
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#fff8ee] px-5 py-10 text-center sm:px-8 sm:py-12 lg:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${siteData.testimonials.background}')` }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Section Label */}
        <div className="mb-2 flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-orange-500 sm:w-16" />
          <p className="text-base font-bold text-orange-700 sm:text-xl">
            {siteData.testimonials.eyebrow}
          </p>
          <span className="h-[2px] w-10 bg-orange-500 sm:w-16" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl font-bold text-emerald-950 sm:text-5xl lg:text-6xl">
          Our{" "}
          <i className="relative inline-block text-orange-600">
            {siteData.testimonials.title.replace("Our ", "")}
            <svg
              viewBox="0 0 300 20"
              className="absolute -bottom-3 left-0 h-3 w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 15Q150 -5 296 12"
                fill="none"
                stroke="#f47716"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </i>
        </h2>

        {/* Quote Decoration */}
        <div className="mt-5 flex items-center justify-center gap-4 text-orange-400 sm:mt-8">
          <span className="h-px w-20 bg-orange-200 sm:w-28" />
          <span className="font-serif text-6xl leading-none">“</span>
          <span className="h-px w-20 bg-orange-200 sm:w-28" />
        </div>

        {/* Review Text */}
        <div className="relative mt-1 flex items-center justify-center">

          <button
            type="button"
            onClick={() => change(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 flex size-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border-2 border-orange-400 bg-white text-emerald-900 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:left-2 sm:size-14"
          >
            <ChevronLeft size={30} />
          </button>

          <blockquote
            key={review.name}
            className="mx-12 max-w-4xl text-sm leading-6 text-gray-800 sm:mx-20 sm:text-xl sm:leading-9"
          >
            “{review.text}”
          </blockquote>

          <button
            type="button"
            onClick={() => change(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 flex size-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border-2 border-orange-400 bg-white text-emerald-900 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:right-2 sm:size-14"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Customer Name Ribbon */}
        <div className="relative mx-auto mt-5 w-fit sm:mt-7">
          <div className="relative z-10 rounded-[45%_8%_45%_8%] border-2 border-emerald-800 bg-emerald-800 px-10 py-2 text-lg font-bold text-white shadow-md sm:px-14 sm:text-2xl">
            <span className="absolute inset-1 rounded-[45%_8%_45%_8%] border border-dashed border-white/70" />
            <span className="relative">— {review.name}</span>
          </div>

          <span className="absolute -bottom-2 left-1/2 h-5 w-[88%] -translate-x-1/2 bg-emerald-950" />
        </div>

        {/* Actual Customer Portrait */}
        <div key={review.name} className="relative mx-auto mt-4 size-32 overflow-hidden rounded-full border-[5px] border-orange-400 bg-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] sm:mt-5 sm:size-48">

          <Image
            src={review.image}
            alt={review.imageAlt}
            fill
            priority={active === 0}
            sizes="(max-width: 640px) 144px, 192px"
            className="rounded-full object-cover object-center"
          />

        </div>

        {/* Slider Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {reviews.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.name}'s testimonial`}
              aria-current={active === index}
              className={`size-3 rounded-full transition-all ${
                active === index
                  ? "scale-110 bg-orange-500"
                  : "bg-gray-300 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
