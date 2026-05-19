import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiTerminal } from 'react-icons/fi';

export default function NextPageButton({ to = "/education", label = "Education" }) {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center sm:justify-end py-12 px-4 select-none box-border">
      <button
        onClick={() => navigate(to)}
        className="group relative flex items-center justify-between gap-8 w-full sm:w-auto min-w-[260px] bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#58a6ff]/60 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(88,166,255,0.08)] active:scale-98 cursor-pointer overflow-hidden group/btn"
      >
        {/* TOP GLOWING LIGHT-BAR SCANNER */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-all" />

        {/* LEFT INSIDE: META LABELS */}
        <div className="flex flex-col items-left text-left min-w-0">
          <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-gray-500 uppercase flex items-center gap-1.5 mb-1">
            <FiTerminal className="text-[#58a6ff]/60 text-xs shrink-0" />
            Next Phase
          </span>
          <span className="text-base font-black tracking-tight text-white group-hover/btn:text-[#58a6ff] transition-colors duration-200 truncate">
            {label}
          </span>
        </div>

        {/* RIGHT INSIDE: ANIMATED ARROW CONTAINER */}
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-400 group-hover/btn:text-[#58a6ff] group-hover/btn:border-[#58a6ff]/40 transition-all duration-300 shrink-0 relative overflow-hidden">
          
          {/* Subtle background ring pulse on hover */}
          <div className="absolute inset-0 bg-[#58a6ff]/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
          
          <FiArrowRight className="w-5 h-5 transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) group-hover/btn:translate-x-1" />
        </div>
      </button>

      {/* Tailwind animation keyframe injection for the glowing scanner line */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}