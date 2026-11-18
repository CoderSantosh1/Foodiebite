
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteData } from "@/data";

const faqData = siteData.faq;
const faqs = faqData.items;

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1300px]">

        {/* Section Heading */}
        <div className="relative mb-12 text-center sm:mb-14 lg:mb-16">

          {/* Generated Background With Both Decorative Icons */}
          <div
            className="pointer-events-none absolute inset-x-0 -top-5 hidden h-[190px] bg-top bg-no-repeat lg:block"
            style={{
              backgroundImage: `url('${faqData.decorationImage}')`,
              backgroundSize: "100% 235px",
            }}
            aria-hidden="true"
          />

          {/* Quick Answers */}
          <div className="relative z-10 mb-3 flex items-center justify-center gap-4">

            <span className="h-[2px] w-16 bg-[#f47716] sm:w-20" />

            <span className="whitespace-nowrap text-lg font-bold text-[#e85d12] sm:text-2xl">
              {faqData.eyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#f47716] sm:w-20" />

          </div>

          {/* Main Heading */}
          <h2 className="relative z-10 font-serif text-[30px] font-bold leading-[1.2] text-[#003c2a] sm:text-[42px] lg:text-[52px]">
            {faqData.title.replace(" Questions", "")}{" "}
            <span className="relative inline-block font-serif italic text-[#e85d12]">
              Questions

              {/* Curved Underline */}
              <svg
                viewBox="0 0 250 20"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3 w-full"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 15 Q125 -8 245 12"
                  stroke="#f47716"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="relative z-10 mx-auto mt-7 max-w-[650px] text-base leading-7 text-[#465365] sm:text-lg sm:leading-8">
            {faqData.description}
          </p>

        </div>

        {/* FAQ Main Content */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.25fr] lg:gap-12">

          {/* Left Burger Image */}
          <div className="relative mx-auto w-full max-w-[480px]">

            <div className="relative aspect-[0.9/1] w-full overflow-hidden rounded-[30px] border-[7px] border-white bg-[#fff4e9] shadow-[0_8px_20px_rgba(0,0,0,0.17)]">

              <Image
                src={faqData.image}
                alt={faqData.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />

            </div>

          </div>

          {/* Right FAQ Accordion */}
          <div className="flex w-full flex-col gap-3.5">

            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 sm:rounded-[20px] ${isOpen ? "border-orange-200 shadow-[0_12px_28px_rgba(35,52,40,0.12)]" : "border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 hover:border-orange-100 hover:shadow-[0_9px_22px_rgba(35,52,40,0.1)]"}`}
                >

                  {/* Question Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className={`flex w-full items-center gap-3 px-3.5 py-3.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-orange-500 sm:gap-4 sm:px-5 sm:py-4 ${
                      isOpen
                        ? "bg-[#fff5e9]"
                        : "bg-white hover:bg-[#fffaf4]"
                    }`}
                  >

                    {/* Q Icon */}
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white transition-colors sm:size-11 sm:text-xl ${isOpen ? "bg-[#f36a0b] shadow-md shadow-orange-200" : "bg-[#f36a0b]"}`}>
                      Q
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-[15px] font-bold leading-5 text-[#003c27] sm:text-lg sm:leading-6">
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <ChevronDown
                      size={21}
                      strokeWidth={2.7}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#f36a0b]"
                          : "text-[#003c27]"
                      }`}
                    />

                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">
                      <p className="border-t border-orange-100/80 px-4 pb-4 pt-3 text-sm leading-6 text-[#465365] sm:px-6 sm:pb-5 sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
