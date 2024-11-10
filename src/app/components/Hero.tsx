"use client";

import { motion } from "framer-motion";
import cursor from "../assets/icon1.png";
import lighting from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black ">
      <div
        className="py-24  relative overflow-clip"
        // style={{
        //   background:
        //     "linear-gradient(to_bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)",
        // }}
      >
        <div
          className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
        ></div>

        <div className="relative">
          <div className="font-bold text-center md:p-0 p-5">
            <h1 className="text-7xl text-[#98B4CE]">Hi, My Name is</h1>
            <h1 className="text-8xl text-[#E48A57]">Anurag Verma</h1>
          </div>

          <motion.div
            className=" sm:left-10 sm:top-96 md:left-10 md:top-64 absolute lg:left-[180px] lg:top-[200px]"
            drag
          >
            <Image
              src={cursor}
              alt="Cursor"
              className="lg:w-[190px] lg:h-[190px] md:w-[150px] md:h-[150px] w-[120px] h-[120px] "
              draggable="false"
            />
          </motion.div>
          <motion.div
            className="hidden md:block lg:block md:-right-3 md:-top-12 absolute lg:right-[275px] lg:-top-[50px]"
            drag
          >
            <Image
              src={lighting}
              alt="Lighting"
              className="lg:w-[120px] lg:h-auto md:w-[100px] md:h-auto w-[80px] h-auto "
              draggable="false"
            />
          </motion.div>
          <p className="text-center text-xl max-w-[500px] mx-auto p-5 md:p-0 mt-5 text-white/80">
            I am a recent computer application graduate with a passion for
            backend development and crafting scalable software solutions.
          </p>
          <Image
            src={profilepic}
            alt="Profile Picture"
            className="h-auto md:max-w-md lg:w-auto xs:max-w-xs mx-auto"
          ></Image>

          <div className="flex justify-center items-center mt-20">
            <a
              href="https://docs.google.com/document/d/1f-0HHQSd4eFbeCfzOlVb76yRFSBWybo5OtfxAXfB-Es/edit?usp=sharing"
              className="text-white font-bold text-xl bg-orange-500 px-8 py-4 rounded-lg hover:bg-orange-400"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
