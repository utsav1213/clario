"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function UnderlineNavItem({ children }: Props) {
  return (
    <motion.a
      href="#"
      className="relative text-white py-2 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}

      <motion.span
        variants={{
          rest: {
            width: 0,
          },
          hover: {
            width: "100%",
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="absolute left-0 -bottom-1 h-[2px] bg-white"
      />
    </motion.a>
  );
}
