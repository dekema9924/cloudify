import { NextRequest, NextResponse } from "next/server";
import userDb from '@/lib/server/models/UserModel'
import fileDb from '@/lib/server/models/FilesModel'
import { VerifyToken } from "@/lib/server/verifyToken";
import { connectDB } from "@/lib/server/mongodb";


export async function POST(req: NextRequest) {
    await connectDB();

    //get user token
    const token = req.cookies.get('token')?.value ||
        req.headers.get('Authorization')?.replace('Bearer ', '')

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = await VerifyToken(token);
    const user = await userDb.findById(userId);

    if (!user) {
        return NextResponse.json({ message: 'invalid user' }, { status: 404 });
    }

    try {
        const { key, size, title, originalName, type } = await req.json();
        console.log("BODY:", key, size, title, originalName, type);

        if (!key || !size || !title || !originalName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const file = await fileDb.create({
            owner: user._id,
            title,
            originalName,
            mimeType: type,
            size,
            fileUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${key}`,
        });

        user.storageUsed += size;
        user.fileCount = (user.fileCount || 0) + 1;
        await user.save();

        return NextResponse.json({ message: 'file saved ', file });
    } catch (err) {
        console.error("DB ERROR:", err);
        return NextResponse.json({ error: "Failed to save file" }, { status: 500 });
    }
}
