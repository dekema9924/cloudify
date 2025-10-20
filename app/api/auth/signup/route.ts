import { NextResponse } from "next/server";
import validator from "validator";
import UserDb from "@/lib/server/models/UserModel";
import { connectDB } from "@/lib/server/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    await connectDB();

    const { username, email, password } = await req.json();
    console.log('Received signup data:', { username, email, password });

    try {

        //  validate user input
        if (!username || !email || !password) return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        if (!validator.isEmail(email)) return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
        if (password.length < 6) return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 });


        const userExist = await UserDb.findOne({
            $or: [{ username }, { email }],

        });
        if (userExist) return NextResponse.json({ message: "Email or username already exists" }, { status: 400 });

        try {
            const hash = await bcrypt.hash(password, 10);
            const newUser = await UserDb.create({ username, email, password: hash });
            return NextResponse.json({ message: 'User created Successfully', user: newUser }, { status: 201 });
        } catch (err) {
            console.error(' Signup error:', err);
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }

    } catch (err) {
        console.error(err);
    }
}
