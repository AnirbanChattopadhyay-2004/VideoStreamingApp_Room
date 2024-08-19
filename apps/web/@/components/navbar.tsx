"use client";

import Link from "next/link";
import Image from "next/image";
import { MobileNavigation } from "./mobilenav";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="flex justify-between  item-center z-50  fixed w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href = "/" className="  flex  gap-1 item-center ">
        <Image
          src="./icons/logo.svg"
          height={32}
          width={32}
          alt="Room/Zoom"
        />
        <p className="max-sm:hidden text-white font-extrabold text-[26px]">Room</p>
      </Link>
      <div className="flex gap-4">
      <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNavigation/>
      </div>
    </nav>
  );
};
