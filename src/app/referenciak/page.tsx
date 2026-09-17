import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReferenceGallery } from "@/components/ReferenceGallery";

export const metadata: Metadata = { title: "Referenciák" };

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenciák"
        title="Beépítések, amiket otthon hagytunk."
        description="Az eredeti galéria fotói: előtte–utána nyílászárócsere, bemutatóterem és helyszíni munkák."
      />
      <ReferenceGallery />
    </>
  );
}
