import PageHero from "@/components/PageHero";

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Information"
        subtitle="All important information about your stay in the apartment."
        backText="← Back"
        backHref="/en"
      />

      {/* CONTENT */}
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10">

        {/* LOCATION */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              📍
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Location
              </h2>

              <p className="mt-2 text-neutral-300">
                Apartment address
              </p>

            </div>

          </div>

          <p className="mt-8 text-2xl font-bold">
            ul. Jagiellońska 10M/33
          </p>

          <p className="mt-3 text-lg text-neutral-300">
            Gdańsk Przymorze
          </p>

          <a
            href="https://maps.app.goo.gl/gFyWzwhzrKZCaBy98"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Open Map
          </a>

        </div>

        {/* WIFI */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              📶
            </div>

            <div>

              <h2 className="text-3xl font-black">
                WiFi
              </h2>

              <p className="mt-1 text-neutral-300">
                Internet access in the apartment
              </p>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="rounded-2xl bg-black/30 p-5">

              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Network Name
              </p>

              <p className="mt-2 text-2xl font-bold">
                NETIASPOT-2.4GHz-Suxz
              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-5">

              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Password
              </p>

              <p className="mt-2 text-2xl font-bold">
                U3c7yxqt
              </p>

            </div>

          </div>

        </div>

        {/* ACCESS CODES */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              🔐
            </div>

            <div>

              <h2 className="text-3xl font-black">
                Access Codes
              </h2>

              <p className="mt-1 text-neutral-300">
                Building and gallery entrance
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-black/30 p-6">

              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Staircase
              </p>

              <p className="mt-4 text-3xl font-black">
                33 → key → 6019
              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Gallery - 2nd floor
              </p>

              <p className="mt-4 text-3xl font-black">
                33 → key → 0390
              </p>

            </div>

          </div>

        </div>

        {/* CHECK-IN */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              🔑
            </div>

            <div>

              <h2 className="text-3xl font-black">
                Check-in
              </h2>

              <p className="mt-1 text-neutral-300">
                Arrival information
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-200">
              Check-in is available from
              <span className="font-bold text-white">
                {" "}3:00 PM
              </span>.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-200">
              The keys are located in the lockbox next to the entrance door.
            </p>

          </div>

        </div>

        {/* CHECKOUT */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              🚪
            </div>

            <div>

              <h2 className="text-3xl font-black">
                Check-out
              </h2>

              <p className="mt-1 text-neutral-300">
                Departure information
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-200">
              Please leave the apartment by
              <span className="font-bold text-white">
                {" "}11:00 AM
              </span>.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-200">
              Please return the keys to the lockbox.
            </p>

          </div>

        </div>

        {/* PARKING */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              🚗
            </div>

            <div>

              <h2 className="text-3xl font-black">
                Parking
              </h2>

              <p className="mt-1 text-neutral-300">
                Guest parking information
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-black/30 p-6">

            <p className="text-lg leading-relaxed text-neutral-200">
              Parking spaces are available in front of the building.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-200">
              Please leave the parking permit visible behind the windshield.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}