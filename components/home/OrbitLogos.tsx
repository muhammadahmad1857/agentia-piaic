"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaGithub, FaPython, FaUsers } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiLangchain } from "react-icons/si";
import { OrbitingCircles } from "../ui/orbitingCircles";

function LangraphIcon() {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full text-white font-bold">
      LG
    </div>
  );
}
function OrbitingCircleItem({
  link,
  title,
  children,
}: {
  link: string;
  title: string;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="absolute flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Next.js Link */}
      <Link href={link}>{children}</Link>
      {/* Tooltip with Framer Motion */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-10"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OrbitLogos() {
  const items = [
    {
      icon: LangraphIcon,
      link: "https://www.langchain.com/langgraph",
      title: "Langraph",
      description: "Visualizes and manages language models.",
    },
    {
      icon: SiLangchain,
      link: "https://langchain.com",
      title: "LangChain",
      description: "Framework for language model apps.",
    },
    {
      icon: FaReact,
      link: "https://react.dev",
      title: "React",
      description: "Interactive UI JavaScript library.",
    },
    {
      icon: SiNextdotjs,
      link: "https://nextjs.org",
      title: "Next.js",
      description: "React framework for hybrid rendering.",
    },
    {
      icon: FaUsers,
      link: "https://crewai.com",
      title: "Crew AI",
      description: "AI-powered team collaboration automation.",
    },
    {
      icon: FaGithub,
      link: "https://github.com",
      title: "GitHub",
      description: "Collaborative version control platform.",
    },
    {
      icon: SiFastapi,
      link: "https://fastapi.tiangolo.com",
      title: "FastAPI",
      description: "High-performance Python API framework.",
    },
    {
      icon: FaPython,
      link: "https://www.python.org",
      title: "Python",
      description: "Versatile, high-level programming language.",
    },
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-white md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-100 to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Tech
      </span>
      {/* First Orbiting Layer */}
      <div className="absolute inset-0">
        <OrbitingCircles iconSize={40}>
          {items.map((tech, index) => {
            const IconComp = tech.icon;
            return (
              <OrbitingCircleItem
                key={index}
                link={tech.link}
                title={tech.title}
              >
                <IconComp />
              </OrbitingCircleItem>
            );
          })}
        </OrbitingCircles>
      </div>

      {/* Second Orbiting Layer with reverse animation and smaller icons */}
      <div className="absolute inset-0">
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          {items.map((tech, index) => {
            const IconComp = tech.icon;
            return (
              <OrbitingCircleItem
                key={index}
                link={tech.link}
                title={tech.title}
              >
                <IconComp />
              </OrbitingCircleItem>
            );
          })}
        </OrbitingCircles>
      </div>
    </div>
  );
}
