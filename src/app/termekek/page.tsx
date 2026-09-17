import type { Metadata } from "next";
import { PageHero, SectionLabel } from "@/components/PageHero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { catalogs, categories, products } from "@/lib/products";

export const metadata: Metadata = { title: "Termékek" };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ kat?: string }>;
}) {
  const { kat } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Termékek"
        title="Katalógus, nem csak PDF."
        description="Az eredeti gyártói katalógusokból kinyert kollekciók, műszaki adatok és modellek – ugyanazok a menüpontok, letölthető adatlapokkal."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.id}
              className="border border-line p-6"
            >
              <p className="text-[14px] font-medium text-muted">
                {c.eyebrow}
              </p>
              <h2 className="mt-2 text-[20px] font-medium tracking-tight">{c.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <SectionLabel>Letölthető katalógusok</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {catalogs.map((group) => (
            <div key={group.group}>
              <h3 className="text-[20px] font-medium tracking-tight">{group.group}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <SectionLabel>Termékek</SectionLabel>
        <h2 className="mt-3 text-[32px] font-medium tracking-tight">Összes kollekció</h2>
        <div className="mt-10">
          <ProductCatalog products={products} initialCategory={kat} />
        </div>
      </section>
    </>
  );
}
