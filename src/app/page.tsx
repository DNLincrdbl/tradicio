import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { HomeTiles } from "@/components/HomeTiles";
import { homeIntro } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="video"
        href="/video/herovideo.mp4"
        type="video/mp4"
        fetchPriority="high"
      />
      <section className="relative h-[calc(100svh-76px)] overflow-hidden bg-black text-white">
        <HeroVideo />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.5) 0%, rgba(0,0,0,.42) 40%, rgba(0,0,0,.48) 100%)",
          }}
        />
        <div className="relative flex h-full flex-col items-center">
          <div className="mt-[16vh] px-6 text-center">
            <h1 className="text-[56px] font-medium leading-none tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,.35)] sm:text-[72px] lg:text-[84px]">
              Tradíció
            </h1>
            <p className="mt-5 text-[22px] font-normal text-white/90 [text-shadow:0_2px_18px_rgba(0,0,0,.35)] sm:text-[28px] lg:text-[32px]">
              Nyílászáró szalon és beltéri ajtó stúdió
            </p>
          </div>
          <div className="mt-auto mb-20 flex w-full flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-6">
            <Link href="/termekek" className="tds-btn tds-btn-primary">
              Termékeink
            </Link>
            <Link href="/kapcsolat" className="tds-btn tds-btn-glass">
              Kapcsolat
            </Link>
          </div>
        </div>
      </section>

      <HomeTiles />

      <section className="bg-white px-6 py-24 text-center">
        <p className="text-[14px] font-medium text-muted">Rólunk</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-[32px] font-medium leading-tight tracking-tight sm:text-[40px]">
          {homeIntro.title}
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-[14px] leading-7 text-muted">
          {homeIntro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link href="/rolunk" className="tds-btn tds-btn-dark mx-auto mt-10">
          Bővebben
        </Link>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-10">
          {[
            { n: "2004", l: "óta Miskolcon" },
            { n: "Erkado", l: "beltéri ajtók" },
            { n: "Kömmerling", l: "ablakrendszerek" },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-[20px] font-medium">{s.n}</p>
              <p className="mt-1 text-[13px] text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
