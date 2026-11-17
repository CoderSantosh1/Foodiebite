"use client";
import Hero from "@/components/Hero";
import AboutUs from "@/components/Aboutus";
import OurMenu from "@/components/Ourmenu";
import FAQ from "@/components/Faq";
import ContactUs from "@/components/Contactus";
import Gallery from "@/components/Gallery";
import PopularDishes from "@/components/PopularDishes";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
export default function Home() {
  return (
  <>
    <Hero />
    <AboutUs />
    <OurMenu />
    <PopularDishes />
    <Stats />
    <WhyUs />
    <Team />
    <Gallery />
    <Testimonials />
    <FAQ />
    <ContactUs />
  </>
  );
}
