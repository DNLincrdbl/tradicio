import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[14px] font-medium text-muted">404</p>
      <h1 className="mt-4 text-[40px] font-medium tracking-tight">
        Az oldal nem található.
      </h1>
      <Link href="/" className="tds-btn tds-btn-dark mt-8">
        Vissza a főoldalra
      </Link>
    </section>
  );
}
