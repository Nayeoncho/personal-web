import type { Dictionary } from "../i18n";

// 기술 이름은 언어와 관계없이 동일하므로 코드에 두고, 카테고리 이름만 번역합니다.
const skills = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express", "REST APIs"],
  tools: ["Git", "GitHub", "Jest", "MongoDB", "PostgreSQL", "Docker"],
} as const;

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{dict.title}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {dict.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              {dict.techStack}
            </h3>
            <div className="space-y-4">
              {(Object.keys(skills) as (keyof typeof skills)[]).map((category) => (
                <div key={category}>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    {dict.categories[category]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
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
