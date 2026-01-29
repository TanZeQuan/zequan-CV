export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--fg)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-[var(--muted)]">{subtitle}</p>
      ) : null}
    </div>
  );
}
