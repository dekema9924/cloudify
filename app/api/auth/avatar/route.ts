import { Readable } from 'stream';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/server/cloudinary'
import userDb from '@/lib/server/models/UserModel'
import { VerifyToken } from '@/lib/server/verifyToken';

export async function POST(req: NextRequest) {

    const token = req.cookies.get('token')?.value ||
        req.headers.get('Authorization')?.replace('Bearer ', '');



    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    const userId = await VerifyToken(token);



    try {
        const formData = await req.formData();
        const file = formData.get('avatar') as File;
        console.log(file)

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result: any = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'image',
                    folder: 'cloudify avatars',
                },
                (error, uploadResult) => {
                    if (error) return reject(error);
                    resolve(uploadResult);
                }
            );

            Readable.from([buffer]).pipe(uploadStream);
        });

        if (result && result.secure_url) {
            const user = await userDb.findById(userId._id);
            if (user) {
                user.profileImage = result.secure_url;
                await user.save();
            }
        }

        return NextResponse.json({ message: 'Upload successful' });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ message: 'Error uploading image', error }, { status: 400 });
    }
}
