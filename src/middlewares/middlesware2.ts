import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { CustomMiddleware } from "./chain";
import { i18n } from "@/i18n.config";
import { getLocale } from "./GetLocal";

export function withMiddleware2(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      const locale = await getLocale(request);
      if (locale === i18n.defaultLocale) {
        return NextResponse.rewrite(
          new URL(
            `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
            request.url
          )
        );
      }
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url
        )
      );
    }

    // Call the next middleware and pass the request and response
    return middleware(request, event, response);
  };
}
