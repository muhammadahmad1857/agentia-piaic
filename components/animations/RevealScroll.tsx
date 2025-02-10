"use client";
import React from "react";
import { motion } from "framer-motion";
const RevealScroll = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
    
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealScroll;
