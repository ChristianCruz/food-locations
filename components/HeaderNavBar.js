"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function HeaderNavBar() {
  const { data: session } = useSession();
  return (
    <div className="flex bg-slate-300 items-center p-2 gap-10">
      <div className="flex gap-5 items-center font-medium uppercase text-sm">
        <Image src="/logo.svg" alt="logo" width={65} height={65} />
        <p>Home</p>
        <p>Favorite</p>
      </div>
      {/* SEARCH */}
      <div className="flex bg-gray-100 p-2 rounded md:w-[50%] lg:w-[25%] gap-2 md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>
      {/* USER PROFILE PIC */}
      <div className="absolute hidden md:block md:right-[15px]">
        {session?.user ? (
          <Image
            src={session.user.image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full outline outline-2 outline-black"
          />
        ) : null}
      </div>
    </div>
  );
}
export default HeaderNavBar;
