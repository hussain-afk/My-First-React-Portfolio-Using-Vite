import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiArrowLeft, FiTerminal, FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 overflow-x-hidden select-none box-border bg-[#0d1117]">
      
      {/* CYBERPUNK RADIAL GLOW ACCENTS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] bg-[#ef4444]/5 rounded-full blur-[80px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-[#58a6ff]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* CORE GRID SYSTEM CONTAINER */}
      <div className="w-full max-w-5xl z-10 box-border flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
          
          {/* LEFT COLUMN: ERROR MESSAGES & NAVIGATION */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-2 lg:order-1 min-w-0">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#ef4444]/30 px-4 py-2 rounded-full mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#ef4444] font-bold flex items-center gap-1.5">
                <FiAlertTriangle className="text-xs shrink-0" /> System Exception Intercepted
              </span>
            </div>

            {/* Typography Headings */}
            <div className="space-y-2 min-w-0">
              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#58a6ff] uppercase font-semibold">
                Error Code: 404
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black italic tracking-tight uppercase text-white leading-tight break-words">
                LOST IN THE <br />
                <span className="text-[#58a6ff] not-italic font-sans tracking-tighter normal-case font-black drop-shadow-[0_0_30px_rgba(88,166,255,0.15)]">
                  Matrix Fold?
                </span>
              </h1>
            </div>

            {/* Description Block */}
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              The script or layout matrix node you are trying to access has been deleted, shifted coordinates, or never compiled into production. Let's patch your location tracking.
            </p>

            {/* Action Navigation Deck */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 w-full">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#161b22] text-white border border-[#30363d] hover:border-[#58a6ff]/40 font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#161b22]/80 active:scale-98 text-center flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
              >
                <FiArrowLeft className="w-4 h-4" /> Go Back
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.3)] active:scale-98 text-center flex items-center justify-center gap-2 box-border"
              >
                <FiHome className="w-4 h-4" /> Return Home
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: CYBERPUNK CODE CONTAINER CARD */}
          <div className="lg:col-span-6 order-1 lg:order-2 w-full min-w-0">
            <div className="relative mx-auto max-w-sm lg:max-w-none w-full bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#ef4444]/30 group">
              
              {/* Top Light Accent bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ef4444]/40 to-transparent" />

              {/* Code Window Header / Windows Dots */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#30363d]/70 bg-[#0d1117]/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider flex items-center gap-1">
                  <FiTerminal className="text-xs" /> Trace_Route_Error.log
                </span>
              </div>

              {/* Code Output Window */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-gray-300 bg-[#0d1117]/40 whitespace-pre-wrap break-all sm:break-normal">
                <span className="text-[#ff79c6]">const</span> routeException = &#123;
                <div className="pl-4">
                  status: <span className="text-[#ef4444]">404</span>,
                  <br />
                  error: <span className="text-[#f1fa8c]">'Not Found'</span>,
                  <br />
                  message: <span className="text-[#f1fa8c]">'Requested link coordinate does not exist.'</span>,
                  <br />
                  resolved: <span className="text-[#50fa7b]">false</span>,
                  <br />
                  actionRequired: <span className="text-[#bd93f9]">[</span>
                  <div className="pl-4 text-[#8be9fd] break-words">
                    'Check target URL variables',
                    <br />
                    'Re-route upstream baseline structure'
                  </div>
                  <span className="text-[#bd93f9]">]</span>
                </div>
                &#125;;
                
                {/* Decorative terminal pointer */}
                <div className="mt-4 pt-2.5 border-t border-[#30363d]/40 flex items-center justify-between text-gray-500 text-[10px]">
                  <span>// Core breakdown stack trace ready</span>
                  <span className="text-[#ef4444] animate-pulse">■</span>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}