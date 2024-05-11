"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import "./styles.css";

export default function Header({ session }: { session: Session | null }) {
  const name = session?.user?.name || "";
  const firstName = name?.split(" ")[0];
  // const tempUsername = session?.user?.email?.replace(/[^a-z]/g, "");

  return (
    <>
      <header className="mb-8">
        <div className="flex justify-between max-w-xl mx-auto px-4 py-4">
          <Link className="inline-flex gap-1 items-center" href={"/"}>
            <FontAwesomeIcon
              className="h-8 logo hover:drop-shadow-lg"
              icon={faMugHot}
            />
            <span className="mt-2 font-bold logoText">TeaMate</span>
          </Link>
          <nav className="mt-2 flex gap-4 items-center font-bold">
            <Link href={"/about"}>About</Link>
            <Link href={"/faq"}>FAQ</Link>
            <div className="flex gap-4">
              {session && (
                <div className="flex items-center gap-2 shadow-md userAvatar rounded-full p-1 mb-2">
                  <Link
                    // onClick={() => signOut()} Signs out user, disabled temporarily until further styling decisions are finalized
                    className="flex items-center gap-2 rounded-full px-2 py-1"
                    // href={"/" + tempUsername}
                    href={"/profile"}
                  >
                    <Image
                      src={session.user?.image as string}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    {firstName}
                  </Link>
                </div>
              )}
              {!session && (
                <>
                  <button
                    onClick={() => signIn("google")}
                    className="ml-2 border-s-2 border-slate-200 pl-4"
                  >
                    Login
                  </button>
                  <button className="bg-yellow-400 rounded-full px-4 py-2">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
