import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { CustomMiddleware } from "./chain";

export function withMiddleware1(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // The first middleware in the chain has to create the response
    // object and pass it down the chain.
    const city = request.geo?.city || "karachi (hard)";
    const country = request.geo?.country || "pakistan (hard)";
    const response = NextResponse.next();
    response.cookies.set("X-City", city);
    response.cookies.set("X-Country", country);
    return middleware(request, event, response);
  };
}
