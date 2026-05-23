"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavbarEN() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* DESKTOP MENU */}
      <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-2xl backdrop-blur-xl md:flex">

        <Link
          href="/en/contact"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Contact
        </Link>

        <Link
          href="/en/transport"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Transport
        </Link>

        <Link
          href="/en/gallery"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Gallery
        </Link>

        <Link
          href="/en/attractions"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Attractions
        </Link>

        <Link
          href="/en/information"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Information
        </Link>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed left-6 top-6 z-50 rounded-full bg-black/40 px-4 py-3 text-white shadow-2xl backdrop-blur-xl transition hover:bg-black/60 md:hidden"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="fixed left-6 top-24 z-50 flex w-64 flex-col gap-3 rounded-3xl border border-white/10 bg-black/70 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">

          <Link
            href="/en/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Contact
          </Link>

          <Link
            href="/en/transport"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Transport
          </Link>

          <Link
            href="/en/gallery"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Gallery
          </Link>

          <Link
            href="/en/attractions"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Attractions
          </Link>

          <Link
            href="/en/information"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Information
          </Link>

        </div>

      )}

      {/* LANGUAGE BUTTON */}
      <div className="fixed right-6 top-6 z-50">

        <Link
          href="/"
          className="rounded-full bg-black/40 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl transition hover:bg-black/60"
        >
          🇵🇱 PL
        </Link>

      </div>

    </>
  );
}