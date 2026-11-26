import type { Dictionary } from "../i18n";

type ProjectId = keyof Dictionary["projects"]["items"];

type Project = {
  id: ProjectId;
  tech: string[];
  github?: string;
  demo?: string;
};

// 제목과 설명은 사전(dictionaries)에서 가져오고, 기술 스택과 링크는 언어와 무관하게 유지합니다.
const projects: Project[] = [
  {
    id: "forum",
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Jest", "JavaScript", "CSS"],
    github: "https://github.com/Nayeoncho/prog3271-group-project",
  },
  {
    id: "sorting",
    tech: ["Python", "Pygame"],
    github: "https://github.com/Nayeoncho/sorting-visualizer",
  },
  {
    id: "booking",
    tech: ["Dart", "Flutter", "Android", "iOS"],
    github: "https://github.com/Nayeoncho/PROG2436-Final",
  },
];

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{dict.title}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const text = dict.items[project.id];

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{text.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
                  {text.description}
                </p>
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
