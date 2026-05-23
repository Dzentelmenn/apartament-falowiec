import PageHero from "@/components/PageHero";

export default function TransportPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
  title="Transport"
  subtitle="Information about public transport and getting around the Tricity area."
  backText="← Back"
  backHref="/en"
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
                Trams
              </h2>

              <p className="mt-2 text-neutral-300">
                Tram lines nearby: 2, 4, 8, 12
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                Stop
              </h3>

              <p className="mt-4 text-lg text-neutral-300">
                Czerwony Dwór
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                Destinations
              </h3>

              <p className="mt-4 text-neutral-300">
                Gdańsk city center, Wrzeszcz,
                Oliwa, Jelitkowo and beach areas.
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
                Buses
              </h2>

              <p className="mt-2 text-neutral-300">
                Bus lines: 148, 199, 227
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                148
              </h3>

              <p className="mt-4 text-neutral-300">
                Brzeźno and seaside areas.
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                199
              </h3>

              <p className="mt-4 text-neutral-300">
                Oliwa and Gdańsk city center.
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 p-6">

              <h3 className="text-2xl font-bold">
                227
              </h3>

              <p className="mt-4 text-neutral-300">
                Wrzeszcz and Jelitkowo.
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
                SKM Train
              </h2>

              <p className="mt-2 text-neutral-300">
                Fast urban railway
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-300">
              The nearest stations are:
              Przymorze-Uniwersytet and Gdańsk Oliwa.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              SKM provides quick access
              to Sopot, Gdynia and central Gdańsk.
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
                FALA System
              </h2>

              <p className="mt-2 text-neutral-300">
                Public transport payments
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-300">
              In buses and trams you can
              pay directly with your card.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              The FALA system automatically calculates fares.
            </p>

          </div>

        </div>

        {/* APPS */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <h2 className="text-4xl font-black">
            Useful Apps
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
                Public transport route planner.
              </p>

              <a
                href="https://jakdojade.pl"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Open Website
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
                  src="/uber-logo.png"
                  alt="Uber"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

              </a>

              <h3 className="mt-5 text-2xl font-bold">
                Uber / Bolt
              </h3>

              <p className="mt-4 text-neutral-300">
                Fast rides around the Tricity area.
              </p>

              <a
                href="https://uber.com"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Open Website
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
                City bikes available throughout the city.
              </p>

              <a
                href="https://rowermevo.pl"
                target="_blank"
                className="mt-8 inline-block rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Open Website
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}