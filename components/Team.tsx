
import Image from "next/image";
import { ChefHat } from "lucide-react";
import { siteData } from "@/data";

const teamData = siteData.team;
const chefs = teamData.chefs;

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#f47716]" />
            <span className="text-base font-bold text-[#e85d12] sm:text-lg">
              {teamData.eyebrow}
            </span>
            <span className="h-[2px] w-14 bg-[#f47716]" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-[#003c2a] sm:text-4xl lg:text-5xl">
            {teamData.title}{" "}
            <span className="font-serif italic text-[#f47716]">
              {teamData.highlight}
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            {teamData.description}
          </p>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {chefs.map((chef) => (
            <article
              key={chef.name}
              className="group relative overflow-hidden rounded-[28px] bg-[#fffaf5] shadow-[0_8px_20px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Complete Chef Image */}
              <div className="relative h-[390px] overflow-hidden bg-[#fffaf5] sm:h-[400px] lg:h-[360px]">

                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

              </div>

              {/* Curved White Content */}
              <div className="relative -mt-[42px] bg-[#fffaf5] px-4 pb-7 pt-[48px] text-center">

                {/* Curved Top */}
                <div className="pointer-events-none absolute -top-[34px] left-[-10%] h-[70px] w-[120%] rounded-[50%] bg-[#fffaf5]" />

                {/* Chef Icon */}
                <div className="absolute left-1/2 top-[-30px] z-20 flex size-[64px] -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#fff0df] bg-[#f47716] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ChefHat
                    size={32}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>

                {/* Name */}
                <h3 className="relative z-10 font-serif text-xl font-bold text-[#003c2a] sm:text-2xl">
                  {chef.name}
                </h3>

                {/* Role */}
                <p className="relative z-10 mt-2 text-base font-medium text-gray-600">
                  {chef.role}
                </p>

                {/* Bottom Line */}
                <div className="mx-auto mt-4 h-[4px] w-14 rounded-full bg-[#ff9f00]" />

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
