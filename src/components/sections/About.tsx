"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-variant/20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:sticky md:top-32 text-center md:text-left"
        >
          <span className="text-primary font-headline text-[10px] md:text-sm tracking-[0.3em] uppercase">01 // THE ARCHITECT</span>
          <h2 className="text-4xl md:text-6xl font-headline font-black mt-4 uppercase tracking-tighter">Technical Narrative</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 md:space-y-8 text-on-surface-variant font-body text-base md:text-lg leading-relaxed text-center md:text-left"
        >
          <p>
            I view backend architecture as the structural steel of the digital world. My focus lies at the intersection of <span className="text-white font-semibold">distributed systems</span> and <span className="text-white font-semibold">high-concurrency engineering</span>. 
          </p>
          <p>
            With a deep specialization in the Java ecosystem, specifically Spring Boot and Microservices, I build systems that don't just function—they endure. My approach is rooted in precision, ensuring that every millisecond of latency is accounted for and every byte of data is secured.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-surface-container border-l-4 border-primary-container italic glass-card text-left"
          >
            "Complexity is a challenge to be simplified, not a feature to be celebrated. True engineering is found in the elegance of a perfectly optimized query."
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
