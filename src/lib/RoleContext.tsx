"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Role = "backend" | "analyst";

interface RoleContextType {
  role: Role;
  setRoleWithTransition: (newRole: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role>("backend");
  const [isGlitching, setIsGlitching] = useState(false);
  const [pendingRole, setPendingRole] = useState<Role>("backend");

  const setRoleWithTransition = (newRole: Role) => {
    if (newRole === role) return;
    setPendingRole(newRole);
    setIsGlitching(true);
    
    // Swap the active role content in the middle of the sweep (when screen is covered)
    setTimeout(() => {
      setRole(newRole);
    }, 600);

    // End the transition after the sweep completes
    setTimeout(() => {
      setIsGlitching(false);
    }, 1200);
  };

  return (
    <RoleContext.Provider value={{ role, setRoleWithTransition }}>
      {children}
      
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "0%", "100%"] }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#0c0c0c] pointer-events-none border-r-4 border-red-500 shadow-[15px_0_60px_rgba(255,45,45,0.8)] flex items-center justify-end pr-12"
          >
            {/* Cyberpunk Scan HUD indicator */}
            <div className="flex flex-col items-end font-mono">
              <span className="text-[10px] tracking-[0.5em] text-red-500 uppercase animate-pulse">
                SYS_PROFILE_RELOAD
              </span>
              <span className="text-[8px] text-red-500/50 mt-1.5 uppercase tracking-widest">
                {pendingRole === "backend" ? "LOAD // SOFTWARE_DEVELOPER" : "LOAD // BUSINESS_ANALYST"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};
