type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Forum Backend (prog3271-group-project)",
    description:
      "Reddit-like forum API built with Node.js, TypeScript, and clean architecture. Features authentication, posts, comments, likes, and an admin dashboard with unit tests.",
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Jest"],
    github: "https://github.com/Nayeoncho/prog3271-group-project",
  },
  // 프로젝트를 추가하세요
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
                {project.description}
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
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
