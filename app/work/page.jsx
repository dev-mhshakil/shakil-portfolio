"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Academix (LMS)",
    description:
      "Academix is a Learning Management System (LMS) designed to facilitate online education. It offers user authentication, role-based access, course management, enhancing the learning experience for administrators, teachers, and students.",
    stack: [
      { name: "React.js" },
      { name: "Tailwindcss" },
      { name: "Node.js" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://academix-client-two.vercel.app/",
    github: "https://github.com/dev-mhshakil/academix-client",
  },
  {
    num: "02",
    category: "fullstack",
    title: "BookHive",
    description:
      "BookHive is a RESTful API designed to manage a collection of books and users' reading lists. This API allows users to fetch book details, manage their reading lists, and handle user authentication efficiently.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://book-hive-delta.vercel.app/",
    github: "https://github.com/dev-mhshakil/book-hive",
  },
  // {
  //   num: "03",
  //   category: "frontend",
  //   title: "Project 3",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut facilis beatae atque neque, assumenda nostrum quam laborum repellat sapiente.",
  //   stack: [{ name: "Next.js" }, { name: "Tailwindcss" }],
  //   image: "/assets/work/thumb3.png",
  //   live: "https://github.com/dev-mhshakil",
  //   github: "https://github.com/dev-mhshakil",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project?.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-red-500 transition-all duration-500 capitalize">
                {project?.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project?.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project?.stack.map((item, index) => (
                  <li key={index} className="text-xl text-red-500">
                    {item.name}
                    {index !== project?.stack?.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* project buttons */}
              <div className="flex items-center gap-4">
                {project?.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-red-500 text-3xl group-hover:text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project?.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-red-500 text-3xl group-hover:text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project?.image}
                        alt={project?.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-red-500 hover:bg-red-500-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
