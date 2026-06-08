"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedButton({ children }: Props) {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        flex items-center gap-3
        px-6 py-3
        rounded-full
        bg-lime-400
        text-black
        font-medium
        overflow-hidden
        shadow-[0_0_25px_rgba(185,255,102,0.5)]
      "
    >
      <span>{children}</span>

      <div className="relative w-5 h-5 overflow-hidden">
        <motion.div
          variants={{
            rest: {
              x: 0,
              y: 0,
              rotate: 0,
            },
            hover: {
              x: 20,
              y: -20,
              rotate: 180,
            },
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute inset-0"
        >
          <ArrowUpRight size={18} />
        </motion.div>

        <motion.div
          variants={{
            rest: {
              x: -20,
              y: 20,
              rotate: -180,
            },
            hover: {
              x: 0,
              y: 0,
              rotate: 0,
            },
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute inset-0"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>
    </motion.button>
  );
}
