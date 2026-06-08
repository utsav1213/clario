"use client";

import { motion } from "framer-motion";

type NavItemProps = {
  children: React.ReactNode;
};

export default function NavItem({ children }: NavItemProps) {
  return (
    <motion.a
      href="#"
      className="text-white cursor-pointer"
      whileHover={{
        opacity: [1, 0, 1],
        color: "#B9FF66",
      }}
      transition={{
        duration: 0.15,
        times: [0, 0.5, 1],
      }}
    >
      {children}
    </motion.a>
  );
}
