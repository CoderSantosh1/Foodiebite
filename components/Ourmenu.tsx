
"use client";

import Image from "next/image";
import Link from "next/link";
import { ForkKnife, Utensils } from "lucide-react";
import { siteData } from "@/data";

const menuCategories = siteData.menu.categories;
const menuHeaderIcons = { ForkKnife, Utensils };
const MenuHeaderIcon = menuHeaderIcons[siteData.menu.icon as keyof typeof menuHeaderIcons];

export default function OurMenu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1350px]">

        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-10">

          {/* Decorative Icon */}
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />

            <MenuHeaderIcon
              size={35}
              strokeWidth={2.2}
              className="text-[#f47716]"
            />

            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
          </div>

          {/* Script Heading */}
          <p className="font-serif text-3xl font-bold italic text-[#e87522] sm:text-4xl">
            {siteData.menu.eyebrow}
          </p>

          {/* Main Heading */}
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#00271e] sm:text-4xl lg:text-[46px]">
            {siteData.menu.title}
          </h2>

        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-3">

          {menuCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative flex aspect-[1/1.03] flex-col items-center justify-center overflow-hidden rounded-[25px] border border-[#f6e9dc] bg-[#fff5ec] px-3 py-4 shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
            >

              {/* Category Image */}
              <div className="relative w-full flex-1 min-h-0">

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              {/* Category Name */}
              <h3 className="mt-2 text-center font-serif text-lg font-bold text-[#00271e] sm:text-xl">
              {category.name}
              </h3>

              {/* Orange Underline */}
              <span className="mt-2 h-[4px] w-10 rounded-full bg-[#f47716] transition-all duration-300 group-hover:w-16" />

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
