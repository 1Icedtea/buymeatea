"use server";
import { authOptions } from "@/lib/authOptions";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function saveProfile(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const session = await getServerSession(authOptions);
  if (!session) throw "user not logged in...";
  const email = session?.user?.email;

  //get all data from form
  const { username, displayName, bio, coverURL, avatarURL } =
    Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({ email });
  if (profileInfoDoc) {
    profileInfoDoc.set({ username, displayName, bio, coverURL, avatarURL });
    await profileInfoDoc.save();
  } else {
    ProfileInfoModel.create({
      username,
      displayName,
      bio,
      email,
      coverURL,
      avatarURL,
    });
  }
  console.log({ profileInfoDoc });

  return true;
}
