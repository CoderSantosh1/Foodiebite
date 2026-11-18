
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {  Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import  CategoryData  from "../data/category.json";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  
  //Json data for navigation links
  const navLinks = CategoryData.Navigation;



  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 130;
      let currentHref = "";
      navLinks.forEach((item) => {
        const section = document.getElementById(item.href.slice(1));
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY;
        const bottom = top + section.offsetHeight;
        if (marker >= top && marker < bottom) currentHref = item.href;
      });

      setActiveSection(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-y border-[#294b3c] bg-[#001b12]/95 text-white backdrop-blur">

      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-11">

        {/* Logo */}
            <Link
            href="/"
            className="relative flex shrink-0 items-center"
            >
            <Image
                src={CategoryData.common.site.logo}
                alt="FoodieBite Logo"
                width={190}
                height={75}
                priority
                className="h-auto w-[150px] object-contain sm:w-[180px]"
            />
            </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 xl:flex 2xl:gap-10">

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
              onClick={() => setActiveSection(item.href)}
              className={`relative whitespace-nowrap py-3 text-[16px] font-semibold transition-colors duration-300 hover:text-[#ffb900] ${
                activeSection === item.href
                  ? "text-[#ffb900] after:absolute after:bottom-[-7px] after:left-0 after:h-[3px] after:w-full after:bg-[#ffb900]"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden shrink-0 items-center gap-2.5 rounded-full bg-[#ffbf27] px-5 py-3 text-sm font-bold text-[#101b0d] shadow-sm transition-all duration-300 hover:bg-[#ffd15c] xl:inline-flex 2xl:px-6"
        >
          <Phone size={19} strokeWidth={2} />
          {CategoryData.common.site.contactButtonLabel}
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-md border border-[#ffb900]/40 text-[#ffb900] transition hover:bg-[#ffb900]/10 xl:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#294b3c] bg-[#001b12] transition-all duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-3 sm:px-8">

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(item.href);
              }}
              aria-current={activeSection === item.href ? "location" : undefined}
              className={`border-b border-white/10 py-3.5 text-sm font-semibold transition hover:text-[#ffb900] ${
                activeSection === item.href ? "text-[#ffb900]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#ffbf27] px-5 py-3.5 text-sm font-bold text-[#101b0d] transition hover:bg-[#ffd15c]"
          >
            <Phone size={18} />
            {CategoryData.common.site.contactButtonLabel}
          </Link>

        </nav>
      </div>

    </header>
  );
}
