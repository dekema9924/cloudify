import { NextRequest, NextResponse } from 'next/server';
import { VerifyToken } from '@/lib/server/verifyToken';
import userDb from '@/lib/server/models/UserModel'

export async function GET(req: NextRequest) {
    const token = req.cookies.get('token')?.value ||
        req.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const userId = await VerifyToken(token);
    // console.log(userId._id)

    try {
        const userData = await userDb.findById(userId).select('-password');
        if (!userData) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        return NextResponse.json({ user: userData });
    } catch {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
}
