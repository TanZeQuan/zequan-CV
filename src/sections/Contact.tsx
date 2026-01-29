import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";
import { labels, t } from "../i18n/labels";
import { useState } from "react";

export default function Contact() {
  const { lang } = useI18n();
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    const text = profile.email;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // If copy fails, fallback to opening mail client
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-14">
      <SectionTitle
        eyebrow="Get in touch"
        title={t(labels.nav.contact, lang)}
        subtitle={t(labels.contact.intro, lang)}
      />

      <Card className="p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[var(--fg)]/90">{t(labels.contact.intro, lang)}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`}>
                <Button>{t(labels.contact.emailMe, lang)}</Button>
              </a>

              <Button variant="outline" onClick={handleCopyEmail}>
                {copied
                  ? lang === "en"
                    ? "Copied!"
                    : "已复制"
                  : lang === "en"
                    ? "Copy Email"
                    : "复制邮箱"}
              </Button>

              {profile.linkedin ? (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="outline">LinkedIn</Button>
                </a>
              ) : null}

              {profile.github ? (
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Button variant="outline">GitHub</Button>
                </a>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border)] bg-white/50 p-5 dark:bg-white/5">
              <div className="text-sm font-semibold text-[var(--fg)]">
                {t(labels.contact.details, lang)}
              </div>

              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[var(--muted)]">
                    {t(labels.contact.location, lang)}
                  </dt>
                  <dd className="font-medium text-[var(--fg)]">
                    {profile.location[lang]}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[var(--muted)]">
                    {t(labels.contact.email, lang)}
                  </dt>
                  <dd className="font-medium text-[var(--fg)]">{profile.email}</dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[var(--muted)]">
                    {t(labels.contact.availability, lang)}
                  </dt>
                  <dd className="font-medium text-[var(--fg)]">
                    {profile.availability[lang]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
