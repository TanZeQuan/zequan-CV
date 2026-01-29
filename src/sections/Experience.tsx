import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { experience } from "../data/experience";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";

export default function Experience() {
  const { lang } = useI18n();

  return (
    <section id="experience" className="py-12 sm:py-14">
      <SectionTitle
        eyebrow={t(labels.sections.experience.eyebrow, lang)}
        title={t(labels.sections.experience.title, lang)}
        subtitle={t(labels.sections.experience.subtitle, lang)}
      />

      <div className="grid gap-4">
        {experience.map((e) => (
          <Card key={e.company + e.period} className="p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-base font-semibold text-[var(--fg)]">
                  {e.role[lang]}
                </div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {e.company}
                </div>
              </div>
              <div className="text-sm text-[var(--muted)]">{e.period}</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-[var(--fg)]/90">
              {e.points[lang].map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
