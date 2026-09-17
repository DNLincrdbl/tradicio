"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cookieCopy } from "@/lib/site";

const KEY = "tradicio-cookie-ok";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(KEY) !== "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 bg-[#171a20] px-5 py-4 text-white sm:flex-row sm:items-center">
        <p className="flex-1 text-[13px] leading-6 text-white/80">
          {cookieCopy.message}{" "}
          <Link href="/adatvedelem" className="underline underline-offset-4">
            {cookieCopy.link}
          </Link>
        </p>
        <button
          type="button"
          className="tds-btn tds-btn-primary h-10 min-w-[140px]"
          onClick={() => {
            localStorage.setItem(KEY, "1");
            setVisible(false);
          }}
        >
          {cookieCopy.dismiss}
        </button>
      </div>
    </div>
  );
}
