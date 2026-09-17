import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company, emails } from "@/lib/site";

export const metadata: Metadata = { title: "Adatvédelmi tájékoztató" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Jogi"
        title="Adatvédelmi tájékoztató"
        description="Az oldal cookie-kat használ. A böngészés folytatásával jóváhagyja, hogy cookie-kat használjunk."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-sm leading-7 text-muted sm:px-8">
        <p>
          Az adatkezelő: {company.legalName}, {company.addressLine},{" "}
          {company.addressExtra}.
        </p>
        <p>
          Kapcsolat:{" "}
          <a className="underline" href={`mailto:${emails[0]}`}>
            {emails[0]}
          </a>
        </p>
        <p>
          A weboldal működéséhez szükséges cookie-kat használ. Ezek a
          látogatottsághoz és a felhasználói beállítások megjegyzéséhez
          kapcsolódhatnak. A cookie-sávon az „Értettem” gombbal adhatja
          hozzájárulását.
        </p>
        <p>
          A kapcsolati űrlapon megadott név, e-mail, telefonszám és üzenet
          kizárólag az ajánlatkérés megválaszolására szolgál. Az adatokat
          harmadik félnek marketing célból nem adjuk tovább.
        </p>
        <p>
          Érintetti jogait (tájékoztatás, helyesbítés, törlés, tiltakozás) a
          fenti e-mail címen érvényesítheti.
        </p>
      </section>
    </>
  );
}
