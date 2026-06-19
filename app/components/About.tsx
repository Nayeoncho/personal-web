const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  "Frontend": ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "REST APIs"],
  "Tools & DevOps": ["Git", "GitHub", "Jest", "PostgreSQL", "Docker"],
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I&apos;m a software developer and QA engineer currently studying at
              Conestoga College. I enjoy building full-stack web applications and
              writing clean, testable code.
            </p>
            <p>
              Through my coursework and personal projects, I&apos;ve worked with
              clean architecture patterns, REST APIs, and modern TypeScript
              ecosystems. I care about code quality and developer experience.
            </p>
            <p>
              When I&apos;m not coding, I like learning new tools, documenting what I
              learn, and contributing to open-source projects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              Tech Stack
            </h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
