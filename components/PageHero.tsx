import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  backText?: string;
  backHref?: string;
};

export default function PageHero({
  title,
  subtitle,
  backText = "← Powrót",
  backHref = "/",
}: PageHeroProps) {
  return (

    <section className="relative h-[45vh] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg"
        alt={title}
        className="h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* BACK BUTTON */}
      <Link
        href={backHref}
        className="absolute left-6 top-6 z-20 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
      >
        {backText}
      </Link>

      {/* CONTENT */}
      <div className="absolute bottom-10 left-10 z-10 max-w-2xl">

        <div className="rounded-[32px] bg-black/30 p-8 backdrop-blur-xl">

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-neutral-200 md:text-lg">
            {subtitle}
          </p>

        </div>

      </div>

    </section>

  );
}