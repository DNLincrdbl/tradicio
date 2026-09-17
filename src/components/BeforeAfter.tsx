"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);

  return (
    <div className="overflow-hidden border border-line bg-white">
      <div className="relative aspect-[16/10]">
        <Image
          src="/images/utana.jpg"
          alt="Nyílászáró csere után"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src="/images/elotte.jpg"
            alt="Nyílászáró csere előtt"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white shadow"
          style={{ left: `${pos}%` }}
        />
        <input
          type="range"
          min={8}
          max={92}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 cursor-ew-resize opacity-0"
          aria-label="Előtte-utána összehasonlítás"
        />
      </div>
      <div className="flex justify-between px-6 py-4 text-[14px] font-medium text-muted">
        <span>Előtte</span>
        <span>Utána</span>
      </div>
    </div>
  );
}
