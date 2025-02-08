"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Label,LabelInputContainer } from "../ui/label";
import { Input } from "../ui/input";
const CTA = () => {
  return (
    <div id="cta">
      <LampContainer >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Join Waitlist
        </motion.h1>
         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="user@example.com" type="email" />
          </LabelInputContainer>
          </div>
      </LampContainer>
    </div>
  );
};

export default CTA;
