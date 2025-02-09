"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLinksBar from "./SocialLinksBar";
import Logo from "./Logo";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Array of footer navigation links.
const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Blog", href: "/blog" },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className=" text-white overflow-hidden py-8 border-t border-gray-800"
    >
      <div className=" px-4 flex flex-col md:flex-row md:items-center justify-center gap-10 md:justify-between">
        {/* Left Section: Logo & Navigation Links */}
        <div className="flex  items-center justify-between gap-4">
          <Logo />
          <nav className="flex gap-4">
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white group">
                <div className="relative overflow-hidden">
                  {/* The default text */}
                  <p className="transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    {link.label}
                  </p>
                  {/* The duplicate text that slides in */}
                  <p className="absolute top-7 left-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    {link.label}
                  </p>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <SocialLinksBar />
      </div>
      <div className="w-full h-[1px] bg-white my-4"></div>{" "}
      <p className="text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
