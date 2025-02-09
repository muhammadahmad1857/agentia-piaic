"use client";
import React from "react";
import RevealScroll from "../animations/RevealScroll";
import { FaCheckCircle, } from "react-icons/fa";
import Button from "../common/Button";
import Link from "next/link";
import {OrbitLogos} from "./OrbitLogos"
const TechStack = () => {
 
  const benefits = [
    "Effortless integration",
    "Intelligent automation",
    "Robust security",
  ];

  return (
    <RevealScroll>
      <div id="tech" className=" p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-technor font-semibold text-gray-200 leading-tight">
                  Technologies we use to empower your bussiness
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-4">
                      <FaCheckCircle color="white"/>
                      <span className="text-xl font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href={"#cta"}>
                  <Button className="mt-16">Join Beta</Button>
                </Link>
              </div>
              <OrbitLogos/>
      </div>
      </div>
    </RevealScroll>
  );
};

export default TechStack;
