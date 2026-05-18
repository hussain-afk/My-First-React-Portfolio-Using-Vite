import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 
import Preloader from '../components/PreLoader'; // Import your preloader component
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Automatically close mobile sidebar when changing pages/routes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  // Handle scroll lock mechanics for BOTH the preloader and the active mobile sidebar
  useEffect(() => {
    if (isLoading || isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLoading, isSidebarOpen]);

  return (
    <>
      {/* 1. INITIAL DIAGNOSTIC BOOT LOADER */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* 2. CORE PORTFOLIO VIEW WRAPPER */}
      <div className="min-h-screen bg-[#0d1117] text-white font-sans antialiased flex selection:bg-[#58a6ff]/30 selection:text-white overflow-x-hidden">
        
        {/* MOBILE SIDEBAR TOGGLE BUTTON (Hidden entirely while the system is loading) */}
        {!isLoading && (
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-5 right-5 z-[100] md:hidden bg-[#161b22]/90 backdrop-blur-md border border-[#30363d] text-[#58a6ff] p-3 rounded-xl shadow-2xl transition-all active:scale-95 hover:border-[#58a6ff]/50 flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <div className="transition-transform duration-300 transform rotate-0 hover:rotate-90">
              {isSidebarOpen ? <IoMdClose className="text-xl" /> : <FaBarsStaggered className="text-xl" />}
            </div>
          </button>
        )}

        {/* GLASSMORPHISM BACKDROP OVERLAY */}
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className={`fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* INDEPENDENT SIDEBAR COMPONENT */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* MAIN CANVAS INFRASTRUCTURE FOR SUB-PAGES */}
        <main className="flex-1 min-h-screen md:pl-64 flex flex-col transition-all duration-300 ease-in-out">
          
          {/* Subtle top ambient lighting strip */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#58a6ff]/10 to-transparent pointer-events-none" />
          
          <div className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-10 py-24 md:py-12 transition-all duration-300">
            {/* The individual page (Home, About, Projects) renders inside this Outlet */}
            <Outlet />
          </div>
        </main>

      </div>
    </>
  );
}