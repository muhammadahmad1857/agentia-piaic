"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Label, LabelInputContainer } from "../ui/label";

const CTA = () => {
  const placeholders = [
    "Join the revolution in AI innovation with Agentia.",
    "How are AI agents reshaping our world?",
    "Discover the future of intelligent automation.",
    "What breakthrough will define the next era of AI?",
    "Explore the power of self-evolving AI agents.",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div id="cta" className="mt-2 sm:mt-10">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 text-white font-bold font-technor py-4 text-center text-4xl tracking-tight md:text-7xl"
          >
            Join Waitlist
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-md flex items-center space-x-2"
          >
            <LabelInputContainer className="flex-1">
              <Label htmlFor="email" className="font-bold text-white">
                Email
              </Label>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />{" "}
            </LabelInputContainer>
          </motion.div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default CTA;
