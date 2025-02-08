"use client";
import React from "react";
import BlurText from "@/components/common/TextBlur";
import Hyperspeed from "./HyperSpeed";


const Hero = () => {
  return (
    <div className="flex gap-4 text-white text-center min-h-[calc(100vh-300px)]  px-4 flex-col items-center justify-center">
      {/* <h1 className="sm:text-6xl text-4xl text-nowrap font-bold capitalize">
        
      </h1>
       */}
<div className="absolute z-50">
      <BlurText
        text="Agentia World"
        delay={200}
        animateBy="words"
        direction="top"
        className="sm:text-6xl text-4xl text-nowrap font-bold capitalize"
      />
      <BlurText
        text="A world where AI agents work, think and evolve together."
        delay={200}
        animateBy="words"
        direction="top"
        className="sm:text-2xl font-semibold"
      />
      </div>
<Hyperspeed
  effectOptions={{
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    },
  }}
/>;

    </div>
  );
};

export default Hero;
