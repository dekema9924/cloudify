
import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest) {

    const token =
        req.cookies.get('token')?.value || // browser
        req.headers.get('Authorization')?.replace('Bearer ', ''); // API clients

    if (!token) return NextResponse.json({ message: 'unAuthorized' }, { status: 401 })

    const response = NextResponse.json({ message: 'logged out successfully' }, { status: 200 })

    response.cookies.set('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 0
    })

    return response




}