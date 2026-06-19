export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Nayeon Cho. Built with Next.js &amp; Tailwind CSS.
    </footer>
  );
}
