"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data";

const galleryImages = siteData.gallery.images;

const imagesPerPage = 4;
const pageCount = galleryImages.length / imagesPerPage;

export default function Gallery() {
  const [activePage, setActivePage] = useState(0);
  const visibleImages = galleryImages.slice(
    activePage * imagesPerPage,
    (activePage + 1) * imagesPerPage,
  );

  const move = (direction: number) => {
    setActivePage((page) => (page + direction + pageCount) % pageCount);
  };

  return (
    <section id="gallery" className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <header className="mb-8 text-center sm:mb-9">
          <div className="mb-2 flex items-center justify-center gap-4 text-[#f47716]">
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
            <Camera size={32} fill="#f47716" strokeWidth={2.4} aria-hidden="true" />
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#003c2a] sm:text-5xl lg:text-[54px]">
            Our Food <span className="italic text-[#f47716]">Gallery</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            A glimpse of our delicious food and cozy dining experience.
          </p>
        </header>

        <div className="relative px-1 sm:px-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
            {visibleImages.map((item, index) => (
              <div key={`${activePage}-${index}`} className="group relative aspect-[1.42/1] overflow-hidden rounded-2xl bg-[#fff7ef]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous gallery images"
            className="absolute -left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#003c2a] shadow-[0_3px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#f47716] hover:text-white sm:left-0"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next gallery images"
            className="absolute -right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#003c2a] shadow-[0_3px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#f47716] hover:text-white sm:right-0"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2.5" aria-label="Gallery pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActivePage(index)}
              aria-label={`Show gallery page ${index + 1}`}
              aria-current={activePage === index}
              className={`size-3 rounded-full transition-colors ${activePage === index ? "bg-[#f47716]" : "bg-gray-300 hover:bg-orange-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
