"use client";

import { FormEvent, useState } from "react";
import { emails } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Név: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\n${message}`,
    );
    const href = `mailto:${emails[0]}?subject=${encodeURIComponent("Üzenet a weboldalról")}&body=${body}`;
    window.open(href, "_self");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="bg-[#f4f4f4] p-8">
        <p className="text-[24px] font-medium">Köszönjük.</p>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-muted">
          Ha a levelezőprogramja nem nyílt meg, írjon nekünk közvetlenül:{" "}
          <a className="text-blue underline" href={`mailto:${emails[0]}`}>
            {emails[0]}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <Field label="Név" name="name" required />
      <Field label="Email cím" name="email" type="email" required />
      <Field label="Telefonszám" name="phone" type="tel" />
      <label className="grid gap-2">
        <span className="text-[14px] font-medium text-muted">Üzenet</span>
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y rounded-[4px] border border-line bg-white px-4 py-3 text-[14px] outline-none focus:border-ink"
        />
      </label>
      <button type="submit" className="tds-btn tds-btn-primary">
        Elküldöm
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[14px] font-medium text-muted">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="h-11 rounded-[4px] border border-line bg-white px-4 text-[14px] outline-none focus:border-ink"
      />
    </label>
  );
}
