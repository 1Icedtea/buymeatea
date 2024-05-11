"use client";

import { saveProfile } from "@/actions/profileInfoActions";
import "./styles.css";
import UploadButton from "./UploadButton";
import { useState } from "react";
import { ProfileInfo } from "@/models/ProfileInfo";
import Image from "next/image";

type Props = {
  profileInfo: ProfileInfo | null;
};

export default function ProfileInfoForm({ profileInfo }: Props) {
  const [coverURL, setCoverURL] = useState(profileInfo?.coverURL);
  const [avatarURL, setAvatarURL] = useState(profileInfo?.avatarURL);

  async function handleFormAction(formData: FormData) {
    const result = await saveProfile(formData);
    console.log(result);
  }

  return (
    <form action={handleFormAction}>
      <div className="relative bg-gray-200 p-4 rounded-lg">
        <Image
          src={coverURL || ""}
          alt="cover image"
          height={400}
          width={1020}
          className="aspect-video"
        />
        <div className="relative bg-gray-300 size-20 rounded-full p-2">
          <Image
            src={avatarURL || ""}
            alt="avatar"
            width={120}
            height={120}
            className="rounded-full aspect-square"
          />
          <div className="absolute bottom-0 right-0">
            <UploadButton onUploadComplete={setAvatarURL} />
          </div>
          <input type="hidden" name="avatarURL" value={avatarURL} />
        </div>
        <div className="absolute right-2 bottom-2">
          cover image
          <UploadButton onUploadComplete={setCoverURL} />
          <input type="hidden" name="coverURL" value={coverURL} />
        </div>
      </div>
      <div>
        <label htmlFor="usernameInput">Username</label>
        <input
          defaultValue={profileInfo?.username}
          type="text"
          name="username"
          id="usernameInput"
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="displayNameInput">Display Name</label>
        <input
          defaultValue={profileInfo?.displayName}
          type="text"
          name="displayName"
          id="displayNameInput"
          placeholder="displayName"
        />
      </div>
      <label htmlFor="bioInput">Bio</label>
      <textarea
        defaultValue={profileInfo?.bio}
        name="bio"
        id="bioInput"
        placeholder="userbio"
      ></textarea>
      <div>
        <button className="save-profile-btn">Save profile</button>
      </div>
    </form>
  );
}
