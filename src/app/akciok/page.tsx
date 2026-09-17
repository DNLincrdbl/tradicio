import type { Metadata } from "next";
import { PageHero, SectionLabel } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCatalog";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Akciók" };

export default function SalesPage() {
  const top9 = products.filter((p) => p.promo && p.category === "erkado");
  const other = products.filter((p) => p.promo && p.category !== "erkado");

  return (
    <>
      <PageHero
        eyebrow="Akciók"
        title="Erkado TOP 9 termék"
        description="A 2026-os Erkado katalógus kiemelt kollekciói – a gyártói adatlapokból kinyert modellekkel és műszaki részletekkel."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {top9.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      {other.length ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <SectionLabel>Nagykereskedelem</SectionLabel>
            <h2 className="mt-3 text-[32px] font-medium tracking-tight">További akciók</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {other.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
