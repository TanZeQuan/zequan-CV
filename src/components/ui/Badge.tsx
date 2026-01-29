export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg)]/80 bg-white/50 dark:bg-white/5">
      {label}
    </span>
  );
}
