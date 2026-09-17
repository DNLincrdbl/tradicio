"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { categories, type CategoryId, type Product } from "@/lib/products";

const filters: { id: "all" | CategoryId; label: string }[] = [
  { id: "all", label: "Mind" },
  { id: "erkado", label: "Erkado" },
  { id: "premium", label: "Prémium" },
  { id: "kommerling", label: "Kömmerling" },
  { id: "door-panels", label: "Door Panels" },
  { id: "kilincsek", label: "Kilincsek" },
  { id: "nagyker", label: "Nagykereskedelem" },
];

export function ProductCatalog({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const start =
    initialCategory && filters.some((f) => f.id === initialCategory)
      ? (initialCategory as (typeof filters)[number]["id"])
      : "all";
  const [active, setActive] = useState<(typeof filters)[number]["id"]>(start);

  useEffect(() => {
    setActive(start);
  }, [start]);

  const list = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [active, products],
  );

  const intro = categories.find((c) => c.id === active);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`h-9 shrink-0 rounded-[4px] px-4 text-[14px] font-medium transition-colors duration-[330ms] ${
              active === f.id
                ? "bg-ink text-white"
                : "bg-[#eee] text-ink hover:bg-[#dedede]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {intro ? (
        <p className="mt-8 max-w-2xl text-[14px] leading-7 text-muted">
          {intro.description}
        </p>
      ) : (
        <p className="mt-8 max-w-2xl text-[14px] leading-7 text-muted">
          A katalógusokból kinyert kollekciók, ablakrendszerek és nagykereskedelmi
          termékek – szűrhető, letölthető adatlapokkal.
        </p>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/termekek/${product.slug}`} className="group block bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eee]">
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={1125}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {product.tag ? (
          <span className="absolute left-4 top-4 bg-white/90 px-2 py-1 text-[12px] font-medium text-ink">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="px-1 py-4">
        <p className="text-[13px] text-muted">{product.brand}</p>
        <h3 className="mt-1 text-[20px] font-medium tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-muted">
          {product.excerpt}
        </p>
      </div>
    </Link>
  );
}
