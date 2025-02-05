import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isExpired } from "react-jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("x-token")?.value;

  const requestedPage = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  // Si no hay token y se intenta acceder a una ruta protegida, redirige al login
  if (!token) {
    if (!requestedPage.includes("/auth")) {
      url.pathname = `/auth/signin`;
      url.search = `p=${requestedPage}`;
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  const isTokenExpired = isExpired(token);

  // Redirige si está autenticado e intenta acceder a /auth/login
  if (!isTokenExpired && requestedPage.includes("/auth")) {
    url.pathname = `/`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/signin/:path*"],
};
