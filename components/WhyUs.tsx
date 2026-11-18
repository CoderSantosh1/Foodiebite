
"use client";

import Image from "next/image";
import {
  Bike,
  ChefHat,
  Leaf,
  Sandwich,
} from "lucide-react";

const benefits = [
  {
    title: "Wide Food Variety",
    text: "Explore a delicious range of burgers, pizzas, pastas, Chinese and more.",
    Icon: Sandwich,
  },
  {
    title: "Fresh Ingredients",
    text: "We use high-quality, fresh ingredients to bring you great taste in every bite.",
    Icon: Leaf,
  },
  {
    title: "Unmatched Taste",
    text: "Authentic recipes, rich flavors and a perfect balance in every dish.",
    Icon: ChefHat,
  },
  {
    title: "On-Time Delivery",
    text: "Enjoy your favorite food hot, fresh and delivered right on time.",
    Icon: Bike,
  },
];

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
      className="relative overflow-hidden bg-[#fff8ee] px-5 pb-10 sm:px-8  lg:px-12  mt-[-30px]"
    >
      {/* Main Container */}
      <div className="relative mx-auto max-w-[1300px]">

        {/* Pizza Decoration */}
        <div className="pointer-events-none absolute right-0 top-[-25px] z-0 hidden h-[205px] w-[245px] xl:block 2xl:h-[225px] 2xl:w-[270px]">
          <Image
            src="/images/why-pizza.webp"
            alt="Fresh pizza slice with basil and tomatoes"
            fill
            priority
            sizes="270px"
            className="object-contain object-right-top"
          />
        </div>

        {/* Section Heading */}
        <div className="relative z-10 px-10 py-15">

          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-[#003c2a] sm:text-2xl">
              Our Strength
            </span>

            <span className="h-[2px] w-24 bg-[#ff9f00] sm:w-28" />
          </div>

          <h2 className="mt-2 font-sans text-3xl font-extrabold leading-tight text-[#003c2a] sm:text-4xl lg:text-[50px]">
            Why We Are The{" "}
            <span className="text-[#f47716]">
              Best?
            </span>
          </h2>

        </div>

        {/* Benefits Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">

          {benefits.map(({ title, text, Icon }, index) => (
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
              <div className="relative mb-3 flex size-[96px] items-center justify-center rounded-full bg-[#ffedbd] transition-transform duration-300 group-hover:-translate-y-2">

                <Icon
                  size={61}
                  strokeWidth={1.7}
                  className="text-[#003c2a] transition-transform duration-300 group-hover:scale-110"
                />

                <DecorativeMarks />

              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold leading-tight text-[#003c2a] sm:text-[22px] lg:text-[25px]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[270px] text-base leading-[26px] text-[#343b45] sm:text-[17px] sm:leading-[26px]">
                {text}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
