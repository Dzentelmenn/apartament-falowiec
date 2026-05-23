import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <PageHero
        title="Contact"
        subtitle="All important contact information."
        backText="← Back"
        backHref="/en"
      />

      {/* CONTENT */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10">

        {/* CONTACT */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              📞
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Contact
              </h2>

              <p className="mt-2 text-neutral-300">
                Apartment owners
              </p>

            </div>

          </div>

          {/* OWNER 1 */}
          <div className="mt-8 rounded-3xl bg-black/30 p-6">

            <p className="text-sm uppercase tracking-widest text-neutral-400">
              Owner 1
            </p>

            <p className="mt-3 text-3xl font-bold">
              793 944 528
            </p>

            <a
              href="tel:+48793944528"
              className="mt-6 inline-block rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Call
            </a>

          </div>

          {/* OWNER 2 */}
          <div className="mt-5 rounded-3xl bg-black/30 p-6">

            <p className="text-sm uppercase tracking-widest text-neutral-400">
              Owner 2
            </p>

            <p className="mt-3 text-3xl font-bold">
              691 695 050
            </p>

            <a
              href="tel:+48691695050"
              className="mt-6 inline-block rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Call
            </a>

          </div>

          <p className="mt-5 text-neutral-300">
            If you have any questions or issues,
            please contact us by phone or dm in SMS.
          </p>

        </div>

        {/* EMAIL */}
        <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              ✉️
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Email
              </h2>

              <p className="mt-2 text-neutral-300">
                Email contact
              </p>

            </div>

          </div>

          <p className="mt-8 text-2xl font-bold">
            kontakt@apartament.pl
          </p>

          <a
            href="mailto:kontakt@apartament.pl"
            className="mt-8 inline-block rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Send Email
          </a>

        </div>

      </section>

    </main>
  );
}