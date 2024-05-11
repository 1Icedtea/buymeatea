import { model, models, Schema } from "mongoose";

//defining types
export type ProfileInfo = {
  email: string;
  username: string;
  displayName: string;
  bio: string;
  coverURL: string;
  avatarURL: string;
};

//profile schema
const ProfileInfoSchema = new Schema<ProfileInfo>(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true },
    displayName: { type: String },
    bio: { type: String },
    coverURL: { type: String },
    avatarURL: { type: String },
  },
  { timestamps: true }
);

//defining model
export const ProfileInfoModel =
  models?.ProfileInfo || model<ProfileInfo>("ProfileInfo", ProfileInfoSchema);
