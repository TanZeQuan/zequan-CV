import { useMemo, useState } from "react";
import Button from "../ui/Button";
import { cn } from "../../lib/cn";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useI18n } from "../../i18n/useI18n";
import { labels, t } from "../../i18n/labels";

const nav = [
  { key: "experience", href: "#experience", id: "experience" },
  { key: "education", href: "#education", id: "education" },
  { key: "skills", href: "#skills", id: "skills" },
  { key: "projects", href: "#projects", id: "projects" },
  { key: "contact", href: "#contact", id: "contact" },
] as const;

type NavKey = (typeof nav)[number]["key"];

export default function Navbar() {
  const { lang, toggleLang } = useI18n();
  const [open, setOpen] = useState(false);

  const activeId = useScrollSpy(nav.map((n) => n.id), {
    rootMargin: "-20% 0px -65% 0px",
    defaultActiveId: "experience",
  });

  const langLabel = useMemo(() => (lang === "en" ? "中文" : "EN"), [lang]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="h-9 w-9 overflow-hidden rounded-xl border border-[var(--border)] bg-white/60 dark:bg-white/5 shadow-sm">
            <img
              src="/img/avatar.jpg"
              alt="Tan Ze Quan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[var(--fg)]">Tan Ze Quan</div>
            <div className="text-xs text-[var(--muted)]">Frontend • React / TS</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const isActive = activeId === n.id;
            const label = labels.nav[n.key as NavKey];

            return (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition",
                  "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/5",
                  isActive && "text-[var(--accent)] bg-blue-500/10 dark:bg-blue-400/10 font-semibold"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {t(label, lang)}
              </a>
            );
          })}

           <a href="/img/zequan-CV.pdf" target="_blank" rel="noreferrer" className="ml-2">
            <Button variant="outline" className="border-[var(--border)]">
              {t(labels.nav.resume, lang)}
            </Button>
          </a>

          <Button
            variant="outline"
            className="ml-2 border-[var(--border)]"
            onClick={toggleLang}
            aria-label="Toggle language"
            title="Toggle language"
          >
            {langLabel}
          </Button>
        </nav>

        {/* Mobile actions (always visible on mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            className="border-[var(--border)] px-3"
            onClick={toggleLang}
            aria-label="Toggle language"
            title="Toggle language"
          >
            {langLabel}
          </Button>

          <Button
            variant="outline"
            className="border-[var(--border)] px-3"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            title="Menu"
          >
            {open ? "×" : "≡"}
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
            <div className="grid gap-1">
              {nav.map((n) => {
                const isActive = activeId === n.id;
                const label = labels.nav[n.key as NavKey];

                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm transition",
                      "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/5",
                      isActive && "text-[var(--accent)] bg-blue-500/10 dark:bg-blue-400/10 font-semibold"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(label, lang)}
                  </a>
                );
              })}

              <a href="/resume.pdf" className="mt-2" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full border-[var(--border)]">
                  {t(labels.nav.resume, lang)}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
