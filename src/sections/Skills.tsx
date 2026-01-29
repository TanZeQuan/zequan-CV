import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { skillGroups } from "../data/skills";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";

export default function Skills() {
  const { lang } = useI18n();

  return (
    <section id="skills" className="py-12 sm:py-14">
      <SectionTitle
        eyebrow={t(labels.sections.skills.eyebrow, lang)}
        title={t(labels.sections.skills.title, lang)}
        subtitle={t(labels.sections.skills.subtitle, lang)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <Card key={g.title.en} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[var(--fg)]">
                  {g.title[lang]}
                </h3>

                {g.note ? (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {g.note[lang]}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {g.items[lang].map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
