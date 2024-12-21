"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 text-[#ff4d00] flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden px-20 py-5">
      <div className="flex items-center justify-center gap-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ff4d00] transition-colors duration-300"
        >
          <FaGithub className="h-8 w-8" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ff4d00] transition-colors duration-300"
        >
          <FaLinkedin className="h-8 w-8" />
        </a>
      </div>
      <div className="text-center text-xs md:text-lg  py-2 md:py-0 text-neutral-400">
        &copy; a product by <span className="text-white font-semibold">coding<span className="text-[#ff4d00]">आश्रम</span></span> community
      </div>
    </footer>
  );
};

export default Footer;
