import type { Dictionary } from "../i18n";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} {dict.text}
    </footer>
  );
}
