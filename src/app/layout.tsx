import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { company } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `Főoldal — ${company.short}`,
    template: `%s — ${company.short}`,
  },
  description:
    "Tradíció nyílászáró szalon és beltéri ajtó stúdió Miskolcon. Műanyag nyílászárók, Erkado beltéri ajtók, Kömmerling és Prémium ablakrendszerek 2004 óta.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
