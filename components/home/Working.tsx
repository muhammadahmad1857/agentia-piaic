import React from "react";
import RevealScroll from "../animations/RevealScroll";
import WorldMap from "../ui/world-map";
import ScrollColorText from "../common/ScrollColorText";

const Working = () => {
  return (
    <RevealScroll>
      <div id="works" className="py-4 md:py-8">
        {/* <h1 className="heading text-4xl">Agents that talk & discover </h1>
        <p className="para mb-10 px-0 ">
          Agent-Centric Infrastructure, Dynamic Communication, Self-Improving
          Systems, and Meta-Agent Governance.
        </p> */}
        <ScrollColorText
          heading="Agents that talk & discover"
          description="  Agent-Centric Infrastructure, Dynamic Communication, Self-Improving
          Systems, and Meta-Agent Governance."
          showDescription
        />
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Virtual Assistant ",
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: "AI Customer Support",
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: "AI Finance & Banking",
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: "AI Security & Surveillance",
              },
            },
          ]}
          lineColor="#ffff"
        />
      </div>
    </RevealScroll>
  );
};

export default Working;
