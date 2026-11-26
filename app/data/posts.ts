import type { Locale } from "../i18n";
import { postsEn } from "./posts.en";
import { postsKo } from "./posts.ko";

export type PostSection = {
  heading?: string;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  sections: PostSection[];
};

const postsByLocale: Record<Locale, Post[]> = {
  en: postsEn,
  ko: postsKo,
};

export const getPosts = (locale: Locale): Post[] => postsByLocale[locale];
