"use client";

import NavbarEN from "@/components/NavbarEN";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WeatherCardEN from "@/components/WeatherCardEN";

export default function HomePageEN() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg"
        alt="Apartment"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* NAVBAR */}
      <NavbarEN />

      {/* HERO */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">

        <div className="rounded-3xl bg-black/30 px-8 py-6 backdrop-blur-md">

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            Apartment in the iconic Falowiec building
          </h1>

          <p className="mt-4 text-base text-neutral-200 md:text-lg">
            Gdańsk • Przymorze • Falowiec
          </p>

        </div>

      </div>

      {/* WEATHER */}
      <WeatherCardEN />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}