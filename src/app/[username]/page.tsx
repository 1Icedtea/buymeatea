"use server";

import { ProfileInfo, ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import Image from "next/image";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

type Props = {
  params: {
    username: string;
  };
};

export default async function ProfilePage({ params }: Props) {
  const username = params.username;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const profileInfoDoc: ProfileInfo | null = await ProfileInfoModel.findOne({
    username,
  });

  if (!profileInfoDoc) {
    return <div>404 - Profile not found</div>;
  }

  return (
    <>
      <header>
        <div className="w-full h-48">
          <Image
            src={profileInfoDoc.coverURL}
            alt="Cover photo"
            height={400}
            width={1020}
            className="h-48 object-cover"
          />
        </div>
        <div className="user-avatar-container">
          <div className="avatar-img-container">
            <Image
              src={profileInfoDoc.avatarURL}
              alt="Cover photo"
              height={280}
              width={280}
              className="aspect-square"
            />
          </div>
          <div className="user-info">
            <h1 className="text-2xl font-bold">{profileInfoDoc.displayName}</h1>
            <h2>
              <FontAwesomeIcon icon={faMugHot} />/{profileInfoDoc.username}
            </h2>
          </div>
        </div>
      </header>
      <section className="max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mx-4">
          <div>1num</div>
          <div>2num</div>
          <div>3num</div>
          <div>4num</div>
        </div>
      </section>
    </>
  );
}
