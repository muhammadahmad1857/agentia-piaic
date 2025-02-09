// "use client";

// import { useRef, useEffect } from "react";
// import {
//   motion,
//   useAnimation,
//   useMotionValue,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaBrain,
//   FaNetworkWired,
//   FaHandshake,
//   FaChartLine,
// } from "react-icons/fa";
// import Waves from "../home/Waves";

// // Define the Pillar type
// interface Pillar {
//   title: string;
//   icon: React.ComponentType<{ className?: string }>;
//   description: string;
// }

// // Define the props for PillarContent
// interface PillarContentProps {
//   pillar: Pillar;
// }

// // Define the props for AnimatedBorder
// interface AnimatedBorderProps {
//   smoothX: MotionValue<number>;
//   smoothY: MotionValue<number>;
// }

// const pillars: Pillar[] = [
//   {
//     title: "Agent-Centric Infrastructure",
//     icon: FaNetworkWired,
//     description: "Every System is an Intelligent Agent",
//   },
//   {
//     title: "Dynamic Communication",
//     icon: FaHandshake,
//     description: "Beyond REST APIs: Intelligent Dialogues",
//   },
//   {
//     title: "Self-Improving Systems",
//     icon: FaChartLine,
//     description: "AI That Learns and Evolves",
//   },
//   {
//     title: "Meta-Agent Governance",
//     icon: FaBrain,
//     description: "Orchestrating AI Ecosystems",
//   },
// ];

// const MotionCard = motion.div;

// export default function BentoGrid() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
//   const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const container = containerRef.current;
//       if (container) {
//         const rect = container.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         mouseX.set(x);
//         mouseY.set(y);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (
//     <div className="min-h-screen w-full ">
//       <div
//         ref={containerRef}
//         className="relative border border-white/20 p-4 md:p-6 rounded-xl"
//       >
//         <div
//           ref={ref}
//           className="grid grid-cols-4 gap-4 md:gap-6"
//         >
//           <MotionCard
//             className="col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//           >
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <PillarContent pillar={pillars[0]} />
//           </MotionCard>

//           <MotionCard
//             className="col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.3 }}
//             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//           >
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <PillarContent pillar={pillars[1]} />
//           </MotionCard>

//           <MotionCard
//             className="row-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4 }}
//             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//           >
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <PillarContent pillar={pillars[2]} />
//           </MotionCard>

//           <motion.div
//             className="col-span-2 rounded-xl  bg-white/10 border border-white/20  flex flex-col items-center justify-center gap-2 md:gap-4 overflow-hidden relative"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ delay: 0.5 }}
//           >
//             <div className="absolute inset-0 ">
//               <Waves
//                 lineColor="#fff"
//                 backgroundColor="rgba(255, 255, 255, 0.2)"
//                 waveSpeedX={0.02}
//                 waveSpeedY={0.01}
//                 waveAmpX={40}
//                 waveAmpY={20}
//                 friction={0.9}
//                 tension={0.01}
//                 maxCursorMove={120}
//                 xGap={12}
//                 yGap={36}
//               />
//             </div>
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <motion.div
//               className="text-center backdrop-blur-[2px] w-full h-full  p-4 md:p-6 "
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
//                 Core Pillars
//               </h2>
//               <p className="text-sm md:text-base text-blue-200/80">
//                 The foundation of our ecosystem
//               </p>
//             </motion.div>
//           </motion.div>

//           <MotionCard
//             className="row-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.7 }}
//             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//           >
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <PillarContent pillar={pillars[3]} />
//           </MotionCard>

//           <MotionCard
//             className="col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.8 }}
//             whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//           >
//             <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
//             <div className="text-center">
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
//                 Explore Agentia
//               </h3>
//               <p className="text-xs md:text-sm text-blue-200/80">
//                 Discover how our pillars work together to create a powerful AI
//                 ecosystem
//               </p>
//             </div>
//           </MotionCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PillarContent({ pillar }: PillarContentProps) {
//   const Icon = pillar.icon;
//   return (
//     <>
//       <motion.div
//         className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
//         <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
//       </motion.div>
//       <h3 className="text-base md:text-lg font-semibold text-center text-white">
//         {pillar.title}
//       </h3>
//       <p className="text-xs md:text-sm text-blue-200/80 text-center">
//         {pillar.description}
//       </p>
//     </>
//   );
// }

// function AnimatedBorder({ smoothX, smoothY }: AnimatedBorderProps) {
//   const borderRef = useRef<HTMLDivElement>(null);
//   const animate = useAnimation();

//   useEffect(() => {
//     let timeoutId: ReturnType<typeof setTimeout>;

//     const animateBorder = () => {
//       if (borderRef.current) {
//         const rect = borderRef.current.getBoundingClientRect();
//         const x = smoothX.get() - rect.left;
//         const y = smoothY.get() - rect.top;

//         animate.start({
//           background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`,
//         });
//       }
//       timeoutId = setTimeout(animateBorder, 1000 / 60); // 60 FPS
//     };

//     animateBorder();

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [smoothX, smoothY, animate]);

//   return (
//     <motion.div
//       ref={borderRef}
//       className="absolute inset-0 z-10 pointer-events-none"
//       animate={animate}
//     />
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBrain,
  FaNetworkWired,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import Waves from "../home/Waves";

// Define the Pillar type
interface Pillar {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

// Define the props for PillarContent
interface PillarContentProps {
  pillar: Pillar;
}

// Define the props for AnimatedBorder
interface AnimatedBorderProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

const pillars: Pillar[] = [
  {
    title: "Agent-Centric Infrastructure",
    icon: FaNetworkWired,
    description: "Every System is an Intelligent Agent",
  },
  {
    title: "Dynamic Communication",
    icon: FaHandshake,
    description: "Beyond REST APIs: Intelligent Dialogues",
  },
  {
    title: "Self-Improving Systems",
    icon: FaChartLine,
    description: "AI That Learns and Evolves",
  },
  {
    title: "Meta-Agent Governance",
    icon: FaBrain,
    description: "Orchestrating AI Ecosystems",
  },
];

const MotionCard = motion.div;

export default function BentoGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen w-full">
      <div
        ref={containerRef}
        className="relative border border-white/20 p-4 sm:p-6 rounded-xl"
      >
        {/* Use a one-column grid by default, and switch to a 4‑column grid on sm and above */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Card 1 */}
          <MotionCard
            className="col-span-1 sm:col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <PillarContent pillar={pillars[0]} />
          </MotionCard>

          {/* Card 2 */}
          <MotionCard
            className="col-span-1 sm:col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <PillarContent pillar={pillars[1]} />
          </MotionCard>

          {/* Card 3 */}
          <MotionCard
            className="col-span-1 sm:row-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <PillarContent pillar={pillars[2]} />
          </MotionCard>

          {/* Card 4 – Core Pillars with animated Waves */}
          <motion.div
            className="col-span-1 sm:col-span-2 rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-2 sm:gap-4 overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-0">
              <Waves
                lineColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.2)"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
            </div>
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <motion.div
              className="text-center backdrop-blur-[2px] w-full h-full p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
                Core Pillars
              </h2>
              <p className="text-sm sm:text-base text-blue-200/80">
                The foundation of our ecosystem
              </p>
            </motion.div>
          </motion.div>

          {/* Card 5 */}
          <MotionCard
            className="col-span-1 sm:row-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <PillarContent pillar={pillars[3]} />
          </MotionCard>

          {/* Card 6 – Explore Agentia */}
          <MotionCard
            className="col-span-1 sm:col-span-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:bg-white/10 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <AnimatedBorder smoothX={smoothX} smoothY={smoothY} />
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Explore Agentia
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/80">
                Discover how our pillars work together to create a powerful AI
                ecosystem
              </p>
            </div>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}

function PillarContent({ pillar }: PillarContentProps) {
  const Icon = pillar.icon;
  return (
    <>
      <motion.div
        className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
      </motion.div>
      <h3 className="text-base sm:text-lg font-semibold text-center text-white">
        {pillar.title}
      </h3>
      <p className="text-xs sm:text-sm text-blue-200/80 text-center">
        {pillar.description}
      </p>
    </>
  );
}

function AnimatedBorder({ smoothX, smoothY }: AnimatedBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null);
  const animate = useAnimation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const animateBorder = () => {
      if (borderRef.current) {
        const rect = borderRef.current.getBoundingClientRect();
        const x = smoothX.get() - rect.left;
        const y = smoothY.get() - rect.top;

        animate.start({
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`,
        });
      }
      timeoutId = setTimeout(animateBorder, 1000 / 60); // 60 FPS
    };

    animateBorder();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [smoothX, smoothY, animate]);

  return (
    <motion.div
      ref={borderRef}
      className="absolute inset-0 z-10 pointer-events-none"
      animate={animate}
    />
  );
}
