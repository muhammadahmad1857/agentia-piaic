// // "use client";

// // import { useRef, useState } from "react";
// // import { motion } from "motion/react";
// // import DottedMap from "dotted-map";
// // import Image from "next/image";

// // interface MapProps {
// //   dots?: Array<{
// //     start: { lat: number; lng: number; label?: string,description:string };
// //     end: { lat: number; lng: number; label?: string ,description:string};
// //   }>;
// //   lineColor?: string;
// // }

// // export default function WorldMap({
// //   dots = [],
// //   lineColor = "#0ea5e9",
// // }: MapProps) {
// //   const svgRef = useRef<SVGSVGElement>(null);
// //   const map = new DottedMap({ height: 100, grid: "diagonal" });

// //   const [tooltip, setTooltip] = useState<{
// //     x: number;
// //     y: number;
// //     content: string;
// //   } | null>(null);

// //   const svgMap = map.getSVG({
// //     radius: 0.22,
// //     color: "#FFFFFF40",
// //     shape: "circle",
// //     backgroundColor: "black",
// //   });

// //   const projectPoint = (lat: number, lng: number) => {
// //     const x = (lng + 180) * (800 / 360);
// //     const y = (90 - lat) * (400 / 180);
// //     return { x, y };
// //   };

// //   const createCurvedPath = (
// //     start: { x: number; y: number },
// //     end: { x: number; y: number }
// //   ) => {
// //     const midX = (start.x + end.x) / 2;
// //     const midY = Math.min(start.y, end.y) - 50;
// //     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
// //   };

// //   return (
// //     <div className="w-full aspect-[2/1] bg-black  rounded-lg  relative font-sans">
// //       <Image
// //         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
// //         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
// //         alt="world map"
// //         height="495"
// //         width="1056"
// //         draggable={false}
// //       />
// //       <svg
// //         ref={svgRef}
// //         viewBox="0 0 800 400"
// //         className="w-full h-full absolute inset-0 pointer-events-none select-none"
// //       >
// //         {dots.map((dot, i) => {
// //           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
// //           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
// //           return (
// //             <g key={`path-group-${i}`}>
// //               <motion.path
// //                 d={createCurvedPath(startPoint, endPoint)}
// //                 fill="none"
// //                 stroke="url(#path-gradient)"
// //                 strokeWidth="1"
// //                 initial={{
// //                   pathLength: 0,
// //                 }}
// //                 animate={{
// //                   pathLength: 1,
// //                 }}
// //                 transition={{
// //                   duration: 1,
// //                   delay: 0.5 * i,
// //                   ease: "easeOut",
// //                 }}
// //                 key={`start-upper-${i}`}
// //               ></motion.path>
// //             </g>
// //           );
// //         })}

// //         <defs>
// //           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
// //             <stop offset="0%" stopColor="white" stopOpacity="0" />
// //             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
// //             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
// //             <stop offset="100%" stopColor="white" stopOpacity="0" />
// //           </linearGradient>
// //         </defs>

// //         {dots.map((dot, i) => (
// //           <g
// //             key={`points-group-${i}`}
// //             onMouseEnter={(e) =>
// //               setTooltip({
// //                 x: e.clientX,
// //                 y: e.clientY,
// //                 content: `<strong>${dot.start.label}</strong><br/>${dot.start.description}`,
// //               })
// //             }
// //             onMouseLeave={() => setTooltip(null)}
// //           >
// //             <g key={`start-${i}`}>
// //               <circle
// //                 cx={projectPoint(dot.start.lat, dot.start.lng).x}
// //                 cy={projectPoint(dot.start.lat, dot.start.lng).y}
// //                 r="2"
// //                 fill={lineColor}
// //               />
// //               <circle
// //                 cx={projectPoint(dot.start.lat, dot.start.lng).x}
// //                 cy={projectPoint(dot.start.lat, dot.start.lng).y}
// //                 r="2"
// //                 fill={lineColor}
// //                 opacity="0.5"
// //               >
// //                 <animate
// //                   attributeName="r"
// //                   from="2"
// //                   to="8"
// //                   dur="1.5s"
// //                   begin="0s"
// //                   repeatCount="indefinite"
// //                 />
// //                 <animate
// //                   attributeName="opacity"
// //                   from="0.5"
// //                   to="0"
// //                   dur="1.5s"
// //                   begin="0s"
// //                   repeatCount="indefinite"
// //                 />
// //               </circle>
// //             </g>
// //             <g key={`end-${i}`}>
// //               <circle
// //                 cx={projectPoint(dot.end.lat, dot.end.lng).x}
// //                 cy={projectPoint(dot.end.lat, dot.end.lng).y}
// //                 r="2"
// //                 fill={lineColor}
// //               />
// //               <circle
// //                 cx={projectPoint(dot.end.lat, dot.end.lng).x}
// //                 cy={projectPoint(dot.end.lat, dot.end.lng).y}
// //                 r="2"
// //                 fill={lineColor}
// //                 opacity="0.5"
// //               >
// //                 <animate
// //                   attributeName="r"
// //                   from="2"
// //                   to="8"
// //                   dur="1.5s"
// //                   begin="0s"
// //                   repeatCount="indefinite"
// //                 />
// //                 <animate
// //                   attributeName="opacity"
// //                   from="0.5"
// //                   to="0"
// //                   dur="1.5s"
// //                   begin="0s"
// //                   repeatCount="indefinite"
// //                 />
// //               </circle>
// //             </g>
// //           </g>
// //         ))}
// //       </svg>
// //       {tooltip && (
// //         <motion.div
// //           className="absolute bg-gray-900 text-white text-sm px-3 py-2 rounded-md shadow-lg"
// //           style={{
// //             left: tooltip.x + 10,
// //             top: tooltip.y + 10,
// //             transform: "translateY(-50%)",
// //             pointerEvents: "none",
// //             whiteSpace: "nowrap",
// //           }}
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0, scale: 0.8 }}
// //           transition={{ duration: 0.2, ease: "easeOut" }}
// //           dangerouslySetInnerHTML={{ __html: tooltip.content }}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// "use client";

// import { useRef } from "react";
// import { motion } from "motion/react";
// import DottedMap from "dotted-map";
// import Image from "next/image";

// interface MapProps {
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
// }

// export default function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9",
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const map = new DottedMap({ height: 100, grid: "diagonal" });

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: "#FFFFFF40",
//     shape: "circle",
//     backgroundColor: "black",
//   });

//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (
//     start: { x: number; y: number },
//     end: { x: number; y: number }
//   ) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="w-full aspect-[2/1] bg-black rounded-lg relative font-sans">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//         alt="world map"
//         height="495"
//         width="1056"
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {dots.map((dot, i) => {
//           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={`path-group-${i}`}>
//               {/* Connection Path */}
//               <motion.path
//                 d={createCurvedPath(startPoint, endPoint)}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="1"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//               />

//               {/* Labels for Start Points */}
//               <g key={`start-${i}`}>
//                 <circle
//                   cx={startPoint.x}
//                   cy={startPoint.y}
//                   r="3"
//                   fill={lineColor}
//                 />
//                 <text
//                   x={startPoint.x + 10}
//                   y={startPoint.y - 10}
//                   fill="white"
//                   fontSize="12"
//                   fontWeight="bold"
//                   textAnchor="start"
//                 >
//                   {dot.start.label}
//                 </text>
//               </g>

//               {/* Labels for End Points */}
//               <g key={`end-${i}`}>
//                 <circle
//                   cx={endPoint.x}
//                   cy={endPoint.y}
//                   r="3"
//                   fill={lineColor}
//                 />
//                 <text
//                   x={endPoint.x + 10}
//                   y={endPoint.y - 10}
//                   fill="white"
//                   fontSize="12"
//                   fontWeight="bold"
//                   textAnchor="start"
//                 >
//                   {dot.end.label}
//                 </text>
//               </g>
//             </g>
//           );
//         })}

//         {/* Gradient for Paths */}
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FFFFFF40",
    shape: "circle",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const calculateTextWidth = (text: string) => {
    return text.length * 7 + 20; // Adjusted width dynamically
  };

  return (
    <div className="w-full relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="w-full h-auto object-cover pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto absolute inset-0 pointer-events-none select-none"
      >
        {/* Paths (Lower Z-Index) */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {/* Labels (Higher Z-Index) */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const startTextWidth = calculateTextWidth(dot.start.label || "");
          const endTextWidth = calculateTextWidth(dot.end.label || "");

          return (
            <g key={`labels-group-${i}`}>
              {/* Start Point Label */}
              <g key={`start-label-${i}`} transform={`scale(1)`}>
                <rect
                  x={startPoint.x - startTextWidth / 2}
                  y={startPoint.y - 25}
                  width={startTextWidth}
                  height="22"
                  rx="6"
                  ry="6"
                  fill="rgba(0, 0, 0, 0.8)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1"
                />
                <text
                  x={startPoint.x}
                  y={startPoint.y - 10}
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {dot.start.label}
                </text>
              </g>

              {/* End Point Label */}
              <g key={`end-label-${i}`} transform={`scale(1)`}>
                <rect
                  x={endPoint.x - endTextWidth / 2}
                  y={endPoint.y - 25}
                  width={endTextWidth}
                  height="22"
                  rx="6"
                  ry="6"
                  fill="rgba(0, 0, 0, 0.8)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1"
                />
                <text
                  x={endPoint.x}
                  y={endPoint.y - 10}
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {dot.end.label}
                </text>
              </g>
            </g>
          );
        })}

        {/* Gradient for Paths */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
