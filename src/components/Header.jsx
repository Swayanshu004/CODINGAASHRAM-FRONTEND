"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-neutral-200 bg-opacity-25 text-white flex items-center justify-between rounded-3xl my-4 mx-10 py-4 px-7">
      <Link href="/">
        <div className="text-2xl md:text-4xl font-bold">
          coding<span className="text-[#ff4d00]">आश्रम</span>
        </div>
      </Link>
      <div className="h-6 w-6 md:h-10 md:w-10 bg-white rounded-full flex items-center justify-center">
        
      </div>
    </header>
  );
};

export default Header;