import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Termék" };
  return {
    title: product.name,
    description: product.excerpt,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <article>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <div className="relative min-h-[520px] overflow-hidden bg-[#eee] lg:col-span-7">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        <div className="lg:col-span-5 lg:pt-6">
          <p className="text-[14px] font-medium text-muted">
            {product.brand}
            {product.tag ? ` · ${product.tag}` : ""}
          </p>
          <h1 className="mt-4 text-[40px] font-medium leading-tight tracking-tight sm:text-[48px]">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">{product.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={product.catalogUrl}
              target="_blank"
              rel="noreferrer"
              className="tds-btn tds-btn-primary min-w-0"
            >
              {product.catalogLabel}
            </a>
            <Link
              href="/kapcsolat"
              className="tds-btn tds-btn-gray min-w-0"
            >
              Ajánlatot kérek
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-base leading-8 text-muted lg:col-span-7">
            {product.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            {product.specs?.length ? (
              <dl className="divide-y divide-line border border-line">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-3 gap-4 px-5 py-4 text-sm"
                  >
                    <dt className="text-muted">{s.label}</dt>
                    <dd className="col-span-2">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {product.models?.length ? (
              <div className="mt-6">
                <p className="text-[14px] font-medium text-muted">
                  Modellek
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.models.map((m) => (
                    <span
                      key={m}
                      className="bg-[#eee] px-3 py-1 text-xs"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {product.extras?.length ? (
              <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
                {product.extras.map((e) => (
                  <li key={e}>— {e}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <p className="text-[14px] font-medium text-muted">
              Kapcsolódó
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/termekek/${p.slug}`}
                  className="border border-line p-5 hover:bg-[#f4f4f4]"
                >
                  <p className="text-[20px] font-medium tracking-tight">{p.name}</p>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
