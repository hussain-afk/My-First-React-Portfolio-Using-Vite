import { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Keep loader active for 3 seconds before initiating exit panels
    const exitTimer = setTimeout(() => {
      setIsExiting(true);

      // Wait for the panels to finish sliding completely before unmounting (1.1s duration)
      const unmountTimer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 1100);

      return () => clearTimeout(unmountTimer);
    }, 3000);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div 
      id="loader" 
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-transparent pointer-events-none select-none ${
        isExiting ? "loader-hidden" : ""
      }`}
    >
      {/* ── GRID BACKDROP ── */}
      <div className="ldr-grid absolute inset-0 pointer-events-none z-0" />

      {/* ── SHUTTER PANELS ── */}
      <div 
        className={`ldr-panel ldr-panel-t absolute left-0 w-full h-[50%] bg-[#0d1117] transition-transform duration-[1100ms] will-change-transform pointer-events-auto z-[1] top-0 ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`} 
      />
      <div 
        className={`ldr-panel ldr-panel-b absolute left-0 w-full h-[50%] bg-[#0d1117] transition-transform duration-[1100ms] will-change-transform pointer-events-auto z-[1] bottom-0 ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`} 
      />

      {/* ── CONTENT WRAPPER ── */}
      <div 
        className={`ldr-content relative z-[2] text-center px-8 transition-all duration-500 ${
          isExiting ? "opacity-0 -translate-y-5 scale-95 invisible" : "opacity-100"
        }`}
      >
        {/* ── BADGE (TOP) ── */}
        <div className="ldr-badge inline-flex items-center gap-2 text-[9px] font-extrabold tracking-[0.5em] uppercase text-[#58a6ff] border border-[#58a6ff]/25 px-[18px] py-1.5 rounded-full mb-10 opacity-0 translate-y-3">
          <span className="ldr-badge-dot w-1.5 h-1.5 rounded-full bg-[#58a6ff]" />
          Welcome
        </div>

        {/* ── NAME WORDS (clip-reveal each word) ── */}
        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5">
            <span className="ldr-word ldr-word-1 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-white opacity-0 translate-y-[105%]">
              Muhammad
            </span>
          </span>
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5">
            <span className="ldr-word ldr-word-2 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-[#58a6ff] opacity-0 translate-y-[105%]">
              Hussain
            </span>
          </span>
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5">
            <span className="ldr-word ldr-word-3 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-white opacity-0 translate-y-[105%]">
              Memon
            </span>
          </span>
        </div>

        {/* ── ACCENT LINE ── */}
        <div className="ldr-line-wrap h-[2px] bg-[#58a6ff]/10 mt-8 mx-auto w-0 relative overflow-hidden">
          <span className="ldr-line block h-full w-full bg-gradient-to-r from-transparent via-[#58a6ff] to-transparent scale-x-0 origin-left" />
        </div>

        {/* ── SUB LABEL ── */}
        <p className="ldr-sub text-[10px] font-bold tracking-[0.45em] uppercase text-white/35 mt-7 opacity-0">
          Creative Frontend Developer
        </p>
      </div>

      {/* LOCALIZED STYLES INTERFACE */}
      <style>{`
        .ldr-grid {
          background-image: linear-gradient(rgba(88, 166, 255, .04) 1px, transparent 1px), linear-gradient(90deg, rgba(88, 166, 255, .04) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: ldrGridFade 2.5s ease forwards;
        }
        @keyframes ldrGridFade {
          0% { opacity: 0; } 20%, 80% { opacity: 1; } 100% { opacity: 0; }
        }
        .ldr-badge {
          animation: ldrFadeUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }
        .ldr-badge-dot {
          animation: ldrPulse 1.2s ease-in-out infinite;
        }
        @keyframes ldrPulse {
          0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(0.7); }
        }
        .ldr-word {
          animation: ldrClipUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .ldr-word-1 { animation-delay: 0.2s; }
        .ldr-word-2 { animation-delay: 0.38s; }
        .ldr-word-3 { animation-delay: 0.55s; }
        @keyframes ldrClipUp {
          from { opacity: 0; transform: translateY(105%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ldr-line-wrap {
          animation: ldrLineExpand 0.7s cubic-bezier(0.85, 0, 0.15, 1) 0.8s forwards;
        }
        @keyframes ldrLineExpand {
          from { width: 0; } to { width: 280px; }
        }
        .ldr-line {
          animation: ldrLineReveal 0.65s cubic-bezier(0.85, 0, 0.15, 1) 0.9s forwards;
        }
        @keyframes ldrLineReveal {
          from { transform: scaleX(0); } to { transform: scaleX(1); }
        }
        .ldr-line::after {
          content: ''; position: absolute; top: -3px; left: 0; width: 60px; height: 8px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .6), transparent);
          animation: ldrShimmer 1.8s ease 1.2s infinite;
        }
        @keyframes ldrShimmer {
          from { transform: translateX(-60px); } to { transform: translateX(340px); }
        }
        .ldr-sub {
          animation: ldrFadeUp 0.6s ease 1.1s forwards;
        }
        @keyframes ldrFadeUp {
          from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }
        }
        .ldr-panel {
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        }
      `}</style>
    </div>
  );
}