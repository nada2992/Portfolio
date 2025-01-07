"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cursor from "@/assets/software.png";
import storm from "@/assets/storm.png";
import developer from "@/assets/developer.webp";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Nada Hesham</h1>
        </div>

        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px]"
          drag
        >
          <Image
            src={cursor}
            alt="cursor"
            width={190}
            height={190}
            className=""
            draggable={false}
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px]"
          drag
        >
          <Image
            src={storm}
            alt="cursor"
            width={190}
            height={190}
            className=""
            draggable={false}
          />
        </motion.div>

        <p className="text-center text-[#98B4CE] max-w-[600px] mx-auto text-xl font-bold">
          I am a Frontend Developer focused on creating responsive and
          user-friendly web applications.
        </p>

        <Image
          src={developer}
          alt="developer"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
