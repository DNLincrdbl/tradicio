import Image from "next/image";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="bg-white px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="relative mx-auto min-h-[52vh] overflow-hidden rounded-[20px] bg-black text-white sm:min-h-[62vh]">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex min-h-[52vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center sm:min-h-[62vh] lg:px-8">
            {eyebrow ? (
              <p className="text-[14px] font-medium text-white/70">{eyebrow}</p>
            ) : null}
            <h1 className="mt-3 text-[36px] font-medium leading-[1.15] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,.35)] sm:text-[48px]">
              {title}
            </h1>
            {description ? (
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-white/85 [text-shadow:0_2px_18px_rgba(0,0,0,.35)] sm:text-[18px]">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
        {eyebrow ? (
          <p className="text-[14px] font-medium text-muted">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 text-[36px] font-medium leading-[1.15] tracking-tight sm:text-[40px]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] font-medium text-muted">{children}</p>;
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  const className = "text-[14px] font-medium text-blue hover:underline";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
