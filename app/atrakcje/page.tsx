import PageHero from "@/components/PageHero";
import FadeInSection from "@/components/FadeInSection";

export default function AtrakcjePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Atrakcje"
        subtitle="Najciekawsze miejsca w Gdańsku, Sopocie i okolicy."
      />

      {/* CONTENT */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10">

        {/* BEACH */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Plaża"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🌊 Plaża
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Spacer na plażę zajmuje około 15-20 minut
                przez Park Reagana.
                To jedno z najlepszych miejsc na odpoczynek
                i zachód słońca.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* PARK REAGANA */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Park"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🌳 Park Reagana
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Ogromny park idealny na spacery,
                rowery oraz aktywny wypoczynek.
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
                Molo, Monte Cassino, restauracje,
                beach bary oraz nocne życie.
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
                Stare Miasto, Długi Targ,
                Europejskie Centrum Solidarności
                oraz wyjątkowa architektura.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* RESTAURANTS */}
        <FadeInSection>

          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

            <h2 className="text-4xl font-black">
              🍽️ Polecane miejsca
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Mielony
                </h3>

                <p className="mt-4 text-neutral-300">
                  Polska kuchnia i śniadania.
                </p>

              </div>

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Manekin
                </h3>

                <p className="mt-4 text-neutral-300">
                  Kultowe naleśniki w centrum Gdańska.
                </p>

              </div>

              <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                <h3 className="text-2xl font-bold">
                  Winne Grono
                </h3>

                <p className="mt-4 text-neutral-300">
                  Klimatyczne miejsce na wieczór.
                </p>

              </div>

            </div>

          </div>

        </FadeInSection>

      </section>

    </main>
  );
}