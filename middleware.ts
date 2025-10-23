// middleware.ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { VerifyToken } from '@/lib/server/verifyToken'

export async function middleware(req: NextRequest) {
    const publicPaths = ['/api/auth/signin', '/api/auth/signup',];// non protected routes. dont need topken to access

    if (publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.next(); // allow route to run
    }
    const token =
        req.cookies.get('token')?.value || // browser
        req.headers.get('Authorization')?.replace('Bearer ', ''); // API clients



    if (!token) {
        if (req.nextUrl.pathname.startsWith('/api')) {
            return NextResponse.json({ message: 'Unauthorized: No token' }, { status: 401 });
        }
        return NextResponse.redirect(new URL('/', req.url));
    }

    try {
        if (req.nextUrl.pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL('/profile', req.url));

        }
        await VerifyToken(token)
        const res = NextResponse.next();
        return res;


    } catch {
        if (req.nextUrl.pathname.startsWith('/api')) {
            return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 });
        }
        return NextResponse.redirect(new URL('/', req.url));

    }
}

export const config = {
    matcher: ['/api/:path*', '/profile/:path*', '/dashboard/:path*'], //need token to acces. user routes
};
