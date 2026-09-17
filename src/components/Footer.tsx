import Link from "next/link";
import { company, emails, footerCopy, nav, phones } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3 lg:px-8">
        <div>
          <p className="text-[17px] font-medium">Tradíció</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-muted">
            {company.legalName}. Miskolc, 2004 óta.
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] font-medium text-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[13px] leading-6 text-muted">
          <p>
            {company.addressLine}
            <br />
            {company.addressExtra}
          </p>
          <ul className="mt-4 space-y-1">
            {phones.map((p) => (
              <li key={p.value}>
                <a href={p.href} className="hover:text-ink">
                  {p.label} {p.value}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${emails[0]}`}
            className="mt-3 inline-block hover:text-ink"
          >
            {emails[0]}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>2026 © {footerCopy}</p>
          <Link href="/adatvedelem" className="hover:text-ink">
            Adatvédelmi tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  );
}
