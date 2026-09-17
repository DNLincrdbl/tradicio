"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { references } from "@/lib/products";

const featured = references.slice(0, 3);
const slides = references.slice(3);

export function ReferenceGallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({
    on: false,
    moved: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    vel: 0,
  });
  const inertia = useRef(0);
  const [active, setActive] = useState<string | null>(null);
  const current = references.find((r) => r.src === active);

  const animateTo = (to: number, duration = 680) => {
    const el = scroller.current;
    if (!el) return;
    cancelAnimationFrame(inertia.current);
    const from = el.scrollLeft;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = Math.max(0, Math.min(max, to));
    const dist = target - from;
    if (Math.abs(dist) < 0.5) return;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - (2 - 2 * t) ** 3 / 2;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.scrollLeft = from + dist * ease(t);
      if (t < 1) inertia.current = requestAnimationFrame(tick);
    };
    inertia.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const stopInertia = () => cancelAnimationFrame(inertia.current);

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.button !== 0) return;
      stopInertia();
      drag.current = {
        on: true,
        moved: false,
        startX: e.clientX,
        startScroll: el.scrollLeft,
        lastX: e.clientX,
        lastT: performance.now(),
        vel: 0,
      };
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
    };

    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      if (!d.on) return;
      e.preventDefault();
      const now = performance.now();
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 3) d.moved = true;
      el.scrollLeft = d.startScroll - dx;
      const dt = Math.max(1, now - d.lastT);
      d.vel = (e.clientX - d.lastX) / dt;
      d.lastX = e.clientX;
      d.lastT = now;
    };

    const onUp = (e: PointerEvent) => {
      const d = drag.current;
      if (!d.on) return;
      d.on = false;
      el.classList.remove("is-dragging");
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }

      let vel = -d.vel;
      let last = performance.now();
      const tick = (t: number) => {
        const dt = t - last;
        last = t;
        vel *= Math.pow(0.0025, dt / 1000);
        if (Math.abs(vel) < 0.02) return;
        const max = el.scrollWidth - el.clientWidth;
        el.scrollLeft = Math.max(0, Math.min(max, el.scrollLeft + vel * dt));
        inertia.current = requestAnimationFrame(tick);
      };
      inertia.current = requestAnimationFrame(tick);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove, { passive: false });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      stopInertia();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const scrollByTile = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const tiles = [...el.querySelectorAll<HTMLElement>("[data-slide]")];
    if (!tiles.length) return;
    const origin = tiles[0].offsetLeft;
    const positions = tiles.map((tile) => tile.offsetLeft - origin);
    const pos = el.scrollLeft;
    let i = 0;
    let best = Infinity;
    positions.forEach((p, n) => {
      const d = Math.abs(p - pos);
      if (d < best) {
        best = d;
        i = n;
      }
    });
    const next = Math.max(0, Math.min(positions.length - 1, i + dir));
    animateTo(positions[next]);
  };

  return (
    <>
      <section className="bg-white px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6">
        <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2">
          {featured.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(item.src)}
              aria-label={item.alt}
              className={`relative min-h-[280px] overflow-hidden rounded-[20px] bg-black sm:min-h-[360px] ${
                i === 2 ? "lg:col-span-2 lg:min-h-[420px]" : "lg:min-h-[380px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes={i === 2 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                priority={i < 2}
              />
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-[#f4f4f4] py-16 sm:py-20">
        <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-4 px-4 sm:mb-10 sm:px-6">
          <div>
            <p className="text-[14px] font-medium text-muted">Galéria</p>
            <h2 className="mt-1 text-[28px] font-medium tracking-tight sm:text-[36px]">
              Beépítések
            </h2>
            <p className="mt-2 text-[14px] text-muted">
              Húzd oldalra a képeket.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] text-ink shadow-[0_1px_2px_rgba(0,0,0,.08)] hover:bg-[#f6f6f6]"
              aria-label="Előző képek"
              onClick={() => scrollByTile(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] text-ink shadow-[0_1px_2px_rgba(0,0,0,.08)] hover:bg-[#f6f6f6]"
              aria-label="Következő képek"
              onClick={() => scrollByTile(1)}
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="ref-slider flex gap-5 px-4 sm:px-6"
        >
          {slides.map((item) => (
            <button
              key={item.src}
              type="button"
              data-slide
              aria-label={item.alt}
              onClick={() => {
                if (drag.current.moved) return;
                setActive(item.src);
              }}
              className="relative h-[52vh] min-h-[300px] w-[min(78vw,820px)] shrink-0 overflow-hidden rounded-[20px] bg-[#ddd] sm:h-[58vh]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                draggable={false}
                className="pointer-events-none object-cover"
                sizes="(min-width: 1024px) 820px, 78vw"
              />
            </button>
          ))}
        </div>
      </section>

      {current ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-[14px] font-medium text-white"
          >
            Bezárás
          </button>
          <Image
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1200}
            className="max-h-[88vh] w-auto max-w-full rounded-[20px] object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
