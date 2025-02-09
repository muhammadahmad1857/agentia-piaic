/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * DotAlongPath
 *
 * This component animates a dot along a given SVG path. It uses a temporary
 * SVG path element to determine the total length and then, via requestAnimationFrame,
 * continuously updates the dot’s position (using getPointAtLength) based on elapsed time.
 *
 * Props:
 * - d: the SVG path data string.
 * - delay: initial time offset (in seconds).
 * - duration: time (in seconds) for one full cycle.
 * - r: circle radius.
 * - fill: dot color.
 */
function DotAlongPath({ d, delay = 0, duration = 3, r = 5, fill = "white" }:any) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tempPath.setAttribute("d", d);
    const totalLength = tempPath.getTotalLength();

    let animationFrameId:any;
    const startTime = performance.now();

    const update = (now:any) => {
      const elapsed = (now - startTime) / 1000; // seconds elapsed
      const progress = ((elapsed + delay) % duration) / duration; // cycles 0..1
      const pt = tempPath.getPointAtLength(progress * totalLength);
      setPoint({ x: pt.x, y: pt.y });
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [d, delay, duration]);

  return <circle cx={point.x} cy={point.y} r={r} fill={fill} />;
}

export const AnimatedLayout = () => {
  // Define a single connecting path for horizontal mode:
  // The path starts at x = 320 (roughly the right inner border of the left box)
  // and ends at x = 660 (the left inner border of the right box) at y = 150.
  const horizontalPath = { d: "M320,150 C420,140 580,140 660,150", delay: 0 };

  // For vertical mode, define a path that stretches from near the bottom of the top box
  // to near the top of the bottom box. The tall viewBox will let it expand as needed.
  const verticalPath = { d: "M150,320 C150,500 150,700 150,880", delay: 0 };

  const animationDuration = 3; // seconds for one full cycle

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main container:
          - On md and above, boxes are arranged side by side.
          - On smaller screens, boxes stack vertically.
          Both boxes have equal size.
      */}
      <div className="relative w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between z-10 space-y-4 md:space-y-0 md:space-x-4">
        {/* Agentia Box */}
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-white/10 border border-white/30 backdrop-blur-md rounded-xl flex items-center justify-center p-4">
            <span className="text-white text-3xl font-bold">Agentia</span>
          </div>
        </div>
        {/* Layered Box */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            {/* Animated inner borders for an attractive effect */}
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-white opacity-20 rounded-xl"
                animate={{ scale: [1, 1.3], opacity: [0.2, 0.1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
            {/* A static outer border for depth */}
            <div className="absolute inset-0 border-2 border-white opacity-40 rounded-xl"></div>
            {/* Centered Cityscape SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CityscapeSVG />
            </div>
          </div>
        </div>
      </div>

      {/* --- Horizontal Connecting Line (for screens md and above) --- */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <motion.path
          d={horizontalPath.d}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: horizontalPath.delay }}
        />
        <DotAlongPath
          d={horizontalPath.d}
          delay={horizontalPath.delay}
          duration={animationDuration}
          r={5}
          fill="white"
        />
      </svg>

      {/* --- Vertical Connecting Line (for screens below md) --- */}
      <svg
        className="block md:hidden absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d={verticalPath.d}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: verticalPath.delay }}
        />
        <DotAlongPath
          d={verticalPath.d}
          delay={verticalPath.delay}
          duration={animationDuration}
          r={5}
          fill="white"
        />
      </svg>
    </div>
  );
};

function CityscapeSVG() {
  return (
    <svg
      width="80%"
      height="80%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="50" width="10" height="50" fill="white" />
      <rect x="25" y="30" width="15" height="70" fill="white" />
      <rect x="45" y="40" width="12" height="60" fill="white" />
      <rect x="62" y="20" width="18" height="80" fill="white" />
      <rect x="85" y="35" width="10" height="65" fill="white" />
    </svg>
  );
}

export default AnimatedLayout;

