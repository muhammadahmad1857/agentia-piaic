"use client";
import React from "react";
import RevealScroll from "../animations/RevealScroll";
import BentroGrids from "../common/BentroGrids";

const Pillars = () => {
  return (
    <RevealScroll>
      <div id="pillars" className="mt-10  p-4 md:p-8">
        <h1 className="heading text-4xl">The Pillars of Agentia</h1>
        <p className="para mb-10 px-0 ">
          Agent-Centric Infrastructure, Dynamic Communication, Self-Improving
          Systems, and Meta-Agent Governance.
        </p>
        <BentroGrids />
      </div>
    </RevealScroll>
  );
};

export default Pillars;
