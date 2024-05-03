"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  const name = session?.user?.name || "";
  const firstName = name?.split(" ")[0];
  return (
    <>
      <header className="mb-8">
        <div className="flex justify-between max-w-xl mx-auto px-4 py-4">
          <Link className="inline-flex gap-1 items-center" href={"/"}>
            <FontAwesomeIcon className="h-8 text-yellow-400" icon={faMugHot} />
            <span className="mt-2 font-bold">TeaMate</span>
          </Link>
          <nav className="mt-2 flex gap-4 items-center font-bold">
            <Link className="" href={"/about"}>
              About
            </Link>
            <Link className="" href={"/faq"}>
              FAQ
            </Link>
            <div className="flex gap-4">
              {session && (
                <div className="flex items-center gap-3">
                  Hello, {firstName}
                  <button
                    onClick={() => signOut()}
                    className="bg-yellow-400 rounded-full px-4 py-2"
                  >
                    Logout
                  </button>
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
