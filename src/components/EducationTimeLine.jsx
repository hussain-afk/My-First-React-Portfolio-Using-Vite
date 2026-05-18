export default function Education() {
  // Your professional academic milestones and certifications
  const educationData = [
    {
      institution: "Meta (Coursera)",
      degree: "Meta Front-End Developer Professional Certificate",
      duration: "2026",
      status: "Completed",
      description: "Rigorous professional training focused on advanced frontend engineering principles. Mastered deep concepts including complex React application architecture, state management, component lifecycles, user experience design foundations, and comprehensive deployment pipelines.",
      tags: ["React.js", "UX UI Foundations", "Version Control", "SPA Architecture"]
    },
    {
      institution: "Saylani Mass IT Training (SMIT)",
      degree: "Web & Mobile Application Development",
      duration: "Present",
      status: "In Progress",
      description: "Intensive, modern stack development program. Deep diving into scalable web application infrastructure, modern asynchronous JavaScript (ES6+), component workflows, state management libraries, and real-time backend integrations with cloud databases like Firebase.",
      tags: ["JavaScript ES6+", "React & Tailwind", "Firebase Auth", "Firestore"]
    },
    {
      institution: "Jinnah Polytechnic Institute",
      degree: "Diploma of Associate Engineering (DAE) — Software Technology",
      duration: "Present",
      status: "In Progress",
      description: "Core academic grounding in computer science and software systems architecture. Covering foundational engineering metrics, object-oriented concepts, relational databases, structural logic flow, and software engineering methodologies.",
      tags: ["Software Engineering", "OOP Logic", "Database Systems", "Computing Basics"]
    }
  ];

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      
      {/* SECTION TITLE HEADER */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Academic Pathway</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">
          Education & <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Certifications</span>
        </h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      {/* TIMELINE ARCHITECTURE CORE TRACK */}
      <div className="relative max-w-4xl mx-auto lg:mx-0 pl-4 sm:pl-8 space-y-12 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-gradient-to-b before:from-[#58a6ff]/50 before:via-[#30363d] before:to-transparent">
        
        {educationData.map((edu, index) => (
          <div key={index} className="relative group pl-6 sm:pl-10">
            
            {/* TIMELINE TIMING NODE DOT */}
            <span className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 bg-[#0d1117] border-2 border-[#30363d] rounded-full z-10 transition-all duration-300 group-hover:border-[#58a6ff] group-hover:shadow-[0_0_10px_#58a6ff]" />

            {/* MAIN DATA BLOCK CARD */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#58a6ff]/30 hover:shadow-2xl">
              
              {/* Card Accent Top Bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#58a6ff]/0 via-[#58a6ff]/20 to-[#58a6ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Meta Row: Timeline & Status Flag */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="fa-regular fa-calendar-days text-[#58a6ff]" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border 
                    ${edu.status === 'Completed' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                      : 'bg-[#58a6ff]/10 border-[#58a6ff]/20 text-[#58a6ff]'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Main Heading Text */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-mono font-medium text-gray-400 flex items-center gap-2">
                    <i className="fa-solid fa-building-columns text-gray-600 text-xs" />
                    {edu.institution}
                  </p>
                </div>

                {/* Sub Description */}
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {edu.description}
                </p>

                {/* Technical Skills / Focus Badges Tag Block */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {edu.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-[#0d1117] border border-[#30363d] text-gray-400 font-mono text-[11px] rounded-lg transition-colors group-hover:border-[#30363d]/80 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}