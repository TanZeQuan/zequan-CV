import { cn } from "../../lib/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm",
        "backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
