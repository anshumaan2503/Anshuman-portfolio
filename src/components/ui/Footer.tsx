export const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-20 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-background">
      <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-8 md:mb-0">
        © 2026 Anshuman Tiwari. ENGINEERED FOR PRECISION.
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* Social links removed - now handled in Contact section */}
      </div>
    </footer>
  );
};
