"use client";

import React from "react";
import { OrbitingCircles } from "@/components/ui/orbitingCircles";

// Icons from react-icons
import {
  FaGithub,
  FaReact,
  FaPython,
  FaUsers,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiNextdotjs, SiFastapi } from "react-icons/si";

export function OrbitLogos() {
  const items = [
    {
      icon: FaProjectDiagram, // e.g., for Langraph
      title: "Langraph",
      description: "Visualizes and manages language models.",
    },
    {
      icon: FaLaptopCode, // or any chain-like icon for LangChain
      title: "LangChain",
      description: "Framework for language model apps.",
    },
    {
      icon: FaReact,
      title: "React",
      description: "Interactive UI JavaScript library.",
    },
    {
      icon: SiNextdotjs,
      title: "Next.js",
      description: "React framework for hybrid rendering.",
    },
    {
      icon: FaUsers, // or any relevant icon for "Crew AI"
      title: "Crew AI",
      description: "AI-powered team collaboration automation.",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "Collaborative version control platform.",
    },
    {
      icon: SiFastapi,
      title: "FastAPI",
      description: "High-performance Python API framework.",
    },
    {
      icon: FaPython,
      title: "Python",
      description: "Versatile, high-level programming language.",
    },
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border  p-4 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-100 to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent ">
        Tech
      </span>

      <OrbitingCircles iconSize={60} radius={140} speed={1.5} className="mt-4">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group relative flex items-center justify-center"
            >
              {/* Icon itself */}
              <IconComponent className="h-8 w-8 text-current" />

              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute top-[120%] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white shadow group-hover:block">
                {item.title}
              </span>
            </div>
          );
        })}
      </OrbitingCircles>
    </div>
  );
}
