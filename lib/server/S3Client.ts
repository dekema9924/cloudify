import { S3Client } from "@aws-sdk/client-s3";

if (!process.env.AWS_S3_REGION || !process.env.AWS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error("Missing AWS S3 configuration in environment variables.");
}

export const s3 = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
    }
});