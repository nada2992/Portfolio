"use client";
import React from "react";
import project1 from "@/assets/project1.png";
import { motion } from "framer-motion";
import Image from "next/image";
import project2 from "@/assets/food-wegon.png";
import imdb from "@/assets/movie.jpeg";
import brainwave from "@/assets/brain.webp";

const projects = [
  {
    title: "BEGIN - A Modern Landing Page",
    desc: "This is a fully responsive and interactive landing page built using Next.js, React, and TailwindCSS. The design focuses on a sleek dark theme with vibrant highlights to enhance visual appeal and user engagement.",
    devStack: "Next.js, React, and TailwindCSS",
    link: "https://begin-fawn.vercel.app/",
    git: "https://github.com/nada2992/begin",
    src: project1,
  },
  {
    title: "FoodWagon - Online Food Delivery Platform",
    desc: "Designed and developed a modern and responsive user interface for an online food ordering platform. The project showcases a visually appealing, user-friendly experience for customers to explore and order meals with ease.",
    devStack: " React,TypeScript and TailwindCSS",
    link: "https://food-wegon.vercel.app/",
    git: "https://github.com/nada2992/food-wegon",
    src: project2,
  },
  {
    title: "Movie App (IMDB Clone)",
    desc: "Developed a modern movie application inspired by the IMDB platform using React.js, Next.js, and TypeScript. The app features an interactive and responsive user interface that allows users to browse trending and top-rated movies, search for films by keywords, and view detailed descriptions. The project incorporates API integration for fetching movie data, dynamic routing for individual movie pages, and state management for handling user interactions. Tailored UI/UX design using Tailwind CSS ensures a visually appealing and user-friendly experience.",
    devStack: " React,TypeScript and TailwindCSS",
    link: "https://new-movie-app-wine.vercel.app/",
    git: "https://github.com/nada2992/new-movie-app",
    src: imdb,
  },
  {
    title: "Brainwave App",
    desc: "A dynamic web application built using Vite and React, showcasing cutting-edge frontend development techniques. The platform demonstrates a focus on high-performance rendering and modern design principles. It emphasizes seamless user experience, leveraging the latest web technologies for responsive and interactive features. Hosted on Vercel, the app reflects proficiency in deploying scalable, production-ready applications.",
    devStack: "Vite, React, TypeScript, Tailwind CSS",
    link: "https://brainwave-sigma-swart.vercel.app/",
    git: "https://github.com/NA-MO/Brainwave",
    src: brainwave,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400"> Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-auto object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
