import PageHero from "@/components/PageHero";
import FadeInSection from "@/components/FadeInSection";

export default function AttractionsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Attractions"
        subtitle="The most interesting places in Gdańsk, Sopot and nearby areas."
      backText="← Back"
  backHref="/en"
/>

      {/* CONTENT */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10">

        {/* BEACH */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🌊 Beach
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                The beach is around 15-20 minutes away
                through Reagan Park.
                It is one of the best places to relax
                and enjoy the sunset.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* REAGAN PARK */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Park"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🌳 Reagan Park
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                A huge park perfect for walking,
                cycling and outdoor activities.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* SOPOT */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156"
              alt="Sopot"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🍸 Sopot
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Famous pier, Monte Cassino street,
                restaurants, beach bars and nightlife.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* GDAŃSK */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="Gdańsk"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🏛️ Gdańsk
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Old Town, Long Market,
                European Solidarity Centre
                and unique architecture.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* RESTAURANTS */}
        <FadeInSection>

          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

            <h2 className="text-4xl font-black">
              🍽️ Recommended Places
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Mielony
                </h3>

                <p className="mt-4 text-neutral-300">
                  Traditional Polish cuisine and breakfasts.
                </p>

              </div>

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Manekin
                </h3>

                <p className="mt-4 text-neutral-300">
                  Famous pancakes in the center of Gdańsk.
                </p>

              </div>

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Winne Grono
                </h3>

                <p className="mt-4 text-neutral-300">
                  Atmospheric place for an evening out.
                </p>

              </div>

            </div>

          </div>

        </FadeInSection>

      </section>

    </main>
  );
}