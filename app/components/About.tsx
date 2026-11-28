import type { Dictionary } from "../i18n";

// 기술 이름은 언어와 관계없이 동일하므로 코드에 둡니다.
const softwareSkills = [
  "Python",
  "SQL",
  "JavaScript",
  "TypeScript",
  "Dart / Flutter",
  "React / Next.js",
  "Node.js",
  "MongoDB",
  "Git / GitHub",
];

function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function About({ dict }: { dict: Dictionary["about"] }) {
  const groups = [
    { key: "plant", label: dict.categories.plant, items: dict.plant },
    { key: "certifications", label: dict.categories.certifications, items: dict.certifications },
    { key: "languages", label: dict.categories.languages, items: dict.languages },
    { key: "software", label: dict.categories.software, items: softwareSkills },
  ];

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
              {dict.skillsTitle}
            </h3>
            <div className="space-y-4">
              {groups.map((group) => (
                <div key={group.key}>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <Chips items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
