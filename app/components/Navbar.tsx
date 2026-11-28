"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary, Locale } from "../i18n";

export default function Navbar({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}#about`, label: dict.about },
    { href: `/${lang}#experience`, label: dict.experience },
    { href: `/${lang}#strengths`, label: dict.strengths },
    { href: `/${lang}#projects`, label: dict.projects },
    { href: `/${lang}#blog`, label: dict.blog },
    { href: `/${lang}#contact`, label: dict.contact },
  ];

  // 현재 경로의 언어 부분만 바꿔서 같은 페이지의 다른 언어 버전으로 이동
  const otherLang: Locale = lang === "en" ? "ko" : "en";
  const switchHref = pathname.replace(/^\/(en|ko)(?=\/|$)/, `/${otherLang}`);

  const languageSwitch = (
    <Link
      href={switchHref}
      hrefLang={otherLang}
      aria-label={dict.switchLanguageLabel}
      onClick={() => setMenuOpen(false)}
      className="border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      {dict.switchLanguage}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="font-bold text-lg tracking-tight">
          {dict.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {languageSwitch}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={dict.toggleMenu}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>{languageSwitch}</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
