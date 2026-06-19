type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Forum Web App",
    description:
      "A full-stack Reddit-style forum application with a clean architecture backend (Node.js/TypeScript) and a JavaScript frontend. Features user authentication with JWT, post and comment creation, a like system, and an admin dashboard. The backend is organized into domain, application, and infrastructure layers for maintainability and testability, with Jest unit tests covering core use cases.",
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Jest", "JavaScript", "CSS"],
    github: "https://github.com/Nayeoncho/prog3271-group-project",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "An interactive real-time visualizer for three classic sorting algorithms — Bubble Sort, Merge Sort, and Quick Sort — built with Python and Pygame. Color-coded elements highlight comparisons (orange) and sorted items (purple), while live counters track comparisons and swaps. Users can reset the array, adjust animation speed with arrow keys, and switch algorithms on the fly.",
    tech: ["Python", "Pygame"],
    github: "https://github.com/Nayeoncho/sorting-visualizer",
  },
  {
    title: "Meeting Room Booking App",
    description:
      "A cross-platform mobile application for booking meeting rooms, built with Flutter and Dart. Designed to run on Android and iOS, the app provides a streamlined interface for viewing room availability and making reservations. The project demonstrates multi-platform development with a single shared codebase targeting mobile, web, and desktop environments.",
    tech: ["Dart", "Flutter", "Android", "iOS"],
    github: "https://github.com/Nayeoncho/PROG2436-Final",
  },
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
