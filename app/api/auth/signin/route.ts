import { connectDB } from "@/lib/server/mongodb";
import userDb from '@/lib/server/models/UserModel'
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    await connectDB();
    const { email, password } = await req.json();


    if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }
    const user = await userDb.findOne({ email });

    if (!user) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }
    return NextResponse.json({ message: 'Login successful', user: { username: user.username } }, { status: 200 });





}