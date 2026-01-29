import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";

export default function Hero() {
  const { lang } = useI18n();

  return (
    <section id="top" className="py-10 sm:py-14">
      <div className="grid gap-4 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-8">
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">
              {t(labels.hero.titleEyebrow, lang)}
            </p>

            {/* Name */}
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {profile.name}
            </h1>

            {/* Role */}
            <p className="mt-2 text-lg text-[var(--muted)]">
              {profile.role[lang]}
            </p>

            {/* Summary */}
            <p className="mt-4 max-w-2xl text-[var(--fg)]/90">
              {profile.summary[lang]}
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Primary */}
              <a href={`mailto:${profile.email}`}>
                <Button>{t(labels.hero.ctaContact, lang)}</Button>
              </a>

              {/* Secondary */}
              <a href="#projects">
                <Button variant="outline">
                  {lang === "en" ? "View Projects" : "查看项目"}
                </Button>
              </a>

              {/* Tertiary */}
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  {lang === "en" ? "Download Resume" : "下载简历"}
                </Button>
              </a>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge label={profile.location[lang]} />
              <Badge label={profile.availability[lang]} />
              <Badge label="React • TypeScript • Tailwind" />
            </div>
          </Card>
        </div>

        {/* Right */}
        <div className="lg:col-span-4">
          <Card className="p-6">
            <p className="text-sm font-semibold">
              {t(labels.hero.highlights, lang)}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                {
                  k: { en: "Experience", zh: "经验" },
                  v: "1+",
                },
                {
                  k: { en: "Projects", zh: "项目" },
                  v: "8+",
                },
                {
                  k: { en: "Focus", zh: "专注" },
                  v: lang === "en" ? "UI + API" : "介面 + API",
                },
                {
                  k: { en: "Stack", zh: "技术栈" },
                  v: "React • Vue • TypeScript • CSS",
                }
              ].map((x) => (
                <div
                  key={x.k.en}
                  className="rounded-2xl border border-[var(--border)] bg-white/50 p-4 dark:bg-white/5"
                >
                  <div className="text-lg font-semibold">{x.v}</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    {x.k[lang]}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
