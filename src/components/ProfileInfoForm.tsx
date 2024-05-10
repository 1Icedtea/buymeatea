"use client";

import { saveProfile } from "@/actions/profileInfoActions";
import "./styles.css";
import UploadButton from "./UploadButton";
import { useState } from "react";

export default function ProfileInfoForm() {
  const [coverURL, setCoverURL] = useState("");

  async function handleFormAction(formData: FormData) {
    const result = await saveProfile(formData);
    console.log(result);
  }

  return (
    <form action={handleFormAction}>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="bg-gray-300 size-20 rounded-full p-2">avatar</div>
        <div>
          {/* cover image */}
          <UploadButton onUploadComplete={setCoverURL} />
          <input type="hidden" name="coverURL" value={coverURL} />
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
