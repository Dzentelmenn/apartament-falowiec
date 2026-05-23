"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* DESKTOP MENU */}
      <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-2xl backdrop-blur-xl md:flex">

        <Link
          href="/kontakt"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Kontakt
        </Link>

        <Link
          href="/dojazd"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Dojazd
        </Link>

        <Link
          href="/galeria"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Zdjęcia
        </Link>

        <Link
          href="/atrakcje"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Atrakcje
        </Link>

        <Link
          href="/informacje"
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Informacje
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
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Kontakt
          </Link>

          <Link
            href="/dojazd"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Dojazd
          </Link>

          <Link
            href="/galeria"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Zdjęcia
          </Link>

          <Link
            href="/atrakcje"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Atrakcje
          </Link>

          <Link
            href="/informacje"
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl bg-white/10 px-5 py-4 text-white transition hover:bg-white/20"
          >
            Informacje
          </Link>

        </div>

      )}

      {/* LANGUAGE BUTTON */}
      <div className="fixed right-6 top-6 z-50">

        <Link
          href="/en"
          className="rounded-full bg-black/40 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl transition hover:bg-black/60"
        >
          🇬🇧 EN
        </Link>

      </div>

    </>
  );
}