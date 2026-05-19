import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCpu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectsData = [
    {
      title: "Calculator",
      subtitle: "Utility Interface Engine",
      description: "A high-performance, dynamic computing module delivering precise structural computational rendering built with advanced ES6 structural architecture and optimized functional event states.",
      tags: ["HTML5", "CSS3", "JavaScript ES6"],
      githubUrl: "https://github.com/hussain-afk/Calculator-Using-JS",
      liveUrl: "https://todo-app-swgx.vercel.app/"
    },
    {
      title: "Todo App",
      subtitle: "State System Management",
      description: "A robust task matrix featuring fluid persistent dark-mode layers, structural local storage sync interceptors, and high-end layout animations keeping client workflows completely optimized.",
      tags: ["Web Architecture", "Local Storage", "Vanilla Stack"],
      githubUrl: "https://github.com/hussain-afk/Todo-App",
      liveUrl: "https://todo-app-beta-six-17.vercel.app"
    },
    {
      title: "BG Remover",
      subtitle: "Asynchronous Asset Pipeline",
      description: "A production-grade algorithmic canvas rendering interface enabling immediate background extractions via low-latency drag-and-drop actions and fluid client handling.",
      tags: ["Image API", "DOM Graphics", "Responsive Logic"],
      githubUrl: "https://github.com/hussain-afk/BG-Remover",
      liveUrl: "https://bg-remover-lilac-ten.vercel.app/"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)] py-8 flex flex-col justify-center select-none overflow-hidden box-border">
      
      {/* GLOW BACKGROUND EFFECT MATRIX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-[#58a6ff]/5 rounded-full blur-[60px] sm:blur-[160px] pointer-events-none" />

      <div className="w-full max-w-xl mx-auto flex flex-col justify-center px-4 z-10 box-border">
        
        {/* HEADER CONTROL BLOCK */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between text-center sm:text-left gap-4">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-[#58a6ff] block mb-1 sm:mb-2">// Engineering Work</span>
            <h2 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tight text-white">
              Featured <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">Projects</span>
            </h2>
            <div className="h-[3px] w-16 sm:w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-2 sm:mt-4 rounded-full mx-auto sm:mx-0" />
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="flex items-center justify-center gap-3 shrink-0">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              title="Previous Project"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              title="Next Project"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D STACKED CAROUSEL TRACK */}
        <div className="relative w-full h-[380px] sm:h-[400px] flex items-center justify-center perspective-[1000px]">
          {projectsData.map((project, index) => {
            // Calculate relative offset metrics to stack depth layers properly
            let offset = index - activeIndex;
            if (offset < -1) offset += projectsData.length;
            if (offset > 1) offset -= projectsData.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = isCenter || isLeft || isRight;

            if (!isVisible) return null;

            // Generate conditional Tailwind inline styles depending on stack layer positions
            let transformStyles = "scale-100 z-30 opacity-100 translate-x-0";
            if (isLeft) transformStyles = "-translate-x-[15%] sm:-translate-x-[25%] scale-90 z-10 opacity-40 pointer-events-none rotate-y-[15deg]";
            if (isRight) transformStyles = "translate-x-[15%] sm:translate-x-[25%] scale-90 z-10 opacity-40 pointer-events-none rotate-y-[-15deg]";

            return (
              <div 
                key={index} 
                className={`absolute w-full max-w-[450px] bg-[#161b22]/95 border rounded-2xl p-5 sm:p-7 shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between h-full backdrop-blur-md box-border ${transformStyles} ${
                  isCenter ? 'border-[#58a6ff]/60 shadow-[0_15px_35px_rgba(88,166,255,0.05)]' : 'border-[#30363d]'
                }`}
              >
                {/* Active Border Neon Glow Accent Line */}
                {isCenter && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/50 to-transparent" />
                )}

                {/* Index Watermark Graphic */}
                <span className="absolute -bottom-4 -right-2 font-mono font-black text-6xl sm:text-8xl text-[#30363d]/10 select-none leading-none">
                  0{index + 1}
                </span>

                <div className="w-full flex flex-col justify-between flex-1">
                  <div>
                    {/* ACTIONS TOP BAR */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 shrink-0 ${
                        isCenter ? 'text-[#58a6ff] border-[#58a6ff]/30' : ''
                      }`}>
                        <FiFolder className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-400 z-20">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-1.5 rounded-lg hover:text-white hover:bg-[#30363d]/40 transition-all duration-200"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-1.5 rounded-lg hover:text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all duration-200"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* TEXT INFORMATION NODES */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                        <FiCpu className={`text-[#58a6ff]/60 ${isCenter ? 'animate-spin-slow' : ''}`} /> {project.subtitle}
                      </span>
                      <h3 className={`text-lg sm:text-2xl font-black tracking-tight text-white transition-colors ${
                        isCenter ? 'text-[#58a6ff]' : ''
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed pt-1 text-left line-clamp-5 sm:line-clamp-none">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* SPECIFIC SKILL TECH TAGS */}
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-[#30363d]/40 flex flex-wrap gap-1.5 z-20">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-2 py-0.5 sm:py-1 bg-[#0d1117] border border-[#30363d]/60 text-gray-400 font-mono text-[9px] sm:text-[10px] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}