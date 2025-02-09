"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";
import Button from "./Button";

const Navbar = () => {
  const links = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Pillars",
      href: "#pillars",
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
      <div className="flex fixed  h-[80px] z-[500] top-0 left-0 right-0 backdrop-blur-lg bg-black/50 justify-between px-4 py-2 items-center">
        <Logo slideText />
        <div className="md:flex hidden gap-6 ">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white group">
              <div className="relative overflow-hidden">
                {/* The default text */}
                <p className="transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {link.label}
                </p>
                {/* The duplicate text that slides in */}
                <p className="absolute top-7 left-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4  ">
          <Link href={"#cta"}>
            <Button variant="secondary">Join Beta</Button>
          </Link>

          <button className="md:hidden block">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={32} />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isOpen} links={links} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
