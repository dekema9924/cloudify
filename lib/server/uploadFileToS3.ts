import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "./S3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFileToS3(fileName: string, fileType: string) {

    const key = `${fileName}-${Date.now()}`

    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: key,
        ContentType: fileType,


    };

    const command = new PutObjectCommand(params);
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 });
    return { uploadUrl, key };

}