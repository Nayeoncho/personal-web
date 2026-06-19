const links = [
  {
    label: "GitHub",
    href: "https://github.com/Nayeoncho",
    icon: "⌥",
  },
  {
    label: "Email",
    href: "mailto:chonayeon51@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nayeon-cho",
    icon: "in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl">
          I&apos;m currently open to new opportunities. Whether it&apos;s a job, a
          project, or just a chat — feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all font-medium"
            >
              <span className="text-sm text-indigo-600 dark:text-indigo-400 font-bold w-5 text-center">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
