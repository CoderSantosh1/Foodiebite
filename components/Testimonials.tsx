
"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    text: "The food here is absolutely amazing! Fresh ingredients, great taste and excellent service. It’s our go-to place for family dinners. Highly recommended!",
    color: "#a85b35",
    hair: "#513527",
  },
  {
    name: "Olivia Bennett",
    text: "A lovely place with warm service and food that tastes as good as it looks. The pasta is wonderful, and we always leave planning our next visit.",
    color: "#d18a54",
    hair: "#30211d",
  },
  {
    name: "Maya Thompson",
    text: "Everything was fresh, full of flavor, and brought to our table right on time. FoodieBite has quickly become our favorite neighborhood restaurant.",
    color: "#8d4b32",
    hair: "#39251f",
  },
];

function CustomerPortrait({
  hair,
  color,
}: {
  hair: string;
  color: string;
}) {
  return (
    <svg
      viewBox="0 0 180 180"
      className="h-full w-full"
      role="img"
      aria-label="Customer portrait illustration"
    >
      <defs>
        <clipPath id="portraitClip">
          <circle cx="90" cy="90" r="86" />
        </clipPath>

        <linearGradient id="portraitBg" x2="0" y2="1">
          <stop stopColor="#f5d9b3" />
          <stop offset="1" stopColor="#fff3df" />
        </linearGradient>
      </defs>

      <g clipPath="url(#portraitClip)">
        <rect width="180" height="180" fill="url(#portraitBg)" />

        <circle
          cx="28"
          cy="35"
          r="24"
          fill="#fff9ed"
          opacity=".55"
        />

        <path
          d="M28 180c5-40 23-58 62-58s57 18 62 58"
          fill={color}
        />

        <path
          d="M54 77c-6-35 9-58 37-58 33 0 46 25 35 65l-9 35H59z"
          fill={hair}
        />

        <ellipse
          cx="90"
          cy="81"
          rx="34"
          ry="42"
          fill="#f1bd91"
        />

        <path
          d="M54 75c-3-34 12-54 38-54 22 0 37 17 37 40-12-3-23-14-27-23-11 17-28 27-48 30z"
          fill={hair}
        />

        <path
          d="M59 68c-12 17-10 53 1 65l8-16-3-40zM122 62c12 12 13 49 2 66l-9-12 5-42z"
          fill={hair}
        />

        <path
          d="M76 82h2m24 0h2"
          stroke="#50372c"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M79 101q11 10 22 0"
          fill="none"
          stroke="#a64f48"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M78 119l12 14 12-14"
          fill="#fff7ed"
        />
      </g>
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const review = reviews[active];

  const change = (step: number) => {
    setActive(
      (active + step + reviews.length) % reviews.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-white bg-center bg-no-repeat px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/images/Testmonial-bg-new.webp')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Section Label */}
        <div className="mb-2 flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-orange-500 sm:w-16" />

          <p className="text-base font-bold text-orange-700 sm:text-xl">
            Our Customers Say
          </p>

          <span className="h-[2px] w-10 bg-orange-500 sm:w-16" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl font-bold text-emerald-950 sm:text-5xl lg:text-6xl">
          Our{" "}
          <i className="relative inline-block text-orange-600">
            Testimonials

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
        <div className="mt-8 flex items-center justify-center gap-4 text-orange-400">
          <span className="h-px w-20 bg-orange-200 sm:w-28" />

          <span className="font-serif text-6xl leading-none">
            “
          </span>

          <span className="h-px w-20 bg-orange-200 sm:w-28" />
        </div>

        {/* Review Text */}
        <div className="relative mt-1 flex items-center justify-center">

          <button
            type="button"
            onClick={() => change(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white text-emerald-900 transition hover:bg-orange-500 hover:text-white sm:left-2 sm:size-14"
          >
            <ChevronLeft size={30} />
          </button>

          <blockquote
            key={review.name}
            className="mx-12 max-w-4xl text-base leading-7 text-gray-800 sm:mx-20 sm:text-xl sm:leading-9"
          >
            “{review.text}”
          </blockquote>

          <button
            type="button"
            onClick={() => change(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white text-emerald-900 transition hover:bg-orange-500 hover:text-white sm:right-2 sm:size-14"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Customer Name Ribbon */}
        <div className="relative mx-auto mt-7 w-fit">

          <div className="relative z-10 rounded-[45%_8%_45%_8%] border-2 border-emerald-800 bg-emerald-800 px-10 py-2 text-lg font-bold text-white shadow-md sm:px-14 sm:text-2xl">

            <span className="absolute inset-1 rounded-[45%_8%_45%_8%] border border-dashed border-white/70" />

            <span className="relative">
              — {review.name}
            </span>
          </div>

          <span className="absolute -bottom-2 left-1/2 h-5 w-[88%] -translate-x-1/2 bg-emerald-950" />
        </div>

        {/* Customer Portrait */}
        <div className="relative mx-auto mt-5 size-36 rounded-full border-[5px] border-orange-400 bg-white p-1 shadow-[0_8px_18px_rgba(0,0,0,0.16)] sm:size-48">

          <CustomerPortrait
            hair={review.hair}
            color={review.color}
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
