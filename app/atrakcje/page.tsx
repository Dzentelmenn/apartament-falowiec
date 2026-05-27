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
              src="https://images.pexels.com/photos/11249081/pexels-photo-11249081.jpeg"
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
              src="https://images.pexels.com/photos/31032281/pexels-photo-31032281.jpeg"
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
              src="https://images.pexels.com/photos/37492025/pexels-photo-37492025.jpeg"
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
              src="https://images.pexels.com/photos/14018882/pexels-photo-14018882.jpeg"
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

        {/* ZIELONY RYNEK */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg"
              alt="Zielony Rynek"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🥬 Zielony Rynek
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Klasyczne oldschoolowe targowisko na Przymorzu,
                gdzie można znaleźć świeże warzywa, owoce,
                lokalne produkty oraz klimat dawnego Gdańska.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-300">
                Największy ruch odbywa się w soboty
                od około 6:00 rano.
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

            {/* LOCAL */}
            <div className="mt-10">

              <h3 className="text-3xl font-bold">
                📍 W pobliżu apartamentu
              </h3>

              <p className="mt-3 max-w-3xl text-neutral-300">
                Sprawdzone miejsca znajdujące się na Przymorzu
                oraz w okolicy apartamentu. Idealne na szybki lunch,
                śniadanie lub wieczorne wyjście.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Pizzeria U Skrzypka BiS
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Klasyk Przymorza. Nie fancy,
                    ale bardzo „gdański comfort food”.
                    Wielu mieszkańców zamawia stąd od lat.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Przymorze
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    NOI Pizza i Wino
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Nowoczesna pizza neapolitańska
                    oraz klimatyczne wnętrze.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Obrońców Wybrzeża
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Restauracja A-DONG Przymorze
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Bardzo sensowny asian comfort food blisko apartamentu.
                    Dobre pho, smażony makaron oraz kuchnia azjatycka.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Przymorze
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Asia Hoanmy
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Klasyk Trójmiasta. Wielkie porcje,
                    dużo studentów i lokalsów oraz bardzo dobry
                    value-for-money. Popularne miejsce
                    z kuchnią azjatycką.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Przymorze
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Whiskey On The Rocks
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Burgery, steki, whisky
                    oraz amerykański klimat.
                    Popularne miejsce na wieczorne wyjście.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Przymorze
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Bar Mleczny Jaros
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Najbardziej klasyczny tani obiad osiedlowy.
                    Domowa kuchnia, duże porcje
                    i klimat starego Przymorza.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Przymorze
                  </p>

                </div>

              </div>

            </div>

            {/* GDAŃSK */}
            <div className="mt-16">

              <h3 className="text-3xl font-bold">
                🏛️ Polecane miejsca w Gdańsku
              </h3>

              <p className="mt-3 max-w-3xl text-neutral-300">
                Popularne restauracje oraz miejsca,
                które warto odwiedzić podczas pobytu
                w centrum Gdańska oraz okolicach Starego Miasta.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Pierogarnia Mandu
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Jedne z najbardziej znanych pierogów
                    w całym Gdańsku.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Śródmieście / Oliwa
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Manekin Oliwa
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Kultowe naleśniki oraz bardzo popularne miejsce
                    wśród mieszkańców i turystów.
                  </p>

<p className="mt-4 text-sm text-neutral-400">
  Oliwa
</p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Chleb i Wino
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Jedna z najbardziej popularnych restauracji
                    w Gdańsku, Nowoczesna kuchnia w klimatycznych wnętrzach.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Stare Miasto / Wyspa Spichrzów
                  </p>

                </div>

              </div>

            </div>

          </div>

        </FadeInSection>

      </section>

    </main>
  );
}