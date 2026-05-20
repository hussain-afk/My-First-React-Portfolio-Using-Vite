import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Typewriter from "./TypeWriter";
import { ThemeContext } from "./themeContext/context";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <section
      style={{ marginTop: "-40px", marginBottom: "-80px" }}
      className="relative flex items-center justify-center overflow-hidden py-10"
    >
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#58a6ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-60 h-60 bg-[#58a6ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div
            className={`inline-flex items-center gap-2.5 border px-4 py-2 rounded-full mx-auto lg:mx-0 ${
              isDark
                ? "bg-[#161b22] border-[#30363d]"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span
              className={`text-[10px] uppercase font-mono tracking-widest font-bold ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Open to new opportunities
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-mono tracking-[0.25em] text-[#58a6ff] uppercase font-semibold">
              Hi, my name is
            </p>

            <h1
              className={`text-4xl sm:text-5xl xl:text-6xl font-black italic tracking-tight uppercase leading-none ${
                isDark ? "text-white" : "text-gray-950"
              }`}
            >
              Muhammad <br />
              <span className="text-[#58a6ff] not-italic font-sans tracking-tighter normal-case font-black drop-shadow-[0_0_30px_rgba(88,166,255,0.2)]">
                Hussain Memon
              </span>
            </h1>

            <h2
              className={`text-xl sm:text-2xl font-mono font-medium mt-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              &lt;
              <Typewriter
                words={["Frontend Web Developer"]}
                typingSpeed={200}
                deletingSpeed={50}
                pauseDuration={1500}
              />{" "}
              /&gt;
            </h2>
          </div>

          <p
            className={`font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Specializing in building clean, responsive user interfaces and
            robust Single Page Applications (SPAs). Focused on crafting modular
            code using React.js, Tailwind CSS, and modern web architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] active:scale-98 text-center"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className={`w-full sm:w-auto px-8 py-3.5 border font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 active:scale-98 text-center ${
                isDark
                  ? "bg-[#161b22] text-white border-[#30363d] hover:bg-[#161b22]/80 hover:border-[#58a6ff]/50"
                  : "bg-white text-gray-950 border-gray-300 hover:border-[#58a6ff]/50"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          <div
            className={`pt-8 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            <span
              className={`uppercase tracking-widest border-r pr-4 ${
                isDark ? "border-[#30363d]" : "border-gray-300"
              }`}
            >
              Tech Core
            </span>

            <div className="flex items-center gap-4 text-sm">
              <FaReact className="text-[#58a6ff]" title="React" />
              <FaJs className="text-[#58a6ff]" title="JavaScript" />
              <FaCss3Alt className="text-[#58a6ff]" title="CSS3" />
              <FaHtml5 className="text-[#58a6ff]" title="HTML5" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div
            className={`relative mx-auto max-w-md lg:max-w-none w-full border rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#58a6ff]/30 group ${
              isDark
                ? "bg-[#161b22] border-[#30363d]"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/40 to-transparent" />

            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                isDark
                  ? "border-[#30363d]/70 bg-[#0d1117]/50"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
              </div>

              <span
                className={`text-[10px] font-mono tracking-wider ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}
              >
                MuhammadHussainMemon_Profile.js
              </span>
            </div>

            <div
              className={`p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="text-[#ff79c6]">const</span> developer = &#123;
              <div className="pl-4">
                firstName: <span className="text-[#d97706]">'Muhammad'</span>,
                <br />
                lastName: <span className="text-[#d97706]">'Hussain Memon'</span>,
                <br />
                role: <span className="text-[#d97706]">'Frontend Web Developer'</span>,
                <br />
                location: <span className="text-[#d97706]">'Karachi, PK'</span>,
                <br />
                skills: <span className="text-[#8b5cf6]">[</span>
                <div className="pl-4 text-[#0284c7]">
                  'HTML5', 'CSS3', 'JavaScript ES6+',
                  <br />
                  'React.js', 'Tailwind CSS', 'Firebase'
                </div>
                <span className="text-[#8b5cf6]">]</span>,
                <br />
                passion: <span className="text-[#d97706]">'Clean Code & Beautiful UI'</span>,
                <br />
                status: <span className="text-[#16a34a]">true</span>
              </div>
              &#125;;

              <div
                className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark
                    ? "border-[#30363d]/40 text-gray-500"
                    : "border-gray-300 text-gray-600"
                }`}
              >
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