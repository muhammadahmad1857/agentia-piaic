"use client";
import React from "react";
import BlurText from "@/components/common/TextBlur";
import Hyperspeed from "./HyperSpeed";
import Button from "../common/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 px-4 min-h-screen text-white">
      <div className="absolute top-[30%] w-full flex flex-col items-center justify-center z-50">
        <BlurText
          text="Agentia World"
          delay={200}
          animateBy="words"
          direction="top"
          className="heading text-center"
        />
        <BlurText
          text="A world where AI agents work, think and evolve together."
          delay={200}
          animateBy="words"
          direction="top"
          className="para text-center px-2 "
        />
        <div className="flex gap-4 sm:gap-10 mt-8 sm:flex-row flex-col">
          <Link href={"#cta"}>
            <Button>Join Beta</Button>
          </Link>
          <Button className="border-black-theme capitalize">
            Watch the keynote
          </Button>
        </div>
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
      />
    </div>
  );
};

export default Hero;
