import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, theme, title, children }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
          
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
          />

          {/* MODAL CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            style={{
              backgroundColor: theme === "dark" ? "#111827" : "#FFFFFF",
              borderColor: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            }}
            className="relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden z-10"
          >
            {/* Top Accented Ambient Glow (Dark Mode Only) */}
            {theme === "dark" && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent pointer-events-none" />
            )}

            {/* HEADER */}
            <div 
              style={{ borderColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
              className="flex items-center justify-between px-6 py-4 border-b"
            >
              <h3 
                style={{ color: theme === "dark" ? "#FFFFFF" : "#1E293B" }}
                className="text-lg font-bold tracking-tight"
              >
                {title}
              </h3>
              
              <button
                onClick={onClose}
                style={{ 
                  color: theme === "dark" ? "#94A3B8" : "#64748B",
                  backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                }}
                className="p-2 rounded-full hover:scale-105 active:scale-95 transition-all"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* CONTENT BODY */}
            <div 
              style={{ color: theme === "dark" ? "#E2E8F0" : "#475569" }}
              className="p-6 text-sm sm:text-base leading-relaxed"
            >
              {children}
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}