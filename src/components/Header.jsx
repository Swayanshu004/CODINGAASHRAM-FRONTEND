"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-neutral-950 text-white flex items-center justify-between py-4 px-10">
      <Link href="/">
        <div className="text-2xl md:text-4xl font-bold">
          coding<span className="text-[#ff4d00]">आश्रम</span>
        </div>
      </Link>
      <div className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-full flex items-center justify-center">
        
      </div>
    </header>
  );
};

export default Header;