"use client";

import { saveProfile } from "@/actions/profileInfoActions";
import { uploadToS3 } from "@/actions/uploadActions";
import { ChangeEvent } from "react";

export default function ProfileInfoForm() {
  async function handleFormAction(formData: FormData) {
    const result = await saveProfile(formData);
    console.log(result);
  }

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      formData.set("file", file);
      console.log(await uploadToS3(formData));
    }
  }
  return (
    <form action={handleFormAction}>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="bg-gray-300 size-20 rounded-full p-2">avatar</div>
        <div>
          cover image
          <input
            type="file"
            name="coverFile"
            id="inputFile"
            onChange={upload}
          />
        </div>
      </div>
      <div>
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          name="username"
          id="usernameInput"
          placeholder="username"
        />
      </div>
      <div>
        <label htmlFor="displayNameInput">Display Name</label>
        <input
          type="text"
          name="displayName"
          id="displayNameInput"
          placeholder="displayName"
        />
      </div>
      <label htmlFor="bioInput">Bio</label>
      <textarea name="bio" id="bioInput" placeholder="userbio"></textarea>
      <div>
        <button className="save-profile-btn">Save profile</button>
      </div>
    </form>
  );
}
