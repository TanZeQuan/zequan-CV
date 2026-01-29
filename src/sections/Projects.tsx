import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { projects, type Project } from "../data/projects";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";

export default function Projects() {
  const { lang } = useI18n();

  const professional = projects.filter((p) => p.category === "professional");
  const independent = projects.filter((p) => p.category === "independent");

  return (
    <section id="projects" className="py-12 sm:py-14">
      {/* Professional Projects */}
      <SectionTitle
        eyebrow={t(labels.sections.projects.eyebrowCompany, lang)}
        title={t(labels.projects.companyTitle, lang)}
        subtitle={t(labels.projects.companySub, lang)}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {professional.map((p) => (
          <ProjectCard key={p.name.en} p={p} lang={lang} />
        ))}
      </div>

      {/* Independent / Freelance Projects */}
      <div className="mt-14">
        <SectionTitle
          eyebrow={t(labels.sections.projects.eyebrowFreelance, lang)}
          title={t(labels.projects.freelanceTitle, lang)}
          subtitle={t(labels.projects.freelanceSub, lang)}
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {independent.map((p) => (
            <ProjectCard key={p.name.en} p={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, lang }: { p: Project; lang: "en" | "zh" }) {
  const href = p.primaryLink?.href ?? p.links?.[0]?.href;

  return (
    <Card className="p-0 overflow-hidden">
      {/* Cover */}
      {p.cover ? (
        <a
          href={href ?? "#"}
          target={href ? "_blank" : undefined}
          rel={href ? "noreferrer" : undefined}
          className="group block"
          aria-label={href ? `${p.name[lang]} - open` : p.name[lang]}
          onClick={(e) => {
            if (!href) e.preventDefault();
          }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5 dark:bg-white/5">
            <img
              src={p.cover.src}
              alt={p.cover.alt[lang]}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {p.primaryLink ? (
              <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-white backdrop-blur">
                {p.primaryLink.label[lang]}
              </div>
            ) : null}
          </div>
        </a>
      ) : null}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[var(--fg)]">
              {p.name[lang]}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {p.description[lang]}
            </p>
          </div>

          {p.primaryLink ? (
            <a href={p.primaryLink.href} target="_blank" rel="noreferrer" className="ml-auto shrink-0">
              <Button variant="outline" className="px-3 py-2">
                {p.primaryLink.label[lang]}
              </Button>
            </a>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Badge key={s} label={s} />
          ))}
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold">{t(labels.projects.role, lang)}</p>
          <p className="text-sm text-[var(--muted)]">{p.role[lang]}</p>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold">{t(labels.projects.responsibility, lang)}</p>
          <ul className="mt-2 space-y-2 text-sm text-[var(--fg)]/90">
            {p.responsibility[lang].map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold">{t(labels.projects.impact, lang)}</p>
          <ul className="mt-2 space-y-2 text-sm text-[var(--fg)]/90">
            {p.impact[lang].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {p.meta ? (
            <span className="text-xs text-[var(--muted)]">{p.meta[lang]}</span>
          ) : null}

          <div className="ml-auto flex gap-2">
            {p.links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                <Button variant="outline" className="px-3 py-2">
                  {l.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
