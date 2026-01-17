import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/read")) {
    if (!token) {
      const loginUrl = new URL("/login", req.url);

      // 👇 Save where user was trying to go
      loginUrl.searchParams.set("callbackUrl", pathname + search);

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/read/:path*"],
};
