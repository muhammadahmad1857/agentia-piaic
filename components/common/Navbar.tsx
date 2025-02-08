"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";

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
      <div className="flex sticky h-[80px] z-50 top-0 left-0 backdrop-blur-lg bg-black/50 justify-between px-4 py-2 items-center">
        <Logo slideText />
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
        <div className="flex gap-4  ">
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
              Join Beta
            </span>
          </Link>
          <button className="md:hidden block">
            <Hamburger
              toggled={isOpen}
             
              toggle={setIsOpen}
              size={32}
            />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isOpen} links={links} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
