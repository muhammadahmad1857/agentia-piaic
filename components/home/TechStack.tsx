"use client";
import React from "react";
import RevealScroll from "../animations/RevealScroll";
import InfiniteMenu from "./tech-menu";
import { FaGithub, FaPython, FaReact } from "react-icons/fa";

const TechStack = () => {
  const items = [
    {
      icon: FaGithub,
      link: "https://www.langchain.com/langgraph",
      title: "Langraph",
      description: "Visualizes and manages language models.",
    },
    {
      icon: FaGithub,
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
      icon: FaReact,
      link: "https://nextjs.org",
      title: "Next.js",
      description: "React framework for hybrid rendering.",
    },
    {
      icon: FaReact,
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
      icon: FaGithub,
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
    <RevealScroll>
      <div id="tech" className=" p-4 md:p-8">
        <h1 className="heading text-4xl">Powered by Next-Gen tech</h1>
        <p className="para mb-10 px-0">
          Agentic Frameworks, Knowledge Graphs, Decenteralized Ledgers, NLP-
          Centric Protocols, and simulated societies driven innovation.{" "}
        </p>
        <InfiniteMenu items={items} />
      </div>
    </RevealScroll>
  );
};

export default TechStack;
