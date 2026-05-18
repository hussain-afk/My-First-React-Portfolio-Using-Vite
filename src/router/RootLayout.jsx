import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans antialiased flex selection:bg-[#58a6ff]/30 selection:text-white">
      
      {/* MOBILE SIDEBAR TOGGLE BUTTON */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-5 right-5 z-[100] md:hidden bg-[#161b22] border border-[#30363d] text-[#58a6ff] p-3 rounded-xl shadow-xl transition-all active:scale-95 hover:border-[#58a6ff]/50"
        aria-label="Toggle navigation menu"
      >
        {isSidebarOpen ? <IoMdClose className="text-lg" /> : <FaBarsStaggered className="text-lg" />}
      </button>

      {/* INDEPENDENT SIDEBAR COMPONENT */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* MAIN CANVAS INFRASTRUCTURE FOR SUB-PAGES */}
      <main className="flex-1 min-h-screen md:pl-64 flex flex-col transition-all duration-300">
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12">
          <Outlet />
        </div>
      </main>

    </div>
  );
}