import Link from "next/link";
import { contentData } from "@/lib/content-data";

const navLinks = [
  { href: "/projects/", label: "Projects", external: false },
  {
    href: contentData.github,
    label: "GitHub",
    external: true,
  },
  {
    href: contentData.linkedin,
    label: "LinkedIn",
    external: true,
  },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-(--header-border) bg-(--header-bg) backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Portfolio
        </Link>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline hover:underline-offset-2"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:underline hover:underline-offset-2"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
