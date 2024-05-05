"use server";

import { Session } from "next-auth";

export default async function ProfilePage({
  session,
}: {
  session: Session | null;
}) {
  return (
    <>
      {JSON.stringify(session)}
      <div className="max-w-2xl mx-auto px-4">
        <div>avatar</div>
        <div>cover image</div>
        <div>
          <input type="text" name="url" placeholder="username" />
        </div>
        <div>
          <input type="text" name="displayName" placeholder="displayName" />
        </div>
        <textarea name="" placeholder="userbio"></textarea>
        <div>donations list</div>
      </div>
    </>
  );
}
