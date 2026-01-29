import { cn } from "../../lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
      : variant === "outline"
      ? "border border-[var(--border)] bg-transparent text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/5"
      : "bg-transparent text-[var(--fg)] hover:bg-black/5 dark:hover:bg-white/5";

  return <button className={cn(base, styles, className)} {...props} />;
}
