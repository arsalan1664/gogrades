import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { withMiddleware1 } from "./middlewares/middlesware1";
import { withMiddleware2 } from "./middlewares/middlesware2";
import { chain } from "./middlewares/chain";

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//   const city = request.geo?.city || "null";
//   const response = NextResponse.next();
//   response.cookies.set("x-city", city);
//   return response;
// }

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//   const IP = await fetch("https://api.ipify.org?format=json");
//   const userIp = await IP.json();
//   const res = await fetch(
//     `https://pro.ip-api.com/json/${userIp.ip}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
//   );
//   const data = await res.json();
//   const response = NextResponse.next();
//   response.cookies.set("x-city", data.city);
//   return response;
// }

export default chain([withMiddleware1, withMiddleware2]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
