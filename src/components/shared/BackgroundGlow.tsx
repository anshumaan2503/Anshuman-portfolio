"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowProps {
  className?: string;
  color?: string;
  size?: string;
}

export const BackgroundGlow = ({ className, color = "rgba(139, 0, 0, 0.35)", size = "600px" }: GlowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={cn("absolute rounded-full filter blur-[80px] pointer-events-none -z-10", className)}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
      }}
    />
  );
};
