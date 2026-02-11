// middleware.js at the root of your project
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;

  if (url.pathname === '/.well-known/matrix/client') {
    const json = {
      "m.homeserver": {
        "base_url": "https://matrix.ben.place"
      }
    };

    return new NextResponse(JSON.stringify(json), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'inline',
      },
    });
  }

  return NextResponse.next(); // let everything else go to React SPA
}

// Apply middleware to all routes
export const config = {
  matcher: '/.well-known/matrix/client',
};
