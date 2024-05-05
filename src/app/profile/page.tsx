"use server";

export default async function ProfilePage() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="bg-gray-300 size-20 rounded-full p-2">avatar</div>
          <div>cover image</div>
        </div>
        <div>
          <input type="text" name="url" placeholder="username" />
        </div>
        <div>
          <input type="text" name="displayName" placeholder="displayName" />
        </div>
        <textarea name="" placeholder="userbio"></textarea>
        <div>
          <button>save profile</button>
        </div>
        <div>donations list</div>
      </div>
    </>
  );
}
