"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-10">
        {/* Name / Title */}
        <div className="mb-12 md:mb-16 overflow-visible">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-headline text-4xl md:text-5xl font-black uppercase tracking-[0.05em] text-center pb-4"
          >
            Anshuman Tiwari
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "circInOut" }}
            className="h-[2px] w-40 mx-auto bg-primary mt-2"
          />
        </div>

        {/* Loading Indicator */}
        <div className="space-y-6 max-w-xs mx-auto">
          <div className="flex justify-between items-end">
            <span className="text-primary font-mono text-[9px] uppercase tracking-widest opacity-60">System_Initialization</span>
            <span className="text-white font-mono text-xl font-black">{Math.floor(percent)}%</span>
          </div>
          
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-primary"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Subtext */}
        <div className="mt-6 flex justify-center gap-10">
          <motion.span 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-mono tracking-widest text-on-surface-variant/40"
          >
            ARCHITECTURE.V2
          </motion.span>
          <motion.span 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-[9px] font-mono tracking-widest text-on-surface-variant/40"
          >
            PRECISION_READY
          </motion.span>
        </div>
      </div>

      {/* Decorative Scanline */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-gradient-to-b from-transparent via-red-500 to-transparent h-40 w-full"
      />
    </motion.div>
  );
};
