export default function About() {
  const tools = [
    { name: "React.js", icon: "fa-react", color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", icon: "fa-css3-alt", color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", icon: "fa-js", color: "text-[#f7df1e]" },
    { name: "HTML5 & CSS3", icon: "fa-html5", color: "text-[#ea580c]" },
    { name: "Firebase / Firestore", icon: "fa-fire", color: "text-[#f59e0b]" },
    { name: "Git & GitHub", icon: "fa-github", color: "text-[#f3f4f6]" }
  ];

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-1/3 right-1/10 w-64 h-64 bg-[#58a6ff]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION TITLE HEADER */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Biography</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">
          About <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Me</span>
        </h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      {/* CORE CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: THE STORIES & BIO */}
        <div className="lg:col-span-7 space-y-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base">
          <p>
            Hello! I am a passionate <span className="text-white font-medium">Frontend Web Developer</span> dedicated to building highly interactive, responsive, and visually pixel-perfect web applications. My development philosophy revolves around clean structure, optimized component lifecycles, and beautiful user interfaces that don't compromise performance.
          </p>
          <p>
            Currently, I am expanding my deep technical engineering skills at <span className="text-white font-medium">Saylani Mass IT Training (SMIT)</span>, focusing heavily on modern app engineering, and matching it with formal software architecture studies at <span className="text-white font-medium">Jinnah Polytechnic Institute</span>.
          </p>
          <p>
            With a comprehensive certificate base from the <span className="text-[#58a6ff] font-medium">Meta Front-End Developer</span> program, I thrive on writing modular, self-documenting code. Whether I am modeling high-end dark aesthetics or architecting integrated relational modules with cloud infrastructure like Firebase, I love bringing code to life.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-[#161b22] border border-[#30363d]/60 p-4 rounded-xl">
              <h4 className="text-2xl font-black font-mono text-[#58a6ff]">15+</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium font-mono mt-1">Built Projects</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d]/60 p-4 rounded-xl">
              <h4 className="text-2xl font-black font-mono text-[#58a6ff]">100%</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-medium font-mono mt-1">Responsive Focus</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE TECH BOX TERMINAL */}
        <div className="lg:col-span-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-xl">
            
            {/* Terminal Top Window Deck */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]/70 bg-[#0d1117]/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">skills_manifest.json</span>
            </div>

            {/* Terminal Body content */}
            <div className="p-6 space-y-6">
              
              {/* Core Ecosystem Array */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Favorite Tech Stack</span>
                <div className="grid grid-cols-2 gap-2.5">
                  {tools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 bg-[#0d1117] border border-[#30363d]/50 rounded-xl px-3 py-2.5 hover:border-[#58a6ff]/30 transition-colors duration-200"
                    >
                      <i className={`fa-brands ${tool.icon} ${tool.color} text-base`} />
                      <span className="text-xs font-mono text-gray-300 font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Strengths Section */}
              <div className="space-y-3 pt-2 border-t border-[#30363d]/40">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Professional Focus</span>
                <ul className="space-y-2 text-xs font-mono text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-[#58a6ff]">&gt;</span> Single Page Application (SPA) Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#58a6ff]">&gt;</span> Component-Driven UI Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#58a6ff]">&gt;</span> State Management & Asynchronous Data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#58a6ff]">&gt;</span> Performance Tuning & SEO Optimization
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