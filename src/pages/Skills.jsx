import { 
  Code2, 
  Layers, 
  Terminal, 
  CheckSquare, 
  GitBranch, 
  Users, 
  Cpu, 
  Smartphone,
  Globe
} from 'lucide-react';

export default function Skills() {
  // 1. Core Development Stack (Using Lucide representations or custom labels)
  const coreStack = [
    { name: "React.js", level: "Advanced", icon: Code2, color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", level: "Expert", icon: Layers, color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", level: "Advanced", icon: Terminal, color: "text-[#f7df1e]" },
    { name: "HTML5", level: "Expert", icon: Code2, color: "text-[#ea580c]" },
    { name: "CSS3", level: "Expert", icon: Layers, color: "text-[#2563eb]" },
    { name: "Firebase Backend", level: "Intermediate", icon: Globe, color: "text-[#f59e0b]" },
  ];

  // 2. Systems, IDEs & AI Environments
  const toolStack = [
    { name: "Git", icon: GitBranch, color: "text-[#f05032]" },
    { name: "GitHub Workspace", icon: Code2, color: "text-[#f3f4f6]" },
    { name: "VS Code Ecosystem", icon: Terminal, color: "text-[#007acc]" },
    { name: "Environment Routing", icon: Cpu, color: "text-[#169749]" },
  ];

  // 3. Workflow Priorities & Principles
  const methodologies = [
    { title: "Single Page Application (SPA) Design", desc: "Decoupled rendering architectures via React Router Dom.", icon: Layers },
    { title: "Component-Driven UI Design", desc: "Writing modular, scalable, and highly reusable code elements.", icon: Code2 },
    { title: "Responsive Layout Architecture", desc: "Ensuring 100% pixel-perfect fluid execution across all mobile viewports.", icon: Smartphone },
    { title: "Git Branching Workflow", desc: "Maintaining clean semantic commit patterns and isolated pull merges.", icon: GitBranch },
  ];

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      
      {/* BACKGROUND GRAPHIC GLOW ACCENT */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#58a6ff]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* SECTION HEADER BLOCK */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Technical Capabilities</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">
          My Tech <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Ecosystem</span>
        </h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="space-y-12 max-w-5xl">
        
        {/* CATEGORY 1: CORE ENGINE POWER */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest">
            <Terminal className="text-[#58a6ff] w-4 h-4" />
            <span>// Core Tech Stack</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {coreStack.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-[#161b22] border border-[#30363d] rounded-2xl p-5 transition-all duration-300 hover:border-[#58a6ff]/30 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComp className={`w-8 h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-gray-500 bg-[#0d1117] border border-[#30363d] px-2 py-0.5 rounded-md">
                      {tech.level}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors">
                    {tech.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* CATEGORY 2: ENVIRONMENT TOOLING & INTEGRATIONS */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest">
            <CheckSquare className="text-[#58a6ff] w-4 h-4" />
            <span>// Systems & Tools</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolStack.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-[#161b22]/60 border border-[#30363d]/70 hover:border-[#58a6ff]/20 rounded-xl p-4 flex items-center gap-3 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0d1117] border border-[#30363d]/60 text-gray-400 group-hover:text-white transition-colors">
                    <IconComp className={`w-5 h-5 ${tool.color}`} />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-300 tracking-wide">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CATEGORY 3: ARCHITECTURAL METHODOLOGIES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest">
            <Users className="text-[#58a6ff] w-4 h-4" />
            <span>// Engineering Priorities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methodologies.map((meth, idx) => {
              const IconComp = meth.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-[#161b22] border border-[#30363d] rounded-2xl p-6 flex gap-4 transition-all hover:border-[#58a6ff]/20"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-[#58a6ff] transition-colors">
                      {meth.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {meth.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}