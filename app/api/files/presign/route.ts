
import { NextRequest, NextResponse } from "next/server";
import userDb from '@/lib/server/models/UserModel'
import { VerifyToken } from "@/lib/server/verifyToken";
import { uploadFileToS3 } from "@/lib/server/uploadFileToS3";




//add files
export async function POST(req: NextRequest) {


    //get user token
    const token = req.cookies.get('token')?.value ||
        req.headers.get('Authorization')?.replace('Bearer ', '')


    //validate it

    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    const userId = await VerifyToken(token);

    //get user
    const user = await userDb.findById(userId)

    if (!user) return NextResponse.json({ message: 'invalid user' }, { status: 404 })

    //get form
    const { fileName, fileType, fileSize } = await req.json()


    //validate form
    if (fileSize > 2 * 1024 * 1024 * 1024) {
        throw new Error("File exceeds 2GB limit");
    }

    //check if enough storage
    if (user.storageUsed + fileSize > user.storageLimit) {
        throw new Error("Storage limit exceeded");
    }

    try {
        const s3file = await uploadFileToS3(fileName, fileType)
        return NextResponse.json({ message: s3file, }, { status: 200 })

    }
    catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });

    }




}