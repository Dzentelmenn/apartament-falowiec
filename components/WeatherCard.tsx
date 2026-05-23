export default function WeatherCard() {
  return (

    <section className="relative z-10 mx-auto max-w-5xl px-5 pb-32">

      <div className="mt-[-120px] overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Pogoda w Gdańsku
            </p>

            <h2 className="mt-3 text-5xl font-black">
              22°C
            </h2>

            <p className="mt-3 text-lg text-neutral-300">
              Słonecznie i ciepło
            </p>

          </div>

          {/* CENTER */}
          <div className="flex gap-6">

            <div className="rounded-3xl bg-black/30 px-6 py-5">

              <p className="text-sm text-neutral-400">
                Wiatr
              </p>

              <p className="mt-2 text-2xl font-bold">
                12 km/h
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 px-6 py-5">

              <p className="text-sm text-neutral-400">
                Wilgotność
              </p>

              <p className="mt-2 text-2xl font-bold">
                61%
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="text-7xl">
            ☀️
          </div>

        </div>

      </div>

    </section>

  );
}