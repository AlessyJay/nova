import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const Middleware = (req: NextRequest) => {
  return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
  matcher: "/about/:path*",
};

export default Middleware;
