import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken, isExpired } from "react-jwt";
import { AccesToken } from "./types/accessToken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("x-token")?.value;
  const requestedPage = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  const decodedToken = token ? decodeToken<AccesToken>(token) : null;
  const role = decodedToken?.role || "";
  const isTokenExpired = token ? isExpired(token) : true;

  // Si no hay token o está expirado, restringe acceso a /my-account y /admin/:path*
  if (!token || isTokenExpired) {
    if (
      requestedPage.startsWith("/my-account") ||
      requestedPage.startsWith("/admin")
    ) {
      url.pathname = `/auth/signin`;
      url.search = `p=${requestedPage}`;
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Bloquea acceso a /auth/:path* si el usuario ya tiene un token válido
  if (requestedPage.startsWith("/auth")) {
    url.pathname = `/`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  // Restringe acceso a /admin/:path* si no es admin
  if (requestedPage.startsWith("/admin") && role !== "admin_role") {
    url.pathname = `/unauthorized`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/my-account", "/admin/:path*"],
};
