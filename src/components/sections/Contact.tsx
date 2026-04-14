"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Link, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "Gmail",
    value: "anshumaaan.tiwari@gmail.com",
    href: "mailto:anshumaaan.tiwari@gmail.com",
    icon: Mail,
    color: "from-red-500/20 to-transparent",
    hoverColor: "group-hover:text-red-500",
  },
  {
    name: "LinkedIn",
    value: "Anshuman Tiwari",
    href: "https://www.linkedin.com/in/-anshuman-tiwari/",
    icon: Link,
    color: "from-blue-500/20 to-transparent",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "WhatsApp",
    value: "+91 8305909173",
    href: "https://wa.me/918305909173",
    icon: MessageCircle,
    color: "from-green-500/20 to-transparent",
    hoverColor: "group-hover:text-green-500",
  },
];

export const Contact = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black overflow-hidden" id="contact">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block italic">Connect with me</span>
          <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter">
            Get In <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: "1px #ff2d2d" }}>Touch</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                className="group relative block p-6 md:p-8 bg-surface-container/20 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${social.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center" style={{ transform: "translateZ(30px)" }}>
                  <div className={`p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${social.hoverColor}`}>
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 mb-1 md:mb-2">{social.name}</h3>
                  <p className="text-base md:text-lg font-headline font-bold text-white group-hover:text-primary transition-colors duration-300 truncate w-full px-2">
                    {social.value}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 group-hover:text-primary transition-all">
                    <span>Open Link</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Catchphrase */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-on-surface-variant/20 font-bold">
            Available for freelance & Full-time opportunities
          </p>
        </motion.div>

      </div>
    </section>
  );
};
