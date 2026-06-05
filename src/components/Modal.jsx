import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, showGlow = true }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      // 1. Close modal on Escape key
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // 2. Focus Trapping: Keep keyboard navigation inside the modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      // Auto-focus the modal container or close button for screen readers
      setTimeout(() => modalRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden"
    >
      
      {/* BACKDROP BLUR COAT - High-end premium frosted backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        aria-hidden="true"
      />

      {/* MODAL FRAME CONSOLE - Cyber-Glassmorphism upgrade */}
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-[#161b22]/90 backdrop-blur-xl border border-[#30363d] w-full max-w-lg rounded-2xl flex flex-col overflow-hidden transform transition-all duration-300 scale-100 animate-scale-up outline-none shadow-[0_0_50px_-12px_rgba(0,0,0,0.7),0_0_20px_1px_rgba(88,166,255,0.05)]"
      >
        
        {/* Optional top ambient color beam - Upgraded to a modern pulse aura */}
        {showGlow && (
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/60 to-transparent shadow-[0_1px_10px_rgba(88,166,255,0.4)]" />
        )}

        {/* MODAL HEADER BLOCK - Elevated hierarchy */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#30363d]/50 bg-[#0d1117]/60">
          <h3 
            id="modal-title"
            className="text-sm font-bold font-mono uppercase tracking-widest text-gray-100 flex items-center gap-2 select-none"
          >
            <span className="text-[#58a6ff] font-bold animate-pulse">&gt;</span>
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#30363d]/40 border border-transparent hover:border-[#30363d]/70 transition-all duration-200 outline-none focus-visible:border-[#58a6ff] focus-visible:bg-[#30363d]/30"
            title="Close Interface"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* MODAL INNER BODY + CROSS-BROWSER ZERO-PLUGIN SCROLLBAR */}
        <div className="p-6 overflow-y-auto max-h-[70vh] text-sm text-gray-300 font-light leading-relaxed
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-[#0d1117]/30
          [&::-webkit-scrollbar-track]:rounded-r-2xl
          [&::-webkit-scrollbar-thumb]:bg-[#30363d]/60
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#58a6ff]/40
          [&::-webkit-scrollbar-thumb]:transition-colors
          [scrollbar-width:thin]
          [scrollbar-color:rgba(48,54,61,0.6)_rgba(13,17,23,0.3)]"
        >
          {children}
        </div>

      </div>
    </div>
  );
}