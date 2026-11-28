import type { Dictionary } from "../i18n";

export default function Strengths({ dict }: { dict: Dictionary["strengths"] }) {
  return (
    <section id="strengths" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{dict.title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">{dict.intro}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {dict.items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
            >
              <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
