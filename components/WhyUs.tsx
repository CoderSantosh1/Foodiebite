import { Bike, ChefHat, Leaf, Utensils } from "lucide-react";

const benefits = [
  { title: "Wide Food Variety", text: "Explore a delicious range of burgers, pizzas, pastas, Chinese and more.", Icon: Utensils },
  { title: "Fresh Ingredients", text: "We use high-quality, fresh ingredients in every bite.", Icon: Leaf },
  { title: "Unmatched Taste", text: "Authentic recipes and rich flavors, made with care.", Icon: ChefHat },
  { title: "On-Time Delivery", text: "Enjoy your favorites hot, fresh and delivered on time.", Icon: Bike },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#fff8ee] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-orange-600">OUR STRENGTH</p>
        <h2 className="mb-10 font-serif text-4xl font-bold text-emerald-950 sm:text-5xl">Why We Are The <i className="text-orange-600">Best?</i></h2>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, Icon }) => (
            <article key={title} className="border-b border-orange-200 pb-6 transition duration-300 hover:-translate-y-2 lg:border-b-0 lg:border-r lg:pr-6">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-4 text-emerald-950"><Icon size={34} /></div>
              <h3 className="text-xl font-extrabold text-emerald-950">{title}</h3>
              <p className="mt-2 leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
