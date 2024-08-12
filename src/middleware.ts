import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const newHeaders = new Headers(request.headers);
  const city = request.geo?.city || "null";
  newHeaders.set("x-city", city);

  return NextResponse.next({
    headers: newHeaders,
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
