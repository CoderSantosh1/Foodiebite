import Image from "next/image";
import { ChefHat } from "lucide-react";

const chefs = [
  { name: "Chef Michael Roberts", role: "Head Chef", image: "/images/menu-pizza.webp" },
  { name: "Chef Emily Carter", role: "Sous Chef", image: "/images/menu-pasta-updated.webp" },
  { name: "Chef Daniel Mitchell", role: "Pastry Chef", image: "/images/menu-desserts-new.webp" },
];

export default function Team() {
  return (
    <section className="bg-[#fffaf5] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-bold text-orange-600">OUR TEAM</p>
        <h2 className="mt-2 font-serif text-4xl font-bold text-emerald-950">Meet Our <i className="text-orange-600">Expert Chefs</i></h2>
        <p className="mt-3 text-slate-600">The talented chefs behind our delicious and diverse menu.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {chefs.map((chef) => (
            <article key={chef.name} className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2">
              <div className="relative h-64 bg-orange-50"><Image src={chef.image} alt={`${chef.name} specialty`} fill sizes="33vw" className="object-contain p-5" /></div>
              <div className="p-5"><ChefHat className="mx-auto -mt-9 mb-2 rounded-full bg-orange-500 p-2 text-white" size={42} /><h3 className="text-xl font-extrabold text-emerald-950">{chef.name}</h3><p className="mt-1 text-slate-600">{chef.role}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
