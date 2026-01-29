import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { education } from "../data/education";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";

export default function Education() {
  const { lang } = useI18n();

  return (
    <section id="education" className="py-12 sm:py-14">
      <SectionTitle
        eyebrow={t(labels.sections.education.eyebrow, lang)}
        title={t(labels.sections.education.title, lang)}
        subtitle={t(labels.sections.education.subtitle, lang)}
      />

      <div className="grid gap-4">
        {education.map((e) => (
          <Card key={e.school.en + e.program.en} className="p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-base font-semibold text-[var(--fg)]">
                  {e.program[lang]}
                </div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {e.school[lang]}
                </div>
                {e.detail ? (
                  <p className="mt-2 text-sm text-[var(--fg)]/85">
                    {e.detail[lang]}
                  </p>
                ) : null}
              </div>

              <div className="text-sm text-[var(--muted)]">{e.year[lang]}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
