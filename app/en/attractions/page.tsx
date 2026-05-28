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
              src="https://images.pexels.com/photos/11249081/pexels-photo-11249081.jpeg"
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
              src="https://images.pexels.com/photos/31032281/pexels-photo-31032281.jpeg"
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

                {/* ZOO */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"
              alt="Gdańsk Zoo"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🦒 Gdańsk Zoo
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                One of the largest zoos in Poland,
                located in the green Oliwa district.
                A perfect place for family walks
                and relaxing in nature.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-300">
                The zoo is home to giraffes,
                lions, elephants, penguins
                and many other animals.
              </p>

            </div>

          </div>

        </FadeInSection>

        {/* OLIWA PARK */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.pexels.com/photos/37534720/pexels-photo-37534720.jpeg"
              alt="Oliwa Park"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🌿 Oliwa Park
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                One of the most beautiful parks
                in the entire Tricity area.
                Perfect for peaceful walks,
                coffee and relaxing away from the city.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-300">
                Nearby you can also visit
                the Oliwa Cathedral
                and famous organ concerts.
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
              src="https://images.pexels.com/photos/14018882/pexels-photo-14018882.jpeg"
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

        {/* GREEN MARKET */}
        <FadeInSection>

          <div className="overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl">

            <img
              src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg"
              alt="Green Market"
              className="h-72 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="p-8">

              <h2 className="text-4xl font-black">
                🥬 Green Market
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                A classic old-school local market in Przymorze,
                where you can find fresh vegetables, fruits,
                local products and the atmosphere
                of old Gdańsk.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-300">
                The biggest activity starts on Saturdays
                around 6:00 AM.
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

            {/* LOCAL */}
            <div className="mt-10">

              <h3 className="text-3xl font-bold">
                📍 Near the apartment
              </h3>

              <p className="mt-3 max-w-3xl text-neutral-300">
                Recommended places located in Przymorze
                and near the apartment. Perfect for lunch,
                breakfast or an evening out.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Pizzeria U Skrzypka BiS
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    A Przymorze classic. Not fancy,
                    but a true local comfort food spot
                    loved by residents for years.
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
                    Modern Neapolitan pizza
                    with a stylish atmosphere.
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
                    Great Asian comfort food near the apartment.
                    Good pho, fried noodles
                    and Asian cuisine.
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
                    A Tricity classic. Huge portions,
                    popular among students and locals,
                    with excellent value-for-money.
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
                    Burgers, steaks, whisky
                    and an American-style atmosphere.
                    Popular for evenings out.
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
                    The most classic cheap local lunch spot.
                    Homemade food, large portions
                    and old-school Przymorze atmosphere.
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
                🏛️ Recommended places in Gdańsk
              </h3>

              <p className="mt-3 max-w-3xl text-neutral-300">
                Popular restaurants and places worth visiting
                during your stay in the center of Gdańsk
                and around the Old Town.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Pierogarnia Mandu
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    One of the most famous dumpling places
                    in Gdańsk.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    City Center / Oliwa
                  </p>

                </div>

                <div className="rounded-3xl bg-black/30 p-6 transition duration-300 hover:scale-[1.03] hover:bg-black/40">

                  <h4 className="text-2xl font-bold">
                    Manekin Oliwa
                  </h4>

                  <p className="mt-4 text-neutral-300">
                    Famous pancakes and one of the most popular
                    places among locals and tourists.
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
                    One of the most popular restaurants
                    in Gdańsk, modern cuisine
                    in atmospheric interiors.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400">
                    Old Town / Granary Island
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