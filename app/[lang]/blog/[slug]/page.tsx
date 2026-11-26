import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts } from "../../../data/posts";
import { getDictionary, hasLocale, locales } from "../../../i18n";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getPosts(lang).map((post) => ({ lang, slug: post.slug }))
  );
}

export default async function BlogPost({ params }: Props) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const post = getPosts(lang).find((p) => p.slug === slug);

  if (!post) notFound();

  const otherLang = lang === "en" ? "ko" : "en";

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10">
          <Link
            href={`/${lang}#blog`}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {dict.blog.back}
          </Link>
          <Link
            href={`/${otherLang}/blog/${post.slug}`}
            hrefLang={otherLang}
            aria-label={dict.nav.switchLanguageLabel}
            className="border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {dict.nav.switchLanguage}
          </Link>
        </div>

        <header className="mb-10">
          <div className="flex gap-2 flex-wrap mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-3 leading-tight">{post.title}</h1>
          <time className="text-sm text-neutral-500">{post.date}</time>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {post.summary}
          </p>
        </header>

        <hr className="border-neutral-200 dark:border-neutral-800 mb-10" />

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  {section.heading}
                </h2>
              )}
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
