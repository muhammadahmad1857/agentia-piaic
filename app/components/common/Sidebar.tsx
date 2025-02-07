import React from "react";

const Sidebar = ({ isOpen = true }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed md:hidden min-w-screen block z-50 transition-all duration-500 top-[96px] ${
        isOpen ? "left-0" : "-left-full"
      } min-h-screen backdrop-blur-2xl bg-black/50`}
    >
      This is my sidebar
    </div>
  );
};

export default Sidebar;
