"use server";

export async function uploadToS3(formData: FormData) {
  const file = formData.get("file");
  console.log({ file });

  return true;
}
