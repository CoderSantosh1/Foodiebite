
"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "/images/menu-pizza.webp",
    title: "Delicious Pizza",
    category: "Freshly Baked",
  },
  {
    src: "/images/menu-burger.webp",
    title: "Juicy Burger",
    category: "Our Special",
  },
  {
    src: "/images/menu-pasta.webp",
    title: "Creamy Pasta",
    category: "Italian Cuisine",
  },
  {
    src: "/images/menu-chinese.webp",
    title: "Chinese Delights",
    category: "Authentic Flavours",
  },
  {
    src: "/images/menu-desserts.webp",
    title: "Sweet Desserts",
    category: "Sweet Moments",
  },
  {
    src: "/images/menu-beverages.webp",
    title: "Refreshing Drinks",
    category: "Fresh Beverages",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px]">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#f47716]" />

            <span className="text-lg font-bold text-[#e85d12]">
              Our Gallery
            </span>

            <span className="h-[2px] w-14 bg-[#f47716]" />
          </div>

          <h2 className="font-serif text-4xl font-bold text-[#003c2a] sm:text-5xl">
            A Taste of{" "}
            <span className="italic text-[#e85d12]">
              FoodieBite
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-gray-600 sm:text-lg">
            Explore our delicious creations, freshly prepared
            dishes and memorable dining experiences.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-[#fff7ef] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              {/* Image Information */}
              <div className="px-5 py-4 text-center">

                <p className="mb-1 text-xs font-semibold uppercase tracking-[2px] text-[#f47716]">
                  {item.category}
                </p>

                <h3 className="font-serif text-xl font-bold text-[#003c2a]">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
