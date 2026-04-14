"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GitBranch, Microscope, HeartPulse } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "FlowSentinel",
    description:
      "A real-time network inspection system built with a Deep Packet Inspection (DPI) engine. Designed to analyze, classify, and monitor live network traffic with precision — targeting high-throughput environments where packet-level visibility is critical.",
    tags: ["Java", "DPI Engine", "Network Inspection", "Real-Time"],
    repo: "https://github.com/anshumaan2503/dpi-engine",
    icon: Microscope,
    accent: "from-red-500/20 to-transparent",
    borderAccent: "border-red-500/30",
    updated: "March 2026",
  },
  {
    id: "02",
    title: "AI-Powered Smart Health Management",
    description:
      "A full-stack health platform with AI-driven patient management, appointment scheduling, hospital administration, and real-time analytics. Built on a scalable Spring Boot + Next.js architecture.",
    tags: ["TypeScript", "Next.js", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/anshumaan2503/Ai-Powered-Smart-Health-Management-System",
    icon: HeartPulse,
    accent: "from-rose-500/20 to-transparent",
    borderAccent: "border-rose-500/30",
    updated: "March 2026",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container/30" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs">Featured Work</span>
          <h2 className="text-4xl md:text-6xl font-headline font-black mt-4 uppercase tracking-tighter">
            Selected Projects
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl text-xs md:text-sm leading-relaxed">
            Two systems built for real-world impact. Each one tackles production-grade challenges in scalability, AI integration, and clean architecture.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`group relative border ${project.borderAccent} bg-background/60 backdrop-blur-sm p-6 md:p-8 hover:bg-surface-container transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.accent} blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Project number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold tracking-widest text-on-surface-variant/40 uppercase font-mono">
                    PROJECT {project.id}
                  </span>
                  <div className="p-2 border border-white/10 bg-white/5 group-hover:border-primary/30 transition-colors">
                    <Icon size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight mb-4 text-white leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-on-surface-variant/40 tracking-widest uppercase">
                    Updated {project.updated}
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all duration-200"
                  >
                    View Repo <ArrowRight size={14} />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* See All on GitHub CTA */}
        <motion.a
          href="https://github.com/anshumaan2503"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group flex items-center justify-between w-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 px-8 py-6 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <GitBranch size={20} className="text-on-surface-variant group-hover:text-primary transition-colors" />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white">View All Projects</p>
              <p className="text-xs text-on-surface-variant mt-0.5">github.com/anshumaan2503</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-all">
            <span className="hidden sm:block">Open GitHub</span>
            <ExternalLink size={14} />
          </div>
        </motion.a>

      </div>
    </section>
  );
};
