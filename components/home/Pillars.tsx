"use client";
import React from "react";
import RevealScroll from "../animations/RevealScroll";
import BentroGrids from "../common/BentroGrids";
import ScrollColorText from "../common/ScrollColorText";

const Pillars = () => {
  return (
    <RevealScroll>
      <div id="pillars" className="mt-10  py-4 md:py-8">
        {/* <h1 className="heading text-4xl">The Pillars of Agentia</h1>
        <p className="para mb-10 px-0 ">
          Agent-Centric Infrastructure, Dynamic Communication, Self-Improving
          Systems, and Meta-Agent Governance.
        </p> */}
        <ScrollColorText
          heading="The Pillars of Agentia"
          description="Agent-Centric Infrastructure, Dynamic Communication, Self-Improving
          Systems, and Meta-Agent Governance."
          showDescription
        />
        <BentroGrids />
      </div>
    </RevealScroll>
  );
};

export default Pillars;
