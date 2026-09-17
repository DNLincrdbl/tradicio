import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, SectionLabel } from "@/components/PageHero";
import { company, emails, phones } from "@/lib/site";

export const metadata: Metadata = { title: "Kapcsolat" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title="Írjon nekünk."
        description={`${company.addressLine} / ${company.addressExtra}`}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Telefon</SectionLabel>
          <ul className="mt-5 space-y-2 text-[22px] font-medium tracking-tight">
            {phones.map((p) => (
              <li key={p.value}>
                <a href={p.href} className="hover:text-blue">
                  {p.label} {p.value}
                </a>
              </li>
            ))}
          </ul>

          <SectionLabel>Email</SectionLabel>
          <ul className="mt-5 space-y-2 text-sm">
            {emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:underline">
                  {e}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <SectionLabel>Bemutatótermünk</SectionLabel>
            <p className="mt-4 text-base leading-8">
              {company.addressLine}
              <br />
              {company.addressExtra}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Nyitvatartás:
              <br />
              {company.hoursWeekday}
              <br />
              {company.hoursSaturday}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionLabel>Írjon nekünk</SectionLabel>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden border border-line">
          <iframe
            title="Térkép – Fonoda utca 2., Miskolc"
            src={company.mapEmbed}
            className="h-[420px] w-full grayscale"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
