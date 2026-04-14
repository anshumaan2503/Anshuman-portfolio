
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const imageRotateX = useTransform(dy, [-0.5, 0.5], ["5deg", "-5deg"]);
  const imageRotateY = useTransform(dx, [-0.5, 0.5], ["-5deg", "5deg"]);
  const imageTranslateX = useTransform(dx, [-0.5, 0.5], ["-20px", "20px"]);
  const imageTranslateY = useTransform(dy, [-0.5, 0.5], ["-10px", "10px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col md:flex-row items-center px-6 md:px-12 max-w-full mx-auto overflow-hidden bg-gradient-to-br from-[#2a0000] via-[#1a0000] to-black"
    >

      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      {/* ================= LEFT CONTENT ================= */}
      <div className="w-full md:w-7/12 z-20 py-20 md:py-32 relative lg:pl-24 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="w-full"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-red-400 font-bold uppercase mb-4 text-[10px] md:text-xs flex items-center justify-center md:justify-start gap-3 tracking-[0.3em]"
          >
            <span className="w-8 h-[1px] bg-red-500 hidden md:block" />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              className="mr-1"
            >
              &gt;
            </motion.span>
            BACKEND_SYSTEM ARCHITECT
          </motion.h2>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.2] md:leading-[0.85] mb-6 uppercase text-white"
          >
            Anshuman <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-white bg-[length:200%_auto] animate-gradient-flow pb-2"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "-0.02em" }}
              transition={{ duration: 1.5, ease: "circOut" }}
            >
              Tiwari
            </motion.span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="text-sm md:text-lg text-red-100/70 max-w-lg mb-10 leading-relaxed border-l-0 md:border-l-2 border-red-500/30 pl-0 md:pl-6 mx-auto md:mx-0"
          >
            Engineering scalable backend systems using Java and Spring Boot, with a strong focus on system design, performance, and reliable API architecture.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="group relative bg-white text-black px-8 py-4 font-bold tracking-widest uppercase overflow-hidden text-xs md:text-sm">
              <div className="absolute inset-0 bg-red-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">View Work</span>
            </a>

            <a href="#contact" className="group border border-white/20 text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white/5 transition-all text-xs md:text-sm">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>


      {/* ================= RIGHT IMAGE (ADVANCED LIVE ANIMATION) ================= */}
      <motion.div
        className="absolute inset-0 md:inset-auto md:right-0 md:top-0 w-full md:w-1/2 h-full z-10 pointer-events-none flex items-end justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 1. HEARTBEAT GLOW (Atmospheric pulse) */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_100%,#8b0000_0%,transparent_65%)] blur-[120px] -z-10"
        />

        {/* 2. PARALLAX LAYER (Mouse tracking) */}
        <motion.div 
          className="relative w-full h-full flex items-end justify-center"
          style={{ 
            rotateX: imageRotateX, 
            rotateY: imageRotateY, 
            x: imageTranslateX, 
            y: imageTranslateY,
            transformStyle: "preserve-3d" 
          }}
        >
          {/* 3. BREATHING LAYER (Nested vertical oscillation) */}
          <motion.div
             className="relative w-full h-full"
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/portrait.jpg"
              alt="Anshuman Tiwari"
              fill
              priority
              className="
                object-cover object-bottom md:object-contain
                brightness-[1.1] contrast-[1.1] saturate-[1.05]
                mix-blend-overlay opacity-50 md:opacity-100
              "
            />
            
            {/* Blending Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 md:via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent hidden md:block" />

            {/* 4. DIGITAL MIST LAYER (Texture) */}
            <motion.div 
              animate={{ x: ["-5%", "5%"], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </motion.div>


      {/* ================= DECORATIVE ELEMENT ================= */}
      <div className="absolute -left-10 bottom-1/4 w-60 h-60 border border-white/10 -rotate-12 pointer-events-none -z-10" />

    </section>
  );
};