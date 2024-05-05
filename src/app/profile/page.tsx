"use server";
import "../globals.css";

export default async function ProfilePage() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="bg-gray-300 size-20 rounded-full p-2">avatar</div>
          <div>cover image</div>
        </div>
        <div>
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            name="url"
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
        <textarea name="" id="bioInput" placeholder="userbio"></textarea>
        <div>
          <button className="save-profile-btn">Save profile</button>
        </div>
        <div>donations list</div>
      </div>
    </>
  );
}
