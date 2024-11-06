"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div
        className=" text-white/70 py-8 max-w-[1000px] bg-black mx-auto border-t p-3 border-gray-700
    pt-4 flex justify-between items-center"
      >
        <h1>Anurag Verma</h1>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/AnuragKrVerma"
            className="hover:text-grey-300 flex items-center space-x-2"
            target="_blank"
          >
            <FaGithub size={24} />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anurag0verma/"
            className="hover:text-grey-300 flex items-center space-x-2"
            target="_blank"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
