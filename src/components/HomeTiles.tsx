import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    src: "/video/window2.jpeg",
    alt: "Nagy üvegfelületű nyílászárók",
    eyebrow: "Nyílászárók",
    title: "Ablakok",
    copy: "Prémium és Kömmerling ablakrendszerek.",
    primary: { href: "/termekek", label: "Termékek" },
    secondary: { href: "/kapcsolat", label: "Ajánlatkérés" },
  },
  {
    src: "/video/door1.jpeg",
    alt: "Bejárati és beltéri ajtók",
    eyebrow: "Ajtók",
    title: "Erkado",
    copy: "Beltéri kollekciók és bejárati ajtók.",
    primary: { href: "/termekek", label: "Katalógus" },
    secondary: { href: "/akciok", label: "Akciók" },
  },
  {
    src: "/video/window1.jpeg",
    alt: "Ablakprofil metszet",
    eyebrow: "Műszaki",
    title: "Ablakrendszerek",
    copy: "76 MD, 88 MD, ALU és HST profilok.",
    primary: { href: "/termekek", label: "Rendszerek" },
    secondary: { href: "/kapcsolat", label: "Ajánlatkérés" },
    wide: true,
  },
];

export function HomeTiles() {
  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2">
        {tiles.map((tile) => (
          <article
            key={tile.title}
            className={`relative min-h-[420px] overflow-hidden rounded-[20px] bg-black lg:min-h-0 ${
              tile.wide
                ? "lg:col-span-2 lg:aspect-[2.35/1]"
                : "lg:aspect-[16/10]"
            }`}
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              className="object-cover object-center"
              sizes={tile.wide ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.62) 0%, rgba(0,0,0,.16) 45%, rgba(0,0,0,.22) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-7 sm:px-10 sm:py-9">
              <p className="text-[15px] font-medium text-white/90">
                {tile.eyebrow}
              </p>
              <div>
                <h2 className="text-[32px] font-medium leading-none tracking-tight text-white sm:text-[40px]">
                  {tile.title}
                </h2>
                <p className="mt-2 max-w-lg text-[16px] text-white/90 sm:text-[18px]">
                  {tile.copy}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={tile.primary.href}
                    className="tds-btn tds-btn-primary tds-btn-tile"
                  >
                    {tile.primary.label}
                  </Link>
                  <Link
                    href={tile.secondary.href}
                    className="tds-btn tds-btn-light tds-btn-tile"
                  >
                    {tile.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
