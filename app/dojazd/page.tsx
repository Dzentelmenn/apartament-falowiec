import PageHero from "@/components/PageHero";

export default function DojazdPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Dojazd"
        subtitle="Informacje dotyczące komunikacji miejskiej oraz transportu po Trójmieście."
      />

      {/* CONTENT */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10">

        {/* TRAMS */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              🚋
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Tramwaje
              </h2>

              <p className="mt-2 text-neutral-300">
                Linie pod blokiem: 2, 4, 8, 12
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                Przystanek
              </h3>

              <p className="mt-4 text-lg text-neutral-300">
                Czerwony Dwór
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                Gdzie dojedziesz?
              </h3>

              <p className="mt-4 text-neutral-300">
                Centrum Gdańska, Wrzeszcz,
                Oliwa, Jelitkowo i okolice plaży.
              </p>

            </div>

          </div>

        </div>

        {/* BUSES */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              🚌
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Autobusy
              </h2>

              <p className="mt-2 text-neutral-300">
                Linie: 148, 199, 227
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                148
              </h3>

              <p className="mt-4 text-neutral-300">
                Brzeźno oraz okolice morza.
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                199
              </h3>

              <p className="mt-4 text-neutral-300">
                Oliwa oraz centrum Gdańska.
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                227
              </h3>

              <p className="mt-4 text-neutral-300">
                Wrzeszcz oraz Jelitkowo.
              </p>

            </div>

          </div>

        </div>

        {/* SKM */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              🚆
            </div>

            <div>

              <h2 className="text-4xl font-black">
                SKM
              </h2>

              <p className="mt-2 text-neutral-300">
                Szybka kolej miejska
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-300">
              Najbliższe stacje:
              Przymorze-Uniwersytet oraz Gdańsk Oliwa.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              Dzięki SKM szybko dostaniesz się
              do Sopotu, Gdyni oraz centrum Gdańska.
            </p>

          </div>

        </div>

        {/* FALA */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              💳
            </div>

            <div>

              <h2 className="text-4xl font-black">
                System FALA
              </h2>

              <p className="mt-2 text-neutral-300">
                Płatności za komunikację miejską
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <img
            src="https://www.transport-publiczny.pl/img/20230817112731FalomatyiczytnikiFALAnakoleiInnoBaltica.jpg"
            alt="System FALA"
            className="mt-8 w-full rounded-3xl object-contain bg-black/20 p-2"
          />

          <div className="mt-8 rounded-3xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-300">
              W autobusach, tramwajach oraz SKM możesz
              płacić kartą bezpośrednio w pojeździe
              dzięki systemowi FALA.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              System automatycznie nalicza najkorzystniejszą
              opłatę za przejazdy komunikacją miejską.
            </p>

          </div>

          {/* ZTM */}
          <div className="mt-6 rounded-3xl bg-black/30 p-6">

            <h3 className="text-2xl font-bold">
              Aktualne rozkłady jazdy
            </h3>

            <p className="mt-4 text-neutral-300">
              Aktualne rozkłady tramwajów, autobusów
              oraz komunikacji miejskiej znajdziesz
              na oficjalnej stronie ZTM Gdańsk.
            </p>

            <a
              href="https://ztm.gda.pl"
              target="_blank"
              className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Otwórz ZTM Gdańsk
            </a>

          </div>

        </div>

        {/* APPS */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <h2 className="text-4xl font-black">
            Przydatne aplikacje
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* JAKDOJADE */}
            <div className="rounded-3xl bg-black/30 p-6 transition hover:scale-[1.02]">

              <div className="text-5xl">
                🚊
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Jakdojade
              </h3>

              <p className="mt-4 text-neutral-300">
                Planowanie tras komunikacją miejską.
              </p>

              <a
                href="https://jakdojade.pl"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Otwórz stronę
              </a>

            </div>

            {/* UBER */}
            <div className="rounded-3xl bg-black/30 p-6 transition hover:scale-[1.02]">

              <a
                href="https://uber.com"
                target="_blank"
                className="inline-block transition hover:scale-105"
              >

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s"
                  alt="Uber"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

              </a>

              <h3 className="mt-5 text-2xl font-bold">
                Uber / Bolt
              </h3>

              <p className="mt-4 text-neutral-300">
                Szybkie przejazdy po Trójmieście.
              </p>

              <a
                href="https://uber.com"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Otwórz stronę
              </a>

            </div>

            {/* MEVO */}
            <div className="rounded-3xl bg-black/30 p-6 transition hover:scale-[1.02]">

              <div className="text-5xl">
                🚴
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Mevo
              </h3>

              <p className="mt-4 text-neutral-300">
                Rowery miejskie dostępne w całym mieście.
              </p>

              <a
                href="https://rowermevo.pl"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Otwórz stronę
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}