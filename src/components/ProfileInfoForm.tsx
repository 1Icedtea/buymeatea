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
      <div className={`relative bg-[${coverURL}] h-48 p-4 rounded-lg mb-12`}>
        <Image
          src={coverURL || ""}
          alt="cover image"
          height={400}
          width={1020}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute left-10 top-36 bg-gray-300 size-24 rounded-full p-1">
          <Image
            src={avatarURL || ""}
            alt="avatar"
            width={280}
            height={280}
            className="rounded-full aspect-square"
          />
          <div className="absolute bottom-0 right-0 p-2">
            <UploadButton onUploadComplete={setAvatarURL} />
          </div>
          <input type="hidden" name="avatarURL" value={avatarURL} />
        </div>
        <div className="absolute right-6 bottom-0">
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
