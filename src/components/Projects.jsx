import { FiGithub, FiExternalLink, FiFolder, FiCpu } from 'react-icons/fi';

export default function Projects() {
  // Your real-world production projects & ongoing builds
  const projectsData = [
    {
      title: "Calculator",
      subtitle: "Calculator Application",
      description: "A dynamic, responsive calculator interface crafted with clean HTML, vanilla CSS, and JavaScript ES6 logic.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/hussain-afk/Calculator-Using-JS",
      liveUrl: "https://todo-app-swgx.vercel.app/"
    },
    {
      title: "Todo App",
      subtitle: "Todo List Application",
      description: "A dynamic, responsive to-do list interface crafted with clean HTML, vanilla CSS, and JavaScript ES6 logic. Features include dark mode functionality, local storage synchronization, and an intuitive user experience for daily task management.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/hussain-afk/Todo-App",
      liveUrl: "https://todo-app-beta-six-17.vercel.app"
    },
    {
      title: "BG Remover",
      subtitle: "Background Remover Application",
      description: "A high-performance, browser-based image processing utility built with Vanilla JavaScript, CSS, and semantic HTML5. The application delivers a seamless user experience for background removal tasks through modern drag-and-drop functionality and dynamic image manipulation.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/hussain-afk/BG-Remover",
      liveUrl: "https://bg-remover-lilac-ten.vercel.app/"
    }
  ];

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      
      {/* BACKGROUND DECORATIVE ELEMENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* SECTION HEADER BLOCK */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Engineering Work</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">
          Featured <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Projects</span>
        </h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      {/* DYNAMIC LAYOUT GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="group relative flex flex-col justify-between bg-[#161b22] border border-[#30363d] rounded-2xl p-6 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#58a6ff]/40 hover:shadow-2xl"
          >
            {/* Ambient accent top glow border line that displays on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* TOP BAR ACTION CONTENT */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 transition-colors duration-300">
                  <FiFolder className="w-5 h-5" />
                </div>
                
                {/* Repository and live view hyperlink assets */}
                <div className="flex items-center gap-3 text-gray-400">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-1 hover:text-white transition-colors duration-200"
                    title="Source Repository Code"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-1 hover:text-[#58a6ff] transition-colors duration-200"
                    title="Live Application Deployment"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* PROJECT TYPOGRAPHY METRICS */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                  <FiCpu className="text-[#58a6ff]/60" /> {project.subtitle}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>
            </div>

            {/* LOWER BADGE STACK ELEMENT CONTAINER */}
            <div className="mt-6 pt-4 border-t border-[#30363d]/40 flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx}
                  className="px-2.5 py-1 bg-[#0d1117] border border-[#30363d]/60 text-gray-400 font-mono text-[10px] rounded-md group-hover:text-gray-300 group-hover:border-[#30363d]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}