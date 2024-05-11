"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function uploadToS3(formData: FormData) {
  const file = formData.get("file") as File;

  const s3Client = new S3Client({
    region: "ap-southeast-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY as string,
      secretAccessKey: process.env.AWS_SECRET_KEY as string,
    },
  });

  const extension = file.name.split(".").slice(-1)[0];
  const newFileName = uniqid() + "." + extension;

  //get binary data
  const chunks = [];
  // @ts-ignore
  for await (const chunk of file.stream()) {
    chunks.push(chunk);
  }

  const buffer = Buffer.concat(chunks);

  const bucketName = process.env.AWS_BUCKET as string;

  //send buffer data to S3
  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: newFileName,
      ACL: "public-read",
      Body: buffer,
      ContentType: file.type,
    })
  );

  return {
    newFileName,
    extension,
    url: `https://${bucketName}.s3.amazonaws.com/${newFileName}`,
  };
}
