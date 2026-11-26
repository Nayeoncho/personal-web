import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ko"];

// 브라우저 언어(Accept-Language)가 한국어면 /ko, 그 외에는 /en 으로 보냅니다.
function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header.split(",")[0]?.trim().toLowerCase() ?? "";
  return preferred.startsWith("ko") ? "ko" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // _next, API, 파일(확장자가 있는 경로: favicon.ico 등)은 제외
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
