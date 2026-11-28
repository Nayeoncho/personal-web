import type { Dictionary } from "../i18n";

type ProjectId = keyof Dictionary["projects"]["items"];

type Project = {
  id: ProjectId;
  tech: string[];
  github?: string;
  demo?: string;
};

// 제목, 설명, 성과는 사전(dictionaries)에서 가져오고, 기술 스택과 링크는 언어와 무관하게 유지합니다.
// 순서는 고객이 쓰는 제품에 가까운 프로젝트부터입니다.
const projects: Project[] = [
  {
    id: "booking",
    tech: ["Dart", "Flutter", "SQLite", "Android", "iOS"],
    github: "https://github.com/Nayeoncho/PROG2436-Final",
  },
  {
    id: "sorting",
    tech: ["Python", "Pygame"],
    github: "https://github.com/Nayeoncho/sorting-visualizer",
  },
  {
    id: "forum",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Jest", "JavaScript", "CSS"],
    github: "https://github.com/Nayeoncho/prog3271-group-project",
  },
];

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{dict.title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">{dict.intro}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const text = dict.items[project.id];

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{text.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {text.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 flex-1">
                  {text.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden className="text-indigo-600 dark:text-indigo-400">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm font-medium">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {dict.github}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:underline"
                    >
                      {dict.demo}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
