import { useContext } from "react";
import { ThemeContext } from "./themeContext/context";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const tools = [
    { name: "React.js", icon: "fa-react", color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", icon: "fa-css3-alt", color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", icon: "fa-js", color: "text-[#f7df1e]" },
    { name: "HTML5 & CSS3", icon: "fa-html5", color: "text-[#ea580c]" },
    { name: "Firebase / Firestore", icon: "fa-fire", color: "text-[#f59e0b]", prefix: "fa-solid" },
    { name: "Git & GitHub", icon: "fa-github", color: "text-[#f3f4f6]" }
  ];

  return (
    <section className="relative min-h-screen py-12 flex flex-col justify-center animate-fadeIn select-none">
      <div className="absolute top-1/4 right-1/10 w-72 h-72 bg-[#58a6ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mb-14 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#58a6ff] block mb-2">
          Biography
        </span>

        <h2
          className={`text-4xl sm:text-5xl font-black italic uppercase tracking-tight ${
            isDark ? "text-white" : "text-gray-950"
          }`}
        >
          About{" "}
          <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">
            Me
          </span>
        </h2>

        <div className="h-[3px] w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-4 rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div
          className={`lg:col-span-7 space-y-6 font-light leading-relaxed text-sm sm:text-base ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-justify sm:text-left">
            Hello! I am a passionate{" "}
            <span className={isDark ? "text-white font-medium" : "text-gray-950 font-medium"}>
              Frontend Web Developer
            </span>{" "}
            dedicated to building highly interactive, responsive, and visually pixel-perfect web applications. My development philosophy revolves around clean structure, optimized component lifecycles, and beautiful user interfaces that don't compromise performance.
          </p>

          <p className="text-justify sm:text-left">
            Currently, I am expanding my deep technical engineering skills at{" "}
            <span className={isDark ? "text-white font-medium" : "text-gray-950 font-medium"}>
              Saylani Mass IT Training (SMIT)
            </span>
            , focusing heavily on modern app engineering, and matching it with formal software architecture studies at{" "}
            <span className={isDark ? "text-white font-medium" : "text-gray-950 font-medium"}>
              Jinnah Polytechnic Institute
            </span>
            .
          </p>

          <p className="text-justify sm:text-left">
            With a comprehensive certificate base from the{" "}
            <span className="text-[#58a6ff] font-medium">
              Meta Front-End Developer
            </span>{" "}
            program, I thrive on writing modular, self-documenting code. Whether I am modeling high-end dark aesthetics or architecting integrated relational modules with cloud infrastructure like Firebase, I love bringing code to life.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <div
              className={`border p-5 rounded-2xl transition-all duration-300 hover:border-[#58a6ff]/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(88,166,255,0.05)] group ${
                isDark
                  ? "bg-[#161b22] border-[#30363d]/60"
                  : "bg-white border-gray-300"
              }`}
            >
              <h4 className="text-3xl font-black font-mono text-[#58a6ff] transition-transform duration-300 group-hover:scale-105 origin-left">
                15+
              </h4>
              <p className={`text-xs uppercase tracking-wider font-medium font-mono mt-2 ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}>
                Built Projects
              </p>
            </div>

            <div
              className={`border p-5 rounded-2xl transition-all duration-300 hover:border-[#38bdf8]/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(56,189,248,0.05)] group ${
                isDark
                  ? "bg-[#161b22] border-[#30363d]/60"
                  : "bg-white border-gray-300"
              }`}
            >
              <h4 className="text-3xl font-black font-mono text-[#38bdf8] transition-transform duration-300 group-hover:scale-105 origin-left">
                100%
              </h4>
              <p className={`text-xs uppercase tracking-wider font-medium font-mono mt-2 ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}>
                Responsive Focus
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div
            className={`border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm ${
              isDark
                ? "bg-[#161b22] border-[#30363d] shadow-black/40"
                : "bg-white border-gray-300 shadow-gray-300/40"
            }`}
          >
            <div
              className={`flex items-center justify-between px-5 py-3.5 border-b ${
                isDark
                  ? "border-[#30363d]/70 bg-[#0d1117]/70"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]/80 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 shadow-[0_0_8px_rgba(34,197,94,0.2)]" />
              </div>

              <span className={`text-xs font-mono tracking-wider ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}>
                skills_manifest.json
              </span>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <span className={`text-xs font-mono uppercase tracking-widest block ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}>
                  // Favorite Tech Stack
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 border rounded-xl px-3.5 py-3 hover:border-[#58a6ff]/40 transition-all duration-200 group transform hover:scale-[1.02] ${
                        isDark
                          ? "bg-[#0d1117] border-[#30363d]/50 hover:bg-[#1f242c]"
                          : "bg-gray-100 border-gray-300 hover:bg-white"
                      }`}
                    >
                      <i className={`${tool.prefix || "fa-brands"} ${tool.icon} ${tool.color} text-lg transition-transform duration-300 group-hover:scale-110`} />
                      <span className={`text-xs font-mono font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`space-y-3 pt-4 border-t ${
                isDark ? "border-[#30363d]/40" : "border-gray-300"
              }`}>
                <span className={`text-xs font-mono uppercase tracking-widest block ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}>
                  // Professional Focus
                </span>

                <ul className={`space-y-2.5 text-xs font-mono ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {[
                    "Single Page Application (SPA) Design",
                    "Component-Driven UI Architectures",
                    "State Management & Async Data Streams",
                    "Performance Tuning & SEO Optimization",
                  ].map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 group transition-colors duration-150 ${
                        isDark ? "hover:text-white" : "hover:text-gray-950"
                      }`}
                    >
                      <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">
                        &gt;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}