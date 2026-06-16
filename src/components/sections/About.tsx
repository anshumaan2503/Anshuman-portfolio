"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRole } from "@/lib/RoleContext";

export const About = () => {
  const { role } = useRole();

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-variant/20" id="about">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {role === "backend" ? (
            <motion.div
              key="backend-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-10 md:gap-20 items-start"
            >
              <div className="md:sticky md:top-32 text-center md:text-left">
                <span className="text-primary font-headline text-[10px] md:text-sm tracking-[0.3em] uppercase">01 // THE ARCHITECT</span>
                <h2 className="text-4xl md:text-6xl font-headline font-black mt-4 uppercase tracking-tighter">Technical Narrative</h2>
              </div>
              
              <div className="space-y-6 md:space-y-8 text-on-surface-variant font-body text-base md:text-lg leading-relaxed text-center md:text-left">
                <p>
                  I view backend architecture as the structural steel of the digital world. My focus lies at the intersection of <span className="text-white font-semibold">distributed systems</span> and <span className="text-white font-semibold">high-concurrency engineering</span>. 
                </p>
                <p>
                  With a deep specialization in the Java ecosystem, specifically Spring Boot and Microservices, I build systems that don&apos;t just function—they endure. My approach is rooted in precision, ensuring that every millisecond of latency is accounted for and every byte of data is secured.
                </p>
                <div className="p-6 md:p-8 bg-surface-container border-l-4 border-primary-container italic glass-card text-left">
                  &quot;Complexity is a challenge to be simplified, not a feature to be celebrated. True engineering is found in the elegance of a perfectly optimized query.&quot;
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="analyst-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-10 md:gap-20 items-start"
            >
              <div className="md:sticky md:top-32 text-center md:text-left">
                <span className="text-primary font-headline text-[10px] md:text-sm tracking-[0.3em] uppercase">01 // THE ANALYST</span>
                <h2 className="text-4xl md:text-6xl font-headline font-black mt-4 uppercase tracking-tighter">Analytical Narrative</h2>
              </div>
              
              <div className="space-y-6 md:space-y-8 text-on-surface-variant font-body text-base md:text-lg leading-relaxed text-center md:text-left">
                <p>
                  I view requirements not as documents, but as the blueprint of every system. My focus lies at the intersection of business strategy and technical delivery — translating stakeholder needs into structured, traceable, and actionable specifications. With hands-on experience across healthcare SaaS and e-commerce domains, I deliver end-to-end BA lifecycles that drive real process improvement.
                </p>
                <div className="p-6 md:p-8 bg-surface-container border-l-4 border-primary-container italic glass-card text-left">
                  &quot;A well-written requirement is worth a thousand lines of code. Clarity before code — always.&quot;
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
