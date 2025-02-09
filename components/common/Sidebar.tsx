// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import SocialLinksBar from "./SocialLinksBar";

// interface Link {
//   label: string;
//   href: string;
// }

// interface SidebarProps {
//   isOpen: boolean;
//   links: Link[];
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const containerVariants = {
//   open: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.1,
//       staggerDirection: -1,
//     },
//   },
// };

// const itemVariants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: -20 },
// };

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, links, setIsOpen }) => {
//   const router = useRouter();

//   const handleClick = (href: string) => {
//     router.push(href);
//     setIsOpen(false);
//   };

//   return (
//     <motion.div
//       initial={{ x: "-100%" }}
//       animate={{ x: isOpen ? "0%" : "-100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="fixed md:hidden min-w-full top-0 z-30 min-h-screen backdrop-blur-2xl bg-black/50"
//     >
//       <div className="absolute top-[96px] left-0 w-full px-4 flex flex-col items-center">
//         <motion.div
//           initial="closed"
//           animate={isOpen ? "open" : "closed"}
//           variants={containerVariants}
//           className="flex flex-col gap-4 items-center"
//         >
//           {links.map((link, index) => (
//             <motion.button
//               key={index}
//               onClick={() => handleClick(link.href)}
//               variants={itemVariants}
//               className="text-white text-xl font-bold block text-center"
//             >
//               {link.label}
//             </motion.button>
//           ))}
//         </motion.div>
//       </div>
//       <div className="absolute bottom-4 left-0 w-full flex justify-center">
//         <SocialLinksBar />
//       </div>
//     </motion.div>
//   );
// };

// export default Sidebar;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SocialLinksBar from "./SocialLinksBar";

interface Link {
  label: string;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  links: Link[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, links, setIsOpen }) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: isOpen ? 0 : 0.4,
      }}
      className="fixed md:hidden min-w-full top-0 z-[400] min-h-screen backdrop-blur-2xl bg-black/50"
    >
      <div className="absolute top-[96px] left-0 w-full px-4 flex flex-col items-center">
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={containerVariants}
          className="flex flex-col gap-4 items-center"
        >
          {links.map((link, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(link.href)}
              variants={itemVariants}
              className="text-white text-xl font-bold block text-center"
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        <SocialLinksBar />
      </div>
    </motion.div>
  );
};

export default Sidebar;
