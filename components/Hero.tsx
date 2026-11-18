
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mt-[-10px] min-h-[580px] overflow-hidden bg-[#001b12] text-white lg:min-h-[610px]"
    >

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 98%, #8b9d8f 98%), linear-gradient(0deg, transparent 98%, #8b9d8f 98%)",
          backgroundSize: "275px 100%",
        }}
      />

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute right-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#ff9f00]/10 blur-[120px]"
      />

      {/* Main Container */}
      <div className="relative mx-auto grid min-h-[580px] max-w-[1440px] items-center gap-8 px-5 py-12 sm:px-8 lg:min-h-[610px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:px-11 lg:py-10">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start"
        >

          {/* Heading */}
          <div className="relative max-w-full">

            <motion.h1
              variants={itemVariants}
              className="font-serif text-[clamp(42px,5.8vw,94px)] font-bold leading-[1.08] tracking-tight"
            >
              <span className="block whitespace-nowrap text-white">
                {siteData.hero.title}
              </span>

              <motion.span
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="mt-1 block whitespace-nowrap font-serif italic text-[#ff9f00]"
              >
                {siteData.hero.highlight}
              </motion.span>
            </motion.h1>

            {/* Decorative Orange Accent */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-8 top-0 flex rotate-[30deg] items-center gap-1"
            >
              <svg
                viewBox="0 0 64 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute -right-7 -top-8 h-[52px] w-[64px] sm:-right-9 sm:-top-10 sm:h-[60px] sm:w-[72px]"
              >
                <path
                  d="M15 43C8 36 7 23 10 13C12 6 17 3 21 8C27 16 27 33 20 42C18 44 16 44 15 43Z"
                  fill="#FF9F00"
                />

                <path
                  d="M35 42C34 31 39 16 47 8C52 3 58 5 58 12C58 23 49 37 39 43C37 44 36 44 35 42Z"
                  fill="#FF9F00"
                />
              </svg>
            </motion.div>

          </div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-6"
          >
            <span className="hidden h-[3px] w-[115px] shrink-0 bg-[#ffb900] sm:block" />

            <p className="max-w-[540px] text-base leading-7 text-gray-100 sm:text-lg sm:leading-8">
              {siteData.hero.description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              href={siteData.hero.buttonHref}
              className="group mt-8 inline-flex items-center gap-5 rounded-md bg-[#ffbf27] px-7 py-4 text-base font-bold text-[#101b0d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd15c] hover:shadow-[0_12px_30px_rgba(255,191,39,0.25)] sm:ml-[140px] sm:mt-9 sm:px-8 sm:text-lg"
            >
              {siteData.hero.button}

              <ArrowRight
                size={23}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>

        </motion.div>

        {/* Right Food Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:-ml-4 lg:max-w-none"
        >

          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-[15%] rounded-full bg-[#ff9f00]/20 blur-[90px]"
          />

          {/* Food Image */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-square w-full max-w-[540px]"
          >
            <Image
              src={siteData.hero.image}
              alt={siteData.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-contain mix-blend-lighten drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
