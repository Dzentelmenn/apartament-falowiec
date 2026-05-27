"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const galleryImages = [
  {
    title: "Living Room",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba",
  },
  {
    title: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },
  {
    title: "Balcony",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "View",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export default function GalleryPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Gallery"
        subtitle="Photos of the apartment and interiors."
        backText="← Back"
        backHref="/en"
      />

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {galleryImages.map((item, index) => (

            <button
              key={index}
              onClick={() => setSelectedImage(item.image)}
              className="group relative overflow-hidden rounded-[32px] text-left"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6">

                <div className="rounded-2xl bg-black/30 p-5 backdrop-blur-md">

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                </div>

              </div>

            </button>

          ))}

        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-3xl object-contain"
          />

        </div>

      )}

    </main>
  );
}