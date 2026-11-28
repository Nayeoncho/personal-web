import type { Dictionary } from "../i18n";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3 tracking-widest uppercase">
          {dict.greeting}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {dict.name}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          {dict.role}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#strengths"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            {dict.viewStrengths}
          </a>
          <a
            href="#contact"
            className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {dict.getInTouch}
          </a>
        </div>
      </div>
    </section>
  );
}
