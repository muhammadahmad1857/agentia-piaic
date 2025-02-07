"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const links = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Pillars",
      href: "#core-pillars",
    },
    {
      label: "how it works",
      href: "#works",
    },
    {
      label: "Technologies",
      href: "#tech",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="flex sticky h-[80px] z-10 top-0 left-0 backdrop-blur-lg bg-black/50 justify-between px-4 py-2 items-center">
        {/* <button className="group relative outline-0 bg-sky-200 [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)] [--sz-text:calc(var(--sz-btn)-var(--gen-sz))] h-[var(--sz-btn)] w-[var(--sz-btn)] border border-solid border-transparent rounded-xl flex items-center justify-center aspect-square cursor-pointer transition-transform duration-200 active:scale-[0.95] bg-[linear-gradient(45deg,#efad21,#ffd60f)] [box-shadow:#3c40434d_0_1px_2px_0,#3c404326_0_2px_6px_2px,#0000004d_0_30px_60px_-30px,#34343459_0_-2px_6px_0_inset]">
        <svg
          className="animate-pulse absolute z-10 overflow-visible transition-all duration-500 text-[#ffea50] group-hover:text-white top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)] h-[var(--gen-sz)] w-[var(--gen-sz)] group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)] group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
          stroke="none"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          ></path>
        </svg>
        <span className="[font-size:var(--sz-text)] font-extrabold leading-none text-white transition-all duration-200 group-hover:opacity-0">
          AI
        </span>
      </button> */}
        {/* <Link
          href={"#"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 group"
        >
          <button
            type="button"
            className="relative outline-0 bg-[linear-gradient(45deg,#efad21,#ffd60f)]
      [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)]
      [--sz-text:calc(var(--sz-btn)-var(--gen-sz))] h-[var(--sz-btn)] w-[var(--sz-btn)]
      border border-solid border-transparent rounded-xl flex items-center justify-center
      aspect-square cursor-pointer transition-transform duration-200 active:scale-[0.95]
      [box-shadow:#3c40434d_0_1px_2px_0,#3c404326_0_2px_6px_2px,#0000004d_0_30px_60px_-30px,#34343459_0_-2px_6px_0_inset]"
          >
            <svg
              className="animate-pulse absolute z-10 overflow-visible transition-all duration-500 text-[#ffea50]
        group-hover:text-white top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)]
        h-[var(--gen-sz)] w-[var(--gen-sz)]
        group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)]
        group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
              stroke="none"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              />
            </svg>

            <span className="z-20 [font-size:var(--sz-text)] font-extrabold leading-none text-white transition-all duration-200 group-hover:opacity-0">
              AI
            </span>
          </button>

          <span
            className="text-white font-extrabold transition-all duration-500 transform
      translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          >
            Agentia
          </span>
        </Link> */}
        <Link
          href="#"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 group"
        >
          <button
            type="button"
            className="relative outline-0 
      bg-[linear-gradient(45deg,#f4faf2,#ffffff)]
      [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)]
      [--sz-text:calc(var(--sz-btn)-var(--gen-sz))]
      h-[var(--sz-btn)] w-[var(--sz-btn)]
      border border-solid border-transparent rounded-xl 
      flex items-center justify-center aspect-square cursor-pointer 
      scale-[0.75]
      transition-transform duration-200 group-active:scale-[0.70]
      [box-shadow:#3c40434d_0_1px_2px_0,#3c404326_0_2px_6px_2px,#0000004d_0_30px_60px_-30px,#34343459_0_-2px_6px_0_inset]"
          >
            <svg
              className="group-hover:animate-pulse absolute z-10 overflow-visible 
        transition-all duration-500 text-black-theme
        group-hover:text-black
        top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)]
        h-[var(--gen-sz)] w-[var(--gen-sz)]
        group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)]
        group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
              stroke="none"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              />
            </svg>

            <span
              className="z-20 [font-size:var(--sz-text)] font-extrabold leading-none 
        text-black-theme transition-all duration-200 group-hover:opacity-0"
            >
              AI
            </span>
          </button>

          <span
            className="text-white-theme font-extrabold transition-all duration-500 transform
      translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          >
            Agentia
          </span>
        </Link>

        <div className="md:flex hidden gap-4 ">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white  group">
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {link.label}
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href={"/#cta"}
          className="relative flex items-center rounded-xl px-6 py-3 overflow-hidden font-medium transition-all bg-green  group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-dark rounded-xl group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-dark rounded-xl group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-light rounded-xl group-hover:translate-x-0"></span>
          <span className="relative w-full font-bold text-left text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-text-gray-700">
            Get Started
          </span>
        </Link>
      </div>
      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
