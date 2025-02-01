// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// export default function Header() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)
//   const [showVideo, setShowVideo] = useState(false)
//   const headerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (headerRef.current) {
//         const rect = headerRef.current.getBoundingClientRect()
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         })
//         setIsHovering(true)
//       }
//     }

//     const handleMouseLeave = () => {
//       setIsHovering(false)
//     }

//     if (headerRef.current) {
//       headerRef.current.addEventListener("mousemove", handleMouseMove)
//       headerRef.current.addEventListener("mouseleave", handleMouseLeave)
//     }

//     return () => {
//       if (headerRef.current) {
//         headerRef.current.removeEventListener("mousemove", handleMouseMove)
//         headerRef.current.removeEventListener("mouseleave", handleMouseLeave)
//       }
//     }
//   }, [])

//   return (
//     <header ref={headerRef} className="relative h-screen overflow-hidden bg-black" onClick={() => setShowVideo(true)}>
//       {/* Revealed Image Area */}
//       <AnimatePresence>
//         {isHovering && (
//           <motion.div
//             className="absolute"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               x: mousePosition.x - 100, // Center the circle (200px diameter)
//               y: mousePosition.y - 100,
//             }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{
//               opacity: { duration: 0.1 },
//               scale: { duration: 0.1 },
//               x: { type: "spring", stiffness: 1000, damping: 50 },
//               y: { type: "spring", stiffness: 1000, damping: 50 },
//             }}
//             style={{
//               width: "200px",
//               height: "200px",
//               borderRadius: "50%",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               className="relative size-screen"
//               style={{
//                 transform: `translate(${-mousePosition.x + 100}px, ${-mousePosition.y + 100}px)`,
//               }}
//             >
//               <Image
//                 src="/ai-agent.png"
//                 alt="AI Agents Diagram"
//                 layout="fill"
//                 objectFit="cover"
//                 className="select-none"
//                 priority
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//         <motion.h1
//           className="text-6xl font-bold mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Agentia World
//         </motion.h1>
//         <motion.p
//           className="text-xl mb-8 max-w-2xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Discover the Future of AI Agents: From Simple Reflex to Advanced Learning Systems
//         </motion.p>
//         <motion.div
//           className="space-x-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
//             Get Started
//           </button>
//           <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
//             Learn More
//           </button>
//         </motion.div>
//       </div>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {showVideo && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative w-full h-full max-w-4xl max-h-[calc(100vh-4rem)]"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >
//               <button
//                 className="absolute top-4 right-4 text-white text-2xl z-10"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   setShowVideo(false)
//                 }}
//               >
//                 &times;
//               </button>
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="AI Agents Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Custom Cursor */}
//       <motion.div
//         className="fixed w-8 h-8 pointer-events-none z-50 flex items-center justify-center"
//         animate={{
//           x: mousePosition.x,
//           y: mousePosition.y,
//           scale: isHovering ? 1.2 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 1000, damping: 50 }}
//         style={{ left: 0, top: 0 }}
//       >
//         <div className="w-2 h-2 bg-white rounded-full" />
//         <span className="absolute text-white text-xs whitespace-nowrap ml-6">Click here</span>
//       </motion.div>
//     </header>
//   )
// }
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Update mouse position relative to the header
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovering(true);
    }
  }, []);

  // When the mouse leaves, disable the reveal/cursor hover effect
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      header.addEventListener("mousemove", handleMouseMove);
      header.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (header) {
        header.removeEventListener("mousemove", handleMouseMove);
        header.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <header
      ref={headerRef}
      className="relative h-screen overflow-hidden bg-black"
      onClick={openVideo}
    >
      {/* Reveal Circle with Background Image */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute pointer-events-none rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              // Offset the circle so it's centered under the cursor
              x: mousePosition.x - 100,
              y: mousePosition.y - 100,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { type: "spring", stiffness: 500, damping: 30 },
              y: { type: "spring", stiffness: 500, damping: 30 },
            }}
            style={{
              width: 200,
              height: 200,
              // Set the background image with the proper offset.
              backgroundImage: "url('/ai-agent.png')",
              backgroundSize: "cover",
              // Adjust background position so the part beneath the cursor is shown:
              backgroundPosition: `${mousePosition.x - 100}px ${
                mousePosition.y - 100
              }px`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Agentia World
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the Future of AI Agents: From Simple Reflex to Advanced
          Learning Systems
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Video Modal with Full Screen Video */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo} // Clicking the overlay closes the modal
          >
            <motion.button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
              onClick={(e) => {
                e.stopPropagation();
                closeVideo();
              }}
              aria-label="Close Video"
            >
              &times;
            </motion.button>
            <motion.video
              autoPlay
              controls
              src="/path-to-your-video.mp4" // Replace with your video file path
              className="w-full h-full object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Custom Cursor */}
      <motion.div
        className="fixed z-50 pointer-events-none flex flex-col items-center justify-center"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ left: 0, top: 0 }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
        <span className="mt-1 text-white text-xs">Click here</span>
      </motion.div>
    </header>
  );
}
