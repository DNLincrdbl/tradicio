"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { megaProducts, nav } from "@/lib/site";

const MEGA_CLOSE_MS = 80;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<number>(0);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMega(true);
  };

  const scheduleCloseMega = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(false), MEGA_CLOSE_MS);
  };

  const closeMegaNow = () => {
    window.clearTimeout(closeTimer.current);
    setMega(false);
  };

  useEffect(() => {
    setOpen(false);
    closeMegaNow();
    return () => window.clearTimeout(closeTimer.current);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      window.clearTimeout(closeTimer.current);
      setMega(false);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`site-header sticky top-0 z-50 bg-white text-ink ${mega ? "is-mega-open" : ""}`}
      >
        <div className="grid h-[76px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
          <Link href="/" className="justify-self-start">
            <span className="inline-flex flex-col items-center text-[15px] font-medium leading-none tracking-tight">
              <span>Tradíció</span>
              <span className="mt-1 w-0 min-w-full text-center text-[0.42em] font-normal uppercase leading-[1.2] tracking-[0.06em] text-muted">
                Nyílászáró szalon és beltéri ajtó stúdió
              </span>
            </span>
          </Link>

          <nav className="hidden h-full items-stretch gap-1 justify-self-center self-stretch lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const products = item.href === "/termekek";
              const highlight = active || (products && mega);
              const link = (
                <Link
                  href={item.href}
                  id={products ? "nav-termekek" : undefined}
                  aria-expanded={products ? mega : undefined}
                  className={`flex items-center rounded-[12px] px-4 py-2 text-[14px] font-medium transition-colors duration-300 ease-out hover:bg-[#eee] ${
                    highlight ? "bg-[#eee]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );

              if (!products) {
                return (
                  <span key={item.href} className="flex items-center">
                    {link}
                  </span>
                );
              }

              return (
                <span
                  key={item.href}
                  className="flex h-full items-center"
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                >
                  {link}
                </span>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-5">
            <Link
              href="/kapcsolat"
              className="hidden rounded-[12px] px-4 py-2 text-[14px] font-medium transition-colors duration-300 ease-out hover:bg-[#eee] lg:inline"
            >
              Ajánlatkérés
            </Link>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center"
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-current transition ${open ? "translate-y-[3px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full bg-current transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className="mega-panel absolute inset-x-0 top-full hidden lg:block"
          aria-hidden={mega ? undefined : true}
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
        >
          <div className="absolute inset-x-0 -top-3 h-3" aria-hidden="true" />
          <div className="mega-clip">
            <div className="mega-clip-inner">
              <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-10 gap-y-12 px-8 pb-16 pt-6 sm:grid-cols-3 lg:grid-cols-5">
            {megaProducts.map((item) => (
              <div key={item.name} className="text-center">
                <Link href={item.href} className="group block">
                  <div className="relative mx-auto h-36 w-full max-w-[220px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="220px"
                    />
                  </div>
                  <p className="mt-5 text-[17px] font-medium tracking-tight">
                    {item.name}
                  </p>
                </Link>
                <div className="mt-2 flex items-center justify-center gap-4">
                  <Link
                    href={item.href}
                    className="text-[13px] text-muted underline decoration-black/20 underline-offset-[5px] hover:text-ink"
                  >
                    Információ
                  </Link>
                  <Link
                    href="/kapcsolat"
                    className="text-[13px] text-muted underline decoration-black/20 underline-offset-[5px] hover:text-ink"
                  >
                    Ajánlatkérés
                  </Link>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>

        {open ? (
          <div className="border-t border-line bg-white px-6 py-8 text-ink lg:px-10">
            <div className="mx-auto flex max-w-md flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[20px] font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-4">
                {megaProducts.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-center"
                  >
                    <div className="relative mx-auto h-20 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="140px"
                      />
                    </div>
                    <p className="mt-2 text-[14px] font-medium">{item.name}</p>
                  </Link>
                ))}
              </div>
              <Link href="/kapcsolat" className="tds-btn tds-btn-primary mt-4">
                Ajánlatkérés
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <div
        className="mega-backdrop pointer-events-none fixed inset-x-0 bottom-0 top-[76px] z-40 bg-black/40 opacity-0"
        onClick={closeMegaNow}
      />
    </>
  );
}
