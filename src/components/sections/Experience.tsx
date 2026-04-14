"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Academic Projects",
    period: "Jan 2025 – Present",
    description: [
      "Developed a Placement Cell System using Flask, MySQL, and React with REST APIs for student registration, company listings, and dashboards.",
      "Built a full-stack e-commerce website with secure CRUD APIs, product catalog, and WhatsApp-based order inquiries.",
      "Actively contributed to multiple international open-source projects on GitHub, delivering production-level code, resolving issues, and enhancing features through collaborative development workflows.",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline font-black mb-20 uppercase text-center">Work History</h2>
        
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 pb-16 border-l border-outline-variant last:pb-0"
            >
              {/* Timeline Dot */}
              <div className={exp.current ? 
                "absolute -left-1.5 top-0 w-3 h-3 bg-primary shadow-[0_0_10px_#8B0000]" : 
                "absolute -left-1.5 top-0 w-3 h-3 bg-surface-variant hover:bg-primary transition-colors"
              } />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-headline font-bold uppercase">{exp.role}</h3>
                <span className={exp.current ? "text-primary font-bold uppercase tracking-widest text-sm" : "text-on-surface-variant/40 font-bold uppercase tracking-widest text-sm"}>
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-secondary font-headline text-sm uppercase tracking-[0.2em] mb-6">{exp.company}</h4>
              
              <ul className="space-y-3 text-on-surface-variant font-body">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
