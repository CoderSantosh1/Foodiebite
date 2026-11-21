"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { UtensilsCrossed, ChevronLeft, ChevronRight, X } from "lucide-react";
import { siteData } from "@/data";

const galleryImages = siteData.gallery.images;

const imagesPerPage = 4;
const pageCount = galleryImages.length / imagesPerPage;

export default function Gallery() {
  const [activePage, setActivePage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage = selectedImageIndex === null ? null : galleryImages[selectedImageIndex];
  const visibleImages = galleryImages.slice(
    activePage * imagesPerPage,
    (activePage + 1) * imagesPerPage,
  );

  const move = (direction: number) => {
    setActivePage((page) => (page + direction + pageCount) % pageCount);
  };

  const moveSelectedImage = (direction: number) => {
    setSelectedImageIndex((index) =>
      index === null ? null : (index + direction + galleryImages.length) % galleryImages.length,
    );
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImageIndex(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const direction = event.key === "ArrowLeft" ? -1 : 1;
        setSelectedImageIndex((index) =>
          index === null ? null : (index + direction + galleryImages.length) % galleryImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-[1300px]">
        <header className="mb-6 text-center sm:mb-8">
          <div className="mb-2 flex items-center justify-center gap-4 text-[#f47716]">
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
            <UtensilsCrossed size={32} strokeWidth={2.4} aria-hidden="true" />
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#003c2a] sm:text-5xl lg:text-[54px]">
            Our Food <span className="italic text-[#f47716]">Gallery</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            A glimpse of our delicious food and cozy dining experience.
          </p>
        </header>

        <div className="relative px-12 sm:px-14">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
            {visibleImages.map((item, index) => (
              <button
                key={`${activePage}-${index}`}
                type="button"
                onClick={() => setSelectedImageIndex(activePage * imagesPerPage + index)}
                aria-label={`View ${item.title}`}
                className="group relative aspect-[1.42/1] cursor-zoom-in overflow-hidden rounded-2xl bg-[#fff7ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous gallery images"
            className="absolute left-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#003c2a] shadow-[0_3px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#f47716] hover:text-white"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next gallery images"
            className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#003c2a] shadow-[0_3px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#f47716] hover:text-white"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2.5" aria-label="Gallery pages">
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
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 pt-16 sm:p-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-emerald-950"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={24} />
          </button>
          <div className="flex w-full max-w-[71rem] items-center justify-center gap-2 sm:gap-6">
            <button
              type="button"
              aria-label="Previous image"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-950 shadow"
              onClick={(event) => {
                event.stopPropagation();
                moveSelectedImage(-1);
              }}
            >
              <ChevronLeft size={26} />
            </button>
            <div className="relative h-[68vh] min-w-0 w-full max-w-5xl flex-1" onClick={(event) => event.stopPropagation()}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              aria-label="Next image"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-950 shadow"
              onClick={(event) => {
                event.stopPropagation();
                moveSelectedImage(1);
              }}
            >
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
