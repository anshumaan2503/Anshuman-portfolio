"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Layers, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    color: "#ff2d2d",
    glow: "#ff2d2d",
    index: "01",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Layers,
    color: "#ff6b35",
    glow: "#ff6b35",
    index: "02",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA", "REST APIs", "Flask"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#c0392b",
    glow: "#c0392b",
    index: "03",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Frontend",
    icon: Wrench,
    color: "#e74c3c",
    glow: "#e74c3c",
    index: "04",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Git / GitHub", "Problem Solving"],
  },
];

function SkillModule({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = category.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 150, damping: 18 };
  const xS = useSpring(x, springCfg);
  const yS = useSpring(y, springCfg);

  const rotateX = useTransform(yS, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(xS, [-0.5, 0.5], ["-18deg", "18deg"]);
  const glowX   = useTransform(xS, [-0.5, 0.5], ["0%", "100%"]);
  const glowY   = useTransform(yS, [-0.5, 0.5], ["0%", "100%"]);
  const shineX  = useTransform(xS, [-0.5, 0.5], ["-100%", "200%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.13, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "900px" }}
      className="relative group cursor-default"
    >
      {/* ── Floating glow blob under card ── */}
      <motion.div
        className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${category.color}55 0%, transparent 70%)` }}
      />

      {/* ── Card shadow (depth) ── */}
      <div
        className="absolute inset-0 translate-y-6 translate-x-2 rounded-sm blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: category.color }}
      />

      {/* ── MAIN CARD ── */}
      <div
        className="relative overflow-hidden border bg-gradient-to-br from-[#120000] via-[#0a0000] to-black transition-all duration-300 group-hover:border-opacity-60"
        style={{
          borderColor: `${category.color}25`,
          transformStyle: "preserve-3d",
          boxShadow: `0 0 0 1px ${category.color}10, inset 0 1px 0 ${category.color}20`,
        }}
      >
        {/* Scan-line sweep on hover */}
        <motion.div
          className="pointer-events-none absolute top-0 bottom-0 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            left: shineX,
            background: `linear-gradient(105deg, transparent 20%, ${category.color}18 50%, transparent 80%)`,
          }}
        />

        {/* Dynamic spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, ${category.color}22 0%, transparent 55%)`,
          }}
        />

        {/* Top chromatic edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent 0%, ${category.color}90 50%, transparent 100%)` }}
        />
        {/* Left chromatic edge */}
        <div
          className="absolute top-0 left-0 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, ${category.color}70, transparent 80%)` }}
        />

        {/* Card body */}
        <div className="p-7" style={{ transform: "translateZ(0px)" }}>

          {/* Index number — watermark top-right */}
          <span
            className="absolute top-5 right-6 text-6xl font-black opacity-[0.04] select-none pointer-events-none leading-none"
            style={{ color: category.color }}
          >
            {category.index}
          </span>

          {/* Icon row */}
          <div className="flex items-center gap-4 mb-7" style={{ transform: "translateZ(25px)" }}>
            <motion.div
              className="relative p-3 border"
              style={{
                borderColor: `${category.color}35`,
                background: `${category.color}12`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon size={22} style={{ color: category.color }} />
              {/* icon inner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${category.color}25, transparent)` }}
              />
            </motion.div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/30 mb-0.5">Module</p>
              <h3
                className="text-base font-headline font-black uppercase tracking-widest"
                style={{ color: "white" }}
              >
                {category.title}
              </h3>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mb-6 h-px"
            style={{ background: `linear-gradient(to right, ${category.color}40, transparent)` }}
          />

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
            {category.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.13 + i * 0.05, ease: "backOut" }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="relative px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 cursor-default overflow-hidden"
                style={{
                  borderColor: `${category.color}25`,
                  background: `${category.color}10`,
                  color: "#ffffff99",
                  boxShadow: `inset 0 1px 0 ${category.color}20`,
                }}
              >
                {/* chip fill on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${category.color}15` }}
                />
                <span className="relative">{skill}</span>
              </motion.span>
            ))}
          </div>

          {/* Bottom status bar */}
          <div className="mt-7 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[9px] tracking-widest uppercase text-on-surface-variant/30">Active</span>
            </div>
            <span
              className="text-[9px] font-mono tracking-widest"
              style={{ color: `${category.color}60` }}
            >
              {category.skills.length} SKILLS
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const Skills = () => {
  return (
    <section
      className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden bg-black"
      id="arsenal"
      style={{ perspective: "1400px", filter: "brightness(1.35)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ff2d2d 1px, transparent 1px), linear-gradient(to bottom, #ff2d2d 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* DIGITAL DATA STREAM EFFECT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute text-[8px] font-mono whitespace-nowrap text-primary/20"
            style={{ 
              left: `${i * 10}%`,
              writingMode: "vertical-rl"
            }}
          >
            {Array(50).fill(0).map(() => (Math.random() > 0.5 ? "1" : "0")).join("")}
          </motion.div>
        ))}
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-red-950/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">My Arsenal</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-[1.1] md:leading-none">
              The Tech{" "}
              <span className="text-transparent bg-clip-text"
                style={{ WebkitTextStroke: "1px #ff2d2d" }}>
                Stack
              </span>
            </h2>
            <div className="flex items-center gap-4 text-right">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-on-surface-variant/30">Version</p>
                <span className="text-primary font-mono font-bold text-xs md:text-sm">v 2.0.25</span>
              </div>
            </div>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />
        </motion.div>

        {/* 3D Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          style={{ transformStyle: "preserve-3d" }}
        >
          {skillCategories.map((cat, idx) => (
            <SkillModule key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};