"use server";
import { authOptions } from "@/lib/authOptions";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function saveProfile(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!session) throw "user not logged in...";

  //get all data from form
  const { username, displayName, bio, coverURL } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({ email });
  if (profileInfoDoc) {
    profileInfoDoc.set({ username, displayName, bio, coverURL });
    await profileInfoDoc.save();
  } else {
    ProfileInfoModel.create({ username, displayName, bio, email, coverURL });
  }

  return true;
}
