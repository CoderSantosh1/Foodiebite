
import {
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  UserRound,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-[#fffdf8] px-4 py-14 sm:px-6 md:px-8 md:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* ================= CONTACT HEADER ================= */}
        <div className="relative mb-10 text-center md:mb-14">

          <div className="mb-3 flex items-center justify-center gap-3 sm:gap-5">
            <span className="h-[2px] w-10 bg-[#c9820b] sm:w-16" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#bd790d] sm:text-sm md:text-lg">
              Get In Touch
            </span>

            <span className="h-[2px] w-10 bg-[#c9820b] sm:w-16" />
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#06472f] sm:text-6xl md:text-7xl">
            Contact{" "}
            <span className="font-serif italic text-[#c9820b]">
              Us
            </span>
          </h1>

          <div className="mx-auto mt-3 h-1 w-24 -rotate-3 rounded-full bg-[#c9820b] sm:w-28" />

          <p className="mx-auto mt-5 max-w-3xl px-2 text-base leading-relaxed text-[#34495a] sm:text-lg md:mt-7 md:text-2xl">
            Have a question, feedback, or want to reserve a table?
            We’re here to help!
          </p>

        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="mb-8 overflow-hidden rounded-2xl border-2 border-[#d9dfd0] shadow-sm sm:mb-10 sm:rounded-[28px]">

          <iframe
            title="FoodMood Restaurant Location - Sector 62 Noida"
            src="https://maps.google.com/maps?q=A-45%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="430"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[280px] w-full sm:h-[350px] lg:h-[430px]"
          />

        </div>

        {/* ================= CONTACT DETAILS + BOOKING ================= */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.85fr_1.35fr] lg:gap-7">

          {/* ================= CONTACT DETAILS ================= */}
          <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-[#c8d7b9] bg-[#f8f9ed] p-6 shadow-sm sm:rounded-[30px] sm:p-8 lg:p-10">

            <h2 className="font-serif text-3xl font-bold text-[#06472f] sm:text-4xl md:text-5xl">
              Our Details
            </h2>

            <div className="mb-7 mt-4 h-1 w-24 rounded-full bg-[#c9820b]" />

            <div className="relative z-10 flex-1 space-y-6">

              {/* Location */}
              <div className="flex items-center gap-4 border-b border-[#d5ddc9] pb-5 sm:gap-5 sm:pb-6">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e4edcf] text-[#145a35] sm:h-16 sm:w-16">
                  <MapPin size={28} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06472f] sm:text-2xl">
                    Our Location
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">
                    A-45, Sector 62, Noida – 201309,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 border-b border-[#d5ddc9] pb-5 sm:gap-5 sm:pb-6">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e4edcf] text-[#145a35] sm:h-16 sm:w-16">
                  <Phone size={27} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06472f] sm:text-2xl">
                    Call Us
                  </h3>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-base text-gray-800 transition hover:text-[#c9820b] sm:text-lg"
                  >
                    +91 98765 43210
                  </a>
                </div>

              </div>

              {/* Email */}
              <div className="flex items-center gap-4 border-b border-[#d5ddc9] pb-5 sm:gap-5 sm:pb-6">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e4edcf] text-[#145a35] sm:h-16 sm:w-16">
                  <Mail size={27} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06472f] sm:text-2xl">
                    Email Us
                  </h3>

                  <a
                    href="mailto:info@foodmood.com"
                    className="mt-1 block break-all text-base text-gray-800 transition hover:text-[#c9820b] sm:text-lg"
                  >
                    info@foodmood.com
                  </a>
                </div>

              </div>

              {/* Social Media */}
              <div className="pb-8">

                <h3 className="mb-4 font-serif text-xl font-bold text-[#06472f] sm:text-2xl">
                  Follow Us
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    {
                      icon: FaFacebookF,
                      href: "#",
                      label: "Facebook",
                    },
                    {
                      icon: FaInstagram,
                      href: "#",
                      label: "Instagram",
                    },
                    {
                      icon: FaXTwitter,
                      href: "#",
                      label: "X",
                    },
                    {
                      icon: FaYoutube,
                      href: "#",
                      label: "YouTube",
                    },
                  ].map(({ icon: Icon, href, label }) => (

                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#175a39] text-[#175a39] transition-all duration-300 hover:-translate-y-1 hover:bg-[#175a39] hover:text-white sm:h-12 sm:w-12"
                    >
                      <Icon size={20} />
                    </a>

                  ))}

                </div>

              </div>

            </div>

            {/* Decorative Bottom Shape */}
            <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-[120%] rotate-[-5deg] rounded-[50%] border-t-2 border-[#a9c77a] bg-[#dce9b8]" />

          </div>

          {/* ================= BOOKING FORM ================= */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#edc28c] bg-[#fffefa] p-5 shadow-sm sm:rounded-[30px] sm:p-8 lg:p-10">

            {/* Form Heading */}
            <div className="mb-7 flex items-center gap-4 sm:mb-8 sm:gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d99516] to-[#bd7100] text-white shadow-md sm:h-20 sm:w-20">
                <CalendarDays size={32} />
              </div>

              <div className="min-w-0">
                <h2 className="font-serif text-3xl font-bold text-[#06472f] sm:text-4xl md:text-5xl">
                  Book a Table
                </h2>

                <div className="mt-2 h-1 w-20 rounded-full bg-[#c9820b] sm:mt-3 sm:w-24" />
              </div>

            </div>

            <form
              action="/api/reservations"
              method="POST"
              className="relative z-10 space-y-4 sm:space-y-5"
            >

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                {/* Name */}
                <div className="relative">
                  <UserRound
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 sm:left-5"
                    size={22}
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="h-14 w-full rounded-xl border-2 border-gray-200 bg-white pl-12 pr-3 text-sm outline-none transition focus:border-[#c9820b] sm:h-16 sm:rounded-2xl sm:pl-14 sm:text-base"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 sm:left-5"
                    size={22}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    className="h-14 w-full rounded-xl border-2 border-gray-200 bg-white pl-12 pr-3 text-sm outline-none transition focus:border-[#c9820b] sm:h-16 sm:rounded-2xl sm:pl-14 sm:text-base"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 sm:left-5"
                    size={22}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    required
                    className="h-14 w-full rounded-xl border-2 border-gray-200 bg-white pl-12 pr-3 text-sm outline-none transition focus:border-[#c9820b] sm:h-16 sm:rounded-2xl sm:pl-14 sm:text-base"
                  />
                </div>

                {/* Date */}
                <div className="relative">
                  <CalendarDays
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 sm:left-5"
                    size={22}
                  />

                  <input
                    type="date"
                    name="bookingDate"
                    required
                    className="h-14 w-full min-w-0 rounded-xl border-2 border-gray-200 bg-white pl-12 pr-2 text-sm text-gray-700 outline-none transition focus:border-[#c9820b] sm:h-16 sm:rounded-2xl sm:pl-14 sm:pr-3 sm:text-base"
                  />
                </div>

              </div>

              {/* Number of People */}
              <div className="relative">

                <Users
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 sm:left-5"
                  size={22}
                />

                <select
                  name="people"
                  required
                  defaultValue=""
                  className="h-14 w-full appearance-none rounded-xl border-2 border-gray-200 bg-white pl-12 pr-10 text-sm text-gray-700 outline-none transition focus:border-[#c9820b] sm:h-16 sm:rounded-2xl sm:pl-14 sm:text-base"
                >
                  <option value="" disabled>
                    Number of People *
                  </option>

                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}

                  <option value="10+">
                    More than 10 People
                  </option>

                </select>

              </div>

              {/* Comment */}
              <div className="relative">

                <MessageCircle
                  className="absolute left-4 top-5 text-gray-800 sm:left-5"
                  size={22}
                />

                <textarea
                  name="comment"
                  placeholder="Your Comment *"
                  required
                  rows={4}
                  className="min-h-[130px] w-full resize-y rounded-xl border-2 border-gray-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-[#c9820b] sm:min-h-[145px] sm:rounded-2xl sm:py-5 sm:pl-14 sm:text-base"
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mx-auto flex min-h-[60px] w-full max-w-[490px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#d99312] to-[#bd7100] px-5 font-serif text-xl font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[72px] sm:gap-5 sm:text-2xl"
              >
                Book a Table
                <ArrowRight size={25} />
              </button>

            </form>

            {/* Decorative Corner */}
            <div className="pointer-events-none absolute -bottom-8 -right-3 text-[100px] leading-none text-[#f2d5a9] opacity-60 sm:text-[130px]">
              ❧
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
