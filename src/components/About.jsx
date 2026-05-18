import { useState } from "react";
// If you built the Typewriter component earlier, you can import it here:
// import Typewriter from "../components/Typewriter";

export default function About() {
  const tools = [
    { name: "React.js", icon: "fa-react", color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", icon: "fa-css3-alt", color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", icon: "fa-js", color: "text-[#f7df1e]" },
    { name: "HTML5 & CSS3", icon: "fa-html5", color: "text-[#ea580c]" },
    { name: "Firebase / Firestore", icon: "fa-fire", color: "text-[#f59e0b]", prefix: "fa-solid" }, // Fixed prefix for non-brand icon
    { name: "Git & GitHub", icon: "fa-github", color: "text-[#f3f4f6]" }
  ];

  return (
    <section className="relative min-h-screen py-12 flex flex-col justify-center animate-fadeIn select-none">
      
      {/* BACKGROUND GRAPHIC EFFECTS */}
      <div className="absolute top-1/4 right-1/10 w-72 h-72 bg-[#58a6ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION TITLE HEADER */}
      <div className="mb-14 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#58a6ff] block mb-2">Biography</span>
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
          About <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">Me</span>
        </h2>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-4 rounded-full mx-auto lg:mx-0" />
      </div>

      {/* CORE CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: THE STORIES & BIO */}
        <div className="lg:col-span-7 space-y-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base">
          <p className="text-justify sm:text-left">
            Hello! I am a passionate <span className="text-white font-medium">Frontend Web Developer</span> dedicated to building highly interactive, responsive, and visually pixel-perfect web applications. My development philosophy revolves around clean structure, optimized component lifecycles, and beautiful user interfaces that don't compromise performance.
          </p>
          <p className="text-justify sm:text-left">
            Currently, I am expanding my deep technical engineering skills at <span className="text-white font-medium">Saylani Mass IT Training (SMIT)</span>, focusing heavily on modern app engineering, and matching it with formal software architecture studies at <span className="text-white font-medium">Jinnah Polytechnic Institute</span>.
          </p>
          <p className="text-justify sm:text-left">
            With a comprehensive certificate base from the <span className="text-[#58a6ff] font-medium">Meta Front-End Developer</span> program, I thrive on writing modular, self-documenting code. Whether I am modeling high-end dark aesthetics or architecting integrated relational modules with cloud infrastructure like Firebase, I love bringing code to life.
          </p>

          {/* Enhanced Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="bg-[#161b22] border border-[#30363d]/60 p-5 rounded-2xl transition-all duration-300 hover:border-[#58a6ff]/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(88,166,255,0.05)] group">
              <h4 className="text-3xl font-black font-mono text-[#58a6ff] transition-transform duration-300 group-hover:scale-105 origin-left">15+</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium font-mono mt-2">Built Projects</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d]/60 p-5 rounded-2xl transition-all duration-300 hover:border-[#38bdf8]/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(56,189,248,0.05)] group">
              <h4 className="text-3xl font-black font-mono text-[#38bdf8] transition-transform duration-300 group-hover:scale-105 origin-left">100%</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium font-mono mt-2">Responsive Focus</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE TECH BOX TERMINAL */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-sm">
            
            {/* Terminal Top Window Deck */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#30363d]/70 bg-[#0d1117]/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]/80 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 shadow-[0_0_8px_rgba(34,197,94,0.2)]" />
              </div>
              <span className="text-xs font-mono text-gray-500 tracking-wider">skills_manifest.json</span>
            </div>

            {/* Terminal Body Content */}
            <div className="p-6 space-y-6">
              
              {/* Core Ecosystem Array */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Favorite Tech Stack</span>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 bg-[#0d1117] border border-[#30363d]/50 rounded-xl px-3.5 py-3 hover:border-[#58a6ff]/40 hover:bg-[#1f242c] transition-all duration-200 group transform hover:scale-[1.02]"
                    >
                      <i className={`${tool.prefix || 'fa-brands'} ${tool.icon} ${tool.color} text-lg transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-xs font-mono text-gray-300 font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Strengths Section */}
              <div className="space-y-3 pt-4 border-t border-[#30363d]/40">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Professional Focus</span>
                <ul className="space-y-2.5 text-xs font-mono text-gray-400">
                  <li className="flex items-center gap-2 group transition-colors duration-150 hover:text-white">
                    <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span> Single Page Application (SPA) Design
                  </li>
                  <li className="flex items-center gap-2 group transition-colors duration-150 hover:text-white">
                    <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span> Component-Driven UI Architectures
                  </li>
                  <li className="flex items-center gap-2 group transition-colors duration-150 hover:text-white">
                    <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span> State Management & Async Data Streams
                  </li>
                  <li className="flex items-center gap-2 group transition-colors duration-150 hover:text-white">
                    <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span> Performance Tuning & SEO Optimization
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}