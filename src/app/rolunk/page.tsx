import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionLabel } from "@/components/PageHero";
import { about, company } from "@/lib/site";

export const metadata: Metadata = { title: "Rólunk" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Rólunk"
        title={company.legalName}
        description={about.intro[0]}
        image="/video/door1.jpeg"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="space-y-6 text-base leading-8 text-muted lg:col-span-7">
          {about.intro.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="relative min-h-72 overflow-hidden lg:col-span-5">
          <Image
            src="/images/hero.jpg"
            alt="Bemutatóterem"
            fill
            className="object-cover"
            sizes="40vw"
          />
        </div>
      </section>

      <section className="border-y border-line bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionLabel>Szolgáltatásaink</SectionLabel>
            <ul className="mt-8 divide-y divide-line">
              {about.services.map((s) => (
                <li key={s} className="py-4 text-[20px] font-medium tracking-tight sm:text-[22px]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Tevékenységi körünk</SectionLabel>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
              {about.activities.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
