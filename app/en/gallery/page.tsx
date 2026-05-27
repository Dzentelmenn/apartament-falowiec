import PageHero from "@/components/PageHero";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Gallery"
        subtitle="Apartment and interior photos."
        backText="← Back"
        backHref="/en"
      />

      {/* CONTENT */}
      <section className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-5 py-10">

        <div className="w-full rounded-[40px] bg-white/10 p-10 text-center backdrop-blur-xl">

          <div className="text-7xl">
            🚧
          </div>

          <h2 className="mt-8 text-5xl font-black">
            Gallery Under Construction
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            We are currently working on a new apartment
            photo gallery. This section will be available soon 🙂
          </p>

          <div className="mt-10 inline-flex rounded-full bg-black/30 px-6 py-3 text-sm uppercase tracking-[0.3em] text-neutral-400">

            Coming Soon

          </div>

        </div>

      </section>

    </main>
  );
}