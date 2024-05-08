"use server";

import { S3Client } from "@aws-sdk/client-s3";
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

  return {
    newFileName,
    extension,
  };
}
