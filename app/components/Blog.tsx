import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

// 나중에 실제 글로 채워주세요
export const posts: Post[] = [
  {
    slug: "clean-architecture-nodejs",
    title: "Clean Architecture in Node.js with TypeScript",
    date: "2026-06-19",
    summary:
      "How I structured a forum backend using domain, application, and infrastructure layers — and why it made testing so much easier.",
    tags: ["TypeScript", "Architecture", "Node.js"],
  },
  {
    slug: "jest-unit-testing-tips",
    title: "Jest Unit Testing Tips I Learned the Hard Way",
    date: "2026-06-10",
    summary:
      "Common pitfalls with mocking, async tests, and keeping tests isolated from each other.",
    tags: ["Jest", "Testing", "TypeScript"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Blog / TIL</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Things I learned, figured out, or want to remember.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-neutral-500 shrink-0">{post.date}</time>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                  {post.summary}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
