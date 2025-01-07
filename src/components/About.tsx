import Image from "next/image";
import React from "react";
import book from "@/assets/book.png";
import solving from "@/assets/solving.png";
import exper from "@/assets/exper.png";
import skills from "@/assets/pc.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-ping animate-gradient-xy" />
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg text-white/70 mt-2">
                I hold a Bachelor's degree in Computer Science from the
                University of Helwan and I am focusing on technologies like
                React, Next.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-ping animate-gradient-xy" />
          <div className="flex flex-row p-6">
            <Image src={solving} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem-Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I approach challenges with a logical and systematic mindset
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-ping animate-gradient-xy" />
          <div className="flex flex-row p-6">
            <Image src={exper} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-lg text-white/70 mt-2">
                I have a diverse portfolio of projects that demonstrate my
                expertise in web development
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-ping animate-gradient-xy" />
          <div className="flex flex-row p-6">
            <Image src={skills} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-lg text-white/70 mt-2">
                As a Frontend Developer, I have expertise in React, Next.js, and
                Tailwind CSS. My experience in these technologies enables me to
                create responsive and visually appealing user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
