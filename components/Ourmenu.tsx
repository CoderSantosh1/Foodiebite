
"use client";

import Image from "next/image";
import Link from "next/link";
import { ForkKnife, Utensils } from "lucide-react";

const menuCategories = [
  {
    name: "Pizza",
    image: "/images/menu-pizza.webp",
    href: "#popular-dishes",
  },
  {
    name: "Burger",
    image: "/images/menu-burger.webp",
    href: "#popular-dishes",
  },
  {
    name: "Pasta",
    image: "/images/menu-pasta.webp",
    href: "#popular-dishes",
  },
  {
    name: "Chinese",
    image: "/images/menu-chinese-new.webp",
    href: "#popular-dishes",
  },
  {
    name: "Desserts",
    image: "/images/menu-desserts-new.webp",
    href: "#popular-dishes",
  },
  {
    name: "Beverages",
    image: "/images/menu-beverages-new.webp",
    href: "#popular-dishes",
  },
];

export default function OurMenu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="mx-auto max-w-[1350px]">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          {/* Decorative Icon */}
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />

            <ForkKnife
              size={35}
              strokeWidth={2.2}
              className="text-[#f47716]"
            />

            <span className="h-[2px] w-16 bg-[#f47716] sm:w-24" />
          </div>

          {/* Script Heading */}
          <p className="font-serif text-3xl font-bold italic text-[#e87522] sm:text-4xl">
            Our Menu
          </p>

          {/* Main Heading */}
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#00271e] sm:text-4xl lg:text-[46px]">
            Browse Our Delicious Menu
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
