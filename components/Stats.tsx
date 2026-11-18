
import {
  ChefHat,
  Store,
  Users,
  Utensils,
} from "lucide-react";
import { siteData } from "@/data";

const icons = { ChefHat, Store, Users, Utensils };
const stats = siteData.stats.items;

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-emerald-950 bg-center bg-no-repeat px-5 py-12 text-white sm:py-14 lg:py-16"
      style={{
        backgroundImage: `url('${siteData.stats.background}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4 lg:gap-6">

        {stats.map(({ value, label, icon }, index) => {
          const Icon = icons[icon as keyof typeof icons];
          return (
          <div
            key={label}
            className={`group flex flex-col items-center justify-center ${
              index !== 0
                ? "lg:border-l lg:border-white/25"
                : ""
            }`}
          >
            <Icon
              size={48}
              strokeWidth={1.8}
              className="mb-2 text-amber-400 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110"
            />

            <strong className="block text-4xl font-extrabold sm:text-5xl">
              {value}
            </strong>

            <span className="mt-1 text-sm font-semibold sm:text-lg">
              {label}
            </span>
          </div>
          );
        })}

      </div>
    </section>
  );
}
