import { Link } from 'react-router-dom';
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import Typewriter from './TypeWriter';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-10">
      
      {/* BACKGROUND EFFECTS / GLOWS */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#58a6ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-60 h-60 bg-[#58a6ff]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* CORE GRID SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: HERO TEXT & ACTIONS */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#161b22] border border-[#30363d] px-4 py-2 rounded-full mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-bold">
              Open to new opportunities
            </span>
          </div>

          {/* Typography Headings */}
          <div className="space-y-2">
            <p className="text-sm font-mono tracking-[0.25em] text-[#58a6ff] uppercase font-semibold">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black italic tracking-tight uppercase text-white leading-none">
              Muhammad <br />
              <span className="text-[#58a6ff] not-italic font-sans tracking-tighter normal-case font-black drop-shadow-[0_0_30px_rgba(88,166,255,0.2)]">
                Hussain Memon
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-mono font-medium text-gray-400 mt-2">
              &lt;Frontend Web Developer /&gt;
            </h2>
          </div>

          {/* Description Block */}
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">

            <Typewriter 
            words={["Specializing in building clean, responsive user interfaces and robust Single Page Applications (SPAs). Focused on crafting modular code using React.js, Tailwind CSS, and modern web architectures."]} 
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={1500}
          />

          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] active:scale-98 text-center"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#161b22] text-white border border-[#30363d] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#161b22]/80 hover:border-[#58a6ff]/50 active:scale-98 text-center"
            >
              Let's Talk
            </Link>
          </div>

          {/* Simple Stack Snippet */}
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-xs font-mono">
            <span className="uppercase tracking-widest border-r border-[#30363d] pr-4">Tech Core</span>
            <div className="flex items-center gap-4 text-sm">
              <FaReact className="text-[#58a6ff]" title="React" />
              <FaJs className="text-[#58a6ff]" title="JavaScript" />
              <FaCss3Alt className="text-[#58a6ff]" title="CSS3" />
              <FaHtml5 className="text-[#58a6ff]" title="HTML5" />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CYBERPUNK CODE CONTAINER CARD */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none w-full bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#58a6ff]/30 group">
            
            {/* Top Light Accent bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/40 to-transparent" />
            
            {/* Code Window Header / Windows Dots */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]/70 bg-[#0d1117]/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">MuhammadHussainMemon_Profile.js</span>
            </div>

            {/* Code Output Window */}
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300">
              <span className="text-[#ff79c6]">const</span> developer = &#123;
              <div className="pl-4">
                firstName: <span className="text-[#f1fa8c]">'Muhammad'</span>,
                <br />
                lastName: <span className="text-[#f1fa8c]">'Hussain Memon'</span>,
                <br />
                role: <span className="text-[#f1fa8c]">'Frontend Web Developer'</span>,
                <br />
                location: <span className="text-[#f1fa8c]">'Karachi, PK'</span>,
                <br />
                skills: <span className="text-[#bd93f9]">[</span>
                <div className="pl-4 text-[#8be9fd]">
                  'HTML5', 'CSS3', 'JavaScript ES6+',
                  <br />
                  'React.js', 'Tailwind CSS', 'Firebase'
                </div>
                <span className="text-[#bd93f9]">]</span>,
                <br />
                passion: <span className="text-[#f1fa8c]">'Clean Code & Beautiful UI'</span>,
                <br />
                status: <span className="text-[#50fa7b]">true</span>
              </div>
              &#125;;
              
              {/* Decorative terminal pointer */}
              <div className="mt-4 pt-3 border-t border-[#30363d]/40 flex items-center justify-between text-gray-500 text-[11px]">
                <span>// Console output ready</span>
                <span className="text-[#58a6ff] animate-pulse">■</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}