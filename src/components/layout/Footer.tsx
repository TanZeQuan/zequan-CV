export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} Tan Ze Quan. All rights reserved.
    </footer>
  );
}
