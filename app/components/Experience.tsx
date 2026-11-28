import type { Dictionary } from "../i18n";

export default function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{dict.title}</h2>

        <div className="mb-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-xl font-semibold">
              {dict.role}
              <span className="text-neutral-500 font-normal"> · {dict.company}</span>
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {dict.duration}
            </p>
          </div>
          <p className="text-sm text-neutral-500 mt-1">{dict.place}</p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4 max-w-3xl">
            {dict.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {dict.items.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
            >
              <h4 className="font-semibold mb-3">{item.title}</h4>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden className="text-indigo-600 dark:text-indigo-400">
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-neutral-900 rounded-r-xl p-6">
          <h4 className="font-semibold mb-2">{dict.takeawayTitle}</h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {dict.takeaway}
          </p>
        </div>
      </div>
    </section>
  );
}
