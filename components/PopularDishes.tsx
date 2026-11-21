"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { siteData } from "@/data";

const categories = siteData.popularDishes.categories;
const dishes = siteData.popularDishes.dishes;

export default function PopularDishes() {
  const [activeCategory, setActiveCategory] = useState("Burgers");
  const visibleDishes = dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="popular-dishes" className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl italic text-orange-600">{siteData.popularDishes.eyebrow}</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-emerald-950">{siteData.popularDishes.title}</h2>
        </div>
        <div className="mb-6">
          <label htmlFor="popular-dishes-category" className="sr-only">
            Filter popular dishes by category
          </label>
          <div className="relative sm:hidden">
            <select
              id="popular-dishes-category"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              className="w-full appearance-none rounded-full border border-orange-200 bg-orange-50 px-4 py-3 pr-10 text-sm font-bold text-emerald-950"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-emerald-950"
            />
          </div>
        </div>
        <div className="mb-8 hidden flex-wrap justify-center gap-2 sm:flex">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-1 ${activeCategory === category ? "bg-emerald-950 text-white" : "bg-orange-50 text-emerald-950 hover:bg-orange-100"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDishes.map((dish, index) => (
            <article key={dish.name} className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ animation: `rise-in .5s ${index * 70}ms both` }}>
              <div className="relative h-52 overflow-hidden bg-orange-50">
                <Image src={dish.image} alt={dish.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3 transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-emerald-950">{dish.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-slate-600"><Star size={15} className="fill-orange-500 text-orange-500" />{dish.rating}<span>{siteData.popularDishes.reviewLabel}</span></div>
                <div className="mt-3 flex items-center justify-between"><strong className="text-xl text-orange-600">₹{dish.price}</strong><a href="#contact" className="rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-950">{siteData.popularDishes.orderButton}</a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
