"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Star } from "lucide-react";

const categories = ["Burgers", "Pizzas", "Pastas", "Chinese", "Desserts", "Beverages"];
const dishes = [
  { name: "Classic Cheese Burger", category: "Burgers", image: "/images/menu-burger.webp", price: "199", rating: "4.8" },
  { name: "Crispy Chicken Burger", category: "Burgers", image: "/images/menu-burger.webp", price: "229", rating: "4.7" },
  { name: "Double Decker Burger", category: "Burgers", image: "/images/menu-burger.webp", price: "249", rating: "4.6" },
  { name: "Garden Fresh Pizza", category: "Pizzas", image: "/images/menu-pizza.webp", price: "279", rating: "4.9" },
  { name: "Creamy Alfredo Pasta", category: "Pastas", image: "/images/menu-pasta-updated.webp", price: "259", rating: "4.8" },
  { name: "Wok Tossed Noodles", category: "Chinese", image: "/images/menu-chinese-new.webp", price: "239", rating: "4.7" },
  { name: "Chocolate Layer Cake", category: "Desserts", image: "/images/menu-desserts-new.webp", price: "149", rating: "4.9" },
  { name: "Strawberry Shake", category: "Beverages", image: "/images/menu-beverages-new.webp", price: "129", rating: "4.6" },
];

export default function PopularDishes() {
  const [activeCategory, setActiveCategory] = useState("Burgers");
  const visibleDishes = dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="popular-dishes" className="bg-white px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl italic text-orange-600">Our Popular Dishes</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-emerald-950">Made fresh, loved by all</h2>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
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
                <button aria-label={`Save ${dish.name}`} className="absolute right-3 top-3 rounded-full bg-white p-2 text-orange-600 shadow"><Heart size={18} /></button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-emerald-950">{dish.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-slate-600"><Star size={15} className="fill-orange-500 text-orange-500" />{dish.rating}<span>· 1.2k+ reviews</span></div>
                <div className="mt-3 flex items-center justify-between"><strong className="text-xl text-orange-600">₹{dish.price}</strong><a href="#contact" className="rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-950">Order now</a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
