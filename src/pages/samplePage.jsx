import { useState, useEffect, useRef } from "react";
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FiGithub, FiExternalLink, FiFolder, FiCpu, FiChevronLeft, FiChevronRight, FiAward, FiTarget, FiActivity, FiArrowUpRight, FiZap } from "react-icons/fi";
import { Code2, Layers, Terminal, CheckSquare, GitBranch, Users, Cpu, Smartphone, Globe, Mail, Send, CheckCircle2, MessageSquare, MapPin } from "lucide-react";
import { HiOutlineHome, HiOutlineAcademicCap, HiOutlineUser, HiOutlineCode, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineMail } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ─── TYPEWRITER ─── */
function Typewriter({ words = ["Frontend Developer"], typingSpeed = 150, deletingSpeed = 75, pauseDuration = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];
    if (!isDeleting) {
      timer = setTimeout(() => setCurrentText(fullWord.substring(0, currentText.length + 1)), typingSpeed);
      if (currentText === fullWord) timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else {
      timer = setTimeout(() => setCurrentText(fullWord.substring(0, currentText.length - 1)), deletingSpeed);
      if (currentText === "") { setIsDeleting(false); setCurrentWordIndex((p) => (p + 1) % words.length); }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span style={{ fontSize: "20px", fontWeight: "bold", color: "#57bcff", borderRight: "3px solid #010eff", paddingRight: "4px", animation: "blink 0.75s step-end infinite" }}>
      {currentText}
      <style>{`@keyframes blink { from, to { border-color: transparent } 50% { border-color: #646cff; } }`}</style>
    </span>
  );
}

/* ─── PRELOADER ─── */
function Preloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      const unmountTimer = setTimeout(() => { setIsDone(true); if (onComplete) onComplete(); }, 1100);
      return () => clearTimeout(unmountTimer);
    }, 3000);
    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div id="loader" className={`fixed inset-0 z-[10000] flex items-center justify-center bg-transparent pointer-events-none select-none ${isExiting ? "loader-hidden" : ""}`}>
      <div className="ldr-grid absolute inset-0 pointer-events-none z-0" />
      <div className={`ldr-panel absolute left-0 w-full h-[50%] bg-[#0d1117] transition-transform duration-[1100ms] will-change-transform pointer-events-auto z-[1] top-0 ${isExiting ? "-translate-y-full" : "translate-y-0"}`} />
      <div className={`ldr-panel absolute left-0 w-full h-[50%] bg-[#0d1117] transition-transform duration-[1100ms] will-change-transform pointer-events-auto z-[1] bottom-0 ${isExiting ? "translate-y-full" : "translate-y-0"}`} />
      <div className={`ldr-content relative z-[2] text-center px-8 transition-all duration-500 ${isExiting ? "opacity-0 -translate-y-5 scale-95 invisible" : "opacity-100"}`}>
        <div className="ldr-badge inline-flex items-center gap-2 text-[9px] font-extrabold tracking-[0.5em] uppercase text-[#58a6ff] border border-[#58a6ff]/25 px-[18px] py-1.5 rounded-full mb-10 opacity-0 translate-y-3">
          <span className="ldr-badge-dot w-1.5 h-1.5 rounded-full bg-[#58a6ff]" />Welcome
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5"><span className="ldr-word ldr-word-1 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-white opacity-0 translate-y-[105%]">Muhammad</span></span>
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5"><span className="ldr-word ldr-word-2 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-[#58a6ff] opacity-0 translate-y-[105%]">Hussain</span></span>
          <span className="ldr-name-wrap overflow-hidden block leading-none mb-0.5"><span className="ldr-word ldr-word-3 inline-block font-sans font-black text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight uppercase text-white opacity-0 translate-y-[105%]">Memon</span></span>
        </div>
        <div className="ldr-line-wrap h-[2px] bg-[#58a6ff]/10 mt-8 mx-auto w-0 relative overflow-hidden"><span className="ldr-line block h-full w-full bg-gradient-to-r from-transparent via-[#58a6ff] to-transparent scale-x-0 origin-left" /></div>
        <p className="ldr-sub text-[10px] font-bold tracking-[0.45em] uppercase text-white/35 mt-7 opacity-0">Creative Frontend Developer</p>
      </div>
      <style>{`
        .ldr-grid { background-image: linear-gradient(rgba(88,166,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(88,166,255,.04) 1px,transparent 1px); background-size:50px 50px; animation:ldrGridFade 2.5s ease forwards; }
        @keyframes ldrGridFade { 0%{opacity:0} 20%,80%{opacity:1} 100%{opacity:0} }
        .ldr-badge { animation:ldrFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards; }
        .ldr-badge-dot { animation:ldrPulse 1.2s ease-in-out infinite; }
        @keyframes ldrPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(0.7)} }
        .ldr-word { animation:ldrClipUp 0.9s cubic-bezier(0.34,1.56,0.64,1) both; }
        .ldr-word-1{animation-delay:0.2s} .ldr-word-2{animation-delay:0.38s} .ldr-word-3{animation-delay:0.55s}
        @keyframes ldrClipUp { from{opacity:0;transform:translateY(105%)} to{opacity:1;transform:translateY(0)} }
        .ldr-line-wrap { animation:ldrLineExpand 0.7s cubic-bezier(0.85,0,0.15,1) 0.8s forwards; }
        @keyframes ldrLineExpand { from{width:0} to{width:280px} }
        .ldr-line { animation:ldrLineReveal 0.65s cubic-bezier(0.85,0,0.15,1) 0.9s forwards; }
        @keyframes ldrLineReveal { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .ldr-sub { animation:ldrFadeUp 0.6s ease 1.1s forwards; }
        @keyframes ldrFadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .ldr-panel { transition-timing-function:cubic-bezier(0.85,0,0.15,1); }
      `}</style>
    </div>
  );
}

/* ─── HERO SECTION ─── */
function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-10">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#58a6ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-60 h-60 bg-[#58a6ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 bg-[#161b22] border border-[#30363d] px-4 py-2 rounded-full mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-bold">Open to new opportunities</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-mono tracking-[0.25em] text-[#58a6ff] uppercase font-semibold">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black italic tracking-tight uppercase text-white leading-none">
              Muhammad <br />
              <span className="text-[#58a6ff] not-italic font-sans tracking-tighter normal-case font-black drop-shadow-[0_0_30px_rgba(88,166,255,0.2)]">Hussain Memon</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-mono font-medium text-gray-400 mt-2">
              &lt;<Typewriter words={["Frontend Web Developer"]} typingSpeed={200} deletingSpeed={50} pauseDuration={1500} /> /&gt;
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Specializing in building clean, responsive user interfaces and robust Single Page Applications (SPAs). Focused on crafting modular code using React.js, Tailwind CSS, and modern web architectures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] active:scale-98 text-center">View My Work</a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-[#161b22] text-white border border-[#30363d] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#161b22]/80 hover:border-[#58a6ff]/50 active:scale-98 text-center">Let's Talk</a>
          </div>
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
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none w-full bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#58a6ff]/30 group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/40 to-transparent" />
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]/70 bg-[#0d1117]/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">MuhammadHussainMemon_Profile.js</span>
            </div>
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300">
              <span className="text-[#ff79c6]">const</span> developer = &#123;
              <div className="pl-4">
                firstName: <span className="text-[#f1fa8c]">'Muhammad'</span>,<br />
                lastName: <span className="text-[#f1fa8c]">'Hussain Memon'</span>,<br />
                role: <span className="text-[#f1fa8c]">'Frontend Web Developer'</span>,<br />
                location: <span className="text-[#f1fa8c]">'Karachi, PK'</span>,<br />
                skills: <span className="text-[#bd93f9]">[</span>
                <div className="pl-4 text-[#8be9fd]">'HTML5', 'CSS3', 'JavaScript ES6+',<br />'React.js', 'Tailwind CSS', 'Firebase'</div>
                <span className="text-[#bd93f9]">]</span>,<br />
                passion: <span className="text-[#f1fa8c]">'Clean Code & Beautiful UI'</span>,<br />
                status: <span className="text-[#50fa7b]">true</span>
              </div>
              &#125;;
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

/* ─── ABOUT SECTION ─── */
function About() {
  const tools = [
    { name: "React.js", icon: "fa-react", color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", icon: "fa-css3-alt", color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", icon: "fa-js", color: "text-[#f7df1e]" },
    { name: "HTML5 & CSS3", icon: "fa-html5", color: "text-[#ea580c]" },
    { name: "Firebase / Firestore", icon: "fa-fire", color: "text-[#f59e0b]", prefix: "fa-solid" },
    { name: "Git & GitHub", icon: "fa-github", color: "text-[#f3f4f6]" }
  ];
  return (
    <section id="about" className="relative min-h-screen py-12 flex flex-col justify-center animate-fadeIn select-none">
      <div className="absolute top-1/4 right-1/10 w-72 h-72 bg-[#58a6ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="mb-14 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#58a6ff] block mb-2">Biography</span>
        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tight text-white">About <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">Me</span></h2>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-4 rounded-full mx-auto lg:mx-0" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base">
          <p className="text-justify sm:text-left">Hello! I am a passionate <span className="text-white font-medium">Frontend Web Developer</span> dedicated to building highly interactive, responsive, and visually pixel-perfect web applications. My development philosophy revolves around clean structure, optimized component lifecycles, and beautiful user interfaces that don't compromise performance.</p>
          <p className="text-justify sm:text-left">Currently, I am expanding my deep technical engineering skills at <span className="text-white font-medium">Saylani Mass IT Training (SMIT)</span>, focusing heavily on modern app engineering, and matching it with formal software architecture studies at <span className="text-white font-medium">Jinnah Polytechnic Institute</span>.</p>
          <p className="text-justify sm:text-left">With a comprehensive certificate base from the <span className="text-[#58a6ff] font-medium">Meta Front-End Developer</span> program, I thrive on writing modular, self-documenting code. Whether I am modeling high-end dark aesthetics or architecting integrated relational modules with cloud infrastructure like Firebase, I love bringing code to life.</p>
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
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#30363d]/70 bg-[#0d1117]/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]/80 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 shadow-[0_0_8px_rgba(34,197,94,0.2)]" />
              </div>
              <span className="text-xs font-mono text-gray-500 tracking-wider">skills_manifest.json</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Favorite Tech Stack</span>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-[#30363d]/50 rounded-xl px-3.5 py-3 hover:border-[#58a6ff]/40 hover:bg-[#1f242c] transition-all duration-200 group transform hover:scale-[1.02]">
                      <i className={`${tool.prefix || "fa-brands"} ${tool.icon} ${tool.color} text-lg transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-xs font-mono text-gray-300 font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-[#30363d]/40">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">// Professional Focus</span>
                <ul className="space-y-2.5 text-xs font-mono text-gray-400">
                  {["Single Page Application (SPA) Design", "Component-Driven UI Architectures", "State Management & Async Data Streams", "Performance Tuning & SEO Optimization"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 group transition-colors duration-150 hover:text-white">
                      <span className="text-[#58a6ff] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span> {item}
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

/* ─── EDUCATION SECTION ─── */
function Education() {
  const educationData = [
    { institution: "Meta (Coursera)", degree: "Meta Front-End Developer Professional Certificate", duration: "2026", status: "Completed", description: "Rigorous professional training focused on advanced frontend engineering principles. Mastered deep concepts including complex React application architecture, state management, component lifecycles, user experience design foundations, and comprehensive deployment pipelines.", tags: ["React.js", "UX UI Foundations", "Version Control", "SPA Architecture"] },
    { institution: "Saylani Mass IT Training (SMIT)", degree: "Web & Mobile Application Development", duration: "Present", status: "In Progress", description: "Intensive, modern stack development program. Deep diving into scalable web application infrastructure, modern asynchronous JavaScript (ES6+), component workflows, state management libraries, and real-time backend integrations with cloud databases like Firebase.", tags: ["JavaScript ES6+", "React & Tailwind", "Firebase Auth", "Firestore"] },
    { institution: "Jinnah Polytechnic Institute", degree: "Diploma of Associate Engineering (DAE) — Software Technology", duration: "Present", status: "In Progress", description: "Core academic grounding in computer science and software systems architecture. Covering foundational engineering metrics, object-oriented concepts, relational databases, structural logic flow, and software engineering methodologies.", tags: ["Software Engineering", "OOP Logic", "Database Systems", "Computing Basics"] }
  ];
  return (
    <section id="education" className="relative min-h-screen py-12 animate-fadeIn">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Academic Pathway</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">Education & <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Certifications</span></h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>
      <div className="relative max-w-4xl mx-auto lg:mx-0 pl-4 sm:pl-8 space-y-12 before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-gradient-to-b before:from-[#58a6ff]/50 before:via-[#30363d] before:to-transparent">
        {educationData.map((edu, index) => (
          <div key={index} className="relative group pl-6 sm:pl-10">
            <span className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 bg-[#0d1117] border-2 border-[#30363d] rounded-full z-10 transition-all duration-300 group-hover:border-[#58a6ff] group-hover:shadow-[0_0_10px_#58a6ff]" />
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#58a6ff]/30 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#58a6ff]/0 via-[#58a6ff]/20 to-[#58a6ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-gray-400"><i className="fa-regular fa-calendar-days text-[#58a6ff]" /><span>{edu.duration}</span></div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border ${edu.status === "Completed" ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-[#58a6ff]/10 border-[#58a6ff]/20 text-[#58a6ff]"}`}>{edu.status}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">{edu.degree}</h3>
                  <p className="text-sm font-mono font-medium text-gray-400 flex items-center gap-2"><i className="fa-solid fa-building-columns text-gray-600 text-xs" />{edu.institution}</p>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{edu.description}</p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {edu.tags.map((tag, tagIdx) => (<span key={tagIdx} className="px-3 py-1 bg-[#0d1117] border border-[#30363d] text-gray-400 font-mono text-[11px] rounded-lg transition-colors group-hover:border-[#30363d]/80 group-hover:text-gray-300">{tag}</span>))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECTS SECTION ─── */
function Projects() {
  const swiperRef = useRef(null);
  const projectsData = [
    { title: "Calculator", subtitle: "Utility Interface Engine", description: "A high-performance, dynamic computing module delivering precise structural computational rendering built with advanced ES6 structural architecture and optimized functional event states.", tags: ["HTML5", "CSS3", "JavaScript ES6"], githubUrl: "https://github.com/hussain-afk/Calculator-Using-JS", liveUrl: "https://todo-app-swgx.vercel.app/" },
    { title: "Todo App", subtitle: "State System Management", description: "A robust task matrix featuring fluid persistent dark-mode layers, structural local storage sync interceptors, and high-end layout animations keeping client workflows completely optimized.", tags: ["Web Architecture", "Local Storage", "Vanilla Stack"], githubUrl: "https://github.com/hussain-afk/Todo-App", liveUrl: "https://todo-app-beta-six-17.vercel.app" },
    { title: "BG Remover", subtitle: "Asynchronous Asset Pipeline", description: "A production-grade algorithmic canvas rendering interface enabling immediate background extractions via low-latency drag-and-drop actions and fluid client handling.", tags: ["Image API", "DOM Graphics", "Responsive Logic"], githubUrl: "https://github.com/hussain-afk/BG-Remover", liveUrl: "https://bg-remover-lilac-ten.vercel.app/" }
  ];
  return (
    <section id="projects" className="relative min-h-screen py-12 flex flex-col justify-center animate-fadeIn select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#58a6ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between text-center sm:text-left gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#58a6ff] block mb-2">// Engineering Work</span>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tight text-white">Featured <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">Projects</span></h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-4 rounded-full mx-auto sm:mx-0" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => swiperRef.current?.swiper.slidePrev()} className="w-11 h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95"><FiChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => swiperRef.current?.swiper.slideNext()} className="w-11 h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95"><FiChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="w-full px-1 sm:px-0">
        <Swiper ref={swiperRef} modules={[Autoplay]} spaceBetween={24} slidesPerView={1} loop={true} autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }} breakpoints={{ 640: { slidesPerView: 1.5 }, 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }} className="py-4 !overflow-visible">
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="group relative flex flex-col justify-between bg-[#161b22]/90 border border-[#30363d] rounded-2xl p-7 min-h-[380px] h-full overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#58a6ff]/50 hover:shadow-[0_10px_30px_rgba(88,166,255,0.06)] backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-[#30363d]/15 select-none transition-colors duration-300 group-hover:text-[#58a6ff]/5">0{index + 1}</span>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/30 transition-all duration-300 transform group-hover:rotate-6"><FiFolder className="w-5 h-5" /></div>
                    <div className="flex items-center gap-3 text-gray-400 z-10">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-white hover:bg-[#30363d]/40 transition-all duration-200"><FiGithub className="w-4 h-4" /></a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all duration-200"><FiExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5"><FiCpu className="text-[#58a6ff]/60" /> {project.subtitle}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed pt-2 text-justify sm:text-left">{project.description}</p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#30363d]/40 flex flex-wrap gap-1.5 z-10">
                  {project.tags.map((tag, tagIdx) => (<span key={tagIdx} className="px-2.5 py-1 bg-[#0d1117] border border-[#30363d]/60 text-gray-400 font-mono text-[10px] rounded-md transition-all group-hover:text-gray-200 group-hover:border-[#58a6ff]/20 group-hover:bg-[#161b22]">{tag}</span>))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ─── ACHIEVEMENTS SECTION ─── */
function Achievements() {
  const achievementsData = [
    { title: "Meta Front-End Developer Certified", category: "Certification", metric: "Credential Complete", description: "Successfully authorized professional frontend certification directly verified by Meta. Validated advanced mastery across high-level Single Page Application architectures, complex state mechanics, component lifecycles, UI rendering metrics, and deployment pipelines.", icon: FiAward, tagColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400", link: "#" },
    { title: "15+ Production-Ready Deployments", category: "Engineering milestone", metric: "100% Client Ready", description: "Architected, designed, and deployed over 15 projects with fully decoupled application states. Projects feature cross-viewport responsiveness, clean self-documenting code bases, semantic layouts, and real-time integration loops utilizing platforms like Vercel and Firebase.", icon: FiTarget, tagColor: "border-[#58a6ff]/20 bg-[#58a6ff]/10 text-[#58a6ff]", link: "#projects" },
    { title: "SMIT Hackathon Core Participant", category: "Competitive Coding", metric: "Top Tier Showcase", description: "Collaborated in fast-paced sprint development sessions at Saylani Mass IT Training. Designed and modeled functional application interfaces within extremely tight execution deadlines, showcasing advanced Tailwind custom systems layouts and robust React module interactions.", icon: FiZap, tagColor: "border-amber-500/20 bg-amber-500/10 text-amber-400", link: "#" },
    { title: "Open Source Code Contributions", category: "Community", metric: "Continuous Integration", description: "Actively contributing to local ecosystem workspaces, providing modular layout adjustments and optimized component scripts. Maintaining consistent tracking profiles on GitHub with semantic commit patterns and pristine branch architectures.", icon: FiActivity, tagColor: "border-purple-500/20 bg-purple-500/10 text-purple-400", link: "https://github.com/MuhammadHussainMemon" }
  ];
  return (
    <section id="achievements" className="relative min-h-screen py-12 animate-fadeIn">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Milestones & Recognition</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">Key <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Achievements</span></h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {achievementsData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="group relative bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:border-[#58a6ff]/40 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 transition-all duration-300 shadow-inner"><IconComponent className="w-6 h-6" /></div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-mono font-bold tracking-wider border ${item.tagColor}`}>{item.category}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold tracking-widest text-gray-500 uppercase block">// {item.metric}</span>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed pt-2">{item.description}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#30363d]/40 flex justify-end">
                <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono tracking-wider font-bold text-gray-500 group-hover:text-[#58a6ff] transition-colors duration-200 uppercase">
                  <span>Verification</span><FiArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── SKILLS SECTION ─── */
function Skills() {
  const coreStack = [
    { name: "React.js", level: "Advanced", icon: Code2, color: "text-[#58a6ff]" },
    { name: "Tailwind CSS", level: "Expert", icon: Layers, color: "text-[#38bdf8]" },
    { name: "JavaScript ES6+", level: "Advanced", icon: Terminal, color: "text-[#f7df1e]" },
    { name: "HTML5", level: "Expert", icon: Code2, color: "text-[#ea580c]" },
    { name: "CSS3", level: "Expert", icon: Layers, color: "text-[#2563eb]" },
    { name: "Firebase Backend", level: "Intermediate", icon: Globe, color: "text-[#f59e0b]" }
  ];
  const toolStack = [
    { name: "Git", icon: GitBranch, color: "text-[#f05032]" },
    { name: "GitHub Workspace", icon: Code2, color: "text-[#f3f4f6]" },
    { name: "VS Code Ecosystem", icon: Terminal, color: "text-[#007acc]" },
    { name: "Environment Routing", icon: Cpu, color: "text-[#169749]" }
  ];
  const methodologies = [
    { title: "Single Page Application (SPA) Design", desc: "Decoupled rendering architectures via React Router Dom.", icon: Layers },
    { title: "Component-Driven UI Design", desc: "Writing modular, scalable, and highly reusable code elements.", icon: Code2 },
    { title: "Responsive Layout Architecture", desc: "Ensuring 100% pixel-perfect fluid execution across all mobile viewports.", icon: Smartphone },
    { title: "Git Branching Workflow", desc: "Maintaining clean semantic commit patterns and isolated pull merges.", icon: GitBranch }
  ];
  return (
    <section id="skills" className="relative min-h-screen py-12 animate-fadeIn">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#58a6ff]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Technical Capabilities</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">My Tech <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Ecosystem</span></h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>
      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest"><Terminal className="text-[#58a6ff] w-4 h-4" /><span>// Core Tech Stack</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {coreStack.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <div key={idx} className="group relative bg-[#161b22] border border-[#30363d] rounded-2xl p-5 transition-all duration-300 hover:border-[#58a6ff]/30 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-3"><IconComp className={`w-8 h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} /><span className="text-[9px] font-mono font-bold tracking-wider uppercase text-gray-500 bg-[#0d1117] border border-[#30363d] px-2 py-0.5 rounded-md">{tech.level}</span></div>
                  <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest"><CheckSquare className="text-[#58a6ff] w-4 h-4" /><span>// Systems & Tools</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolStack.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div key={idx} className="group bg-[#161b22]/60 border border-[#30363d]/70 hover:border-[#58a6ff]/20 rounded-xl p-4 flex items-center gap-3 transition-colors duration-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0d1117] border border-[#30363d]/60 text-gray-400 group-hover:text-white transition-colors"><IconComp className={`w-5 h-5 ${tool.color}`} /></div>
                  <span className="text-xs font-mono font-medium text-gray-300 tracking-wide">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest"><Users className="text-[#58a6ff] w-4 h-4" /><span>// Engineering Priorities</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methodologies.map((meth, idx) => {
              const IconComp = meth.icon;
              return (
                <div key={idx} className="group bg-[#161b22] border border-[#30363d] rounded-2xl p-6 flex gap-4 transition-all hover:border-[#58a6ff]/20">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] transition-colors"><IconComp className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-[#58a6ff] transition-colors">{meth.title}</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{meth.desc}</p>
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

/* ─── CONTACT SECTION ─── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xdajopll", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="min-h-[70vh] flex items-center justify-center animate-fadeIn">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          <div className="flex justify-center"><div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-400"><CheckCircle2 className="w-8 h-8" /></div></div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">Transmission Received</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">Thank you for reaching out! Your message has been routed successfully. I will get back to you shortly.</p>
          </div>
          <button onClick={() => setSubmitted(false)} className="text-xs font-mono uppercase tracking-widest bg-[#0d1117] border border-[#30363d] text-[#58a6ff] hover:border-[#58a6ff]/40 px-5 py-2.5 rounded-xl transition-all">Send Another Message</button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative min-h-screen py-12 animate-fadeIn">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 text-white">Contact <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">Me</span></h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl">
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#161b22]/50 border border-[#30363d]/60 backdrop-blur-sm p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest pb-2 border-b border-[#30363d]/40"><Terminal className="text-[#58a6ff] w-4 h-4" /><span>// Routing Channels</span></div>
            {[
              { icon: Mail, label: "Email Address", value: <a href="mailto:hussainkadirmemon245@gmail.com" className="text-sm text-gray-300 hover:text-[#58a6ff] transition-colors font-medium break-all">hussainkadirmemon245@gmail.com</a> },
              { icon: MapPin, label: "Location Base", value: <p className="text-sm text-gray-300 font-medium">Karachi, Pakistan</p> },
              { icon: Globe, label: "Work Status", value: <div className="flex items-center gap-2 pt-0.5"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_#22c55e]" /><p className="text-sm text-gray-300 font-medium">Available for Projects</p></div> }
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 flex items-center justify-center transition-colors duration-300 shrink-0"><Icon className="w-4 h-4" /></div>
                <div className="space-y-0.5"><h4 className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500">{label}</h4>{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-xl relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d]/70 bg-[#0d1117]/50">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" /><span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" /><span className="w-2.5 h-2.5 rounded-full bg-[#30363d]" /></div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">secure_mailer.exe</span>
            </div>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 pointer-events-none"><Mail className="w-4 h-4" /></span>
                  <input id="email" type="email" name="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff]/50 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Message Content</label>
                <div className="relative">
                  <span className="absolute top-3.5 left-0 pl-4 flex items-start text-gray-500 pointer-events-none"><MessageSquare className="w-4 h-4" /></span>
                  <textarea id="message" name="message" required rows="5" placeholder="Type your transmission detail here..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#58a6ff]/50 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none" />
                </div>
              </div>
              <div className="pt-2">
                <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.3)] disabled:opacity-40 disabled:pointer-events-none active:scale-98">
                  <span>{submitting ? "Routing..." : "Send Message"}</span><Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SIDEBAR ─── */
function Sidebar({ isOpen, onClose, activeSection }) {
  const navLinks = [
    { id: "home", label: "Home", icon: HiOutlineHome },
    { id: "education", label: "Education", icon: HiOutlineAcademicCap },
    { id: "about", label: "About Me", icon: HiOutlineUser },
    { id: "projects", label: "Projects", icon: HiOutlineCode },
    { id: "achievements", label: "Achievements", icon: HiOutlineShieldCheck },
    { id: "skills", label: "Skills", icon: HiOutlineSparkles },
    { id: "contact", label: "Contact", icon: HiOutlineMail }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <>
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[85] md:hidden transition-opacity duration-300" />}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-[#30363d] z-[90] transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#58a6ff]/5 via-transparent to-transparent h-44" />
        <div className="relative flex flex-col h-full px-6 py-8">
          <div className="mb-10 text-center shrink-0">
            <button onClick={() => scrollTo("home")} className="relative inline-flex items-center justify-center text-xl font-black tracking-tight text-white transition-all group">
              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
              <span className="px-1 uppercase italic tracking-wide"> MHM<span className="text-[#58a6ff] drop-shadow-[0_0_8px_rgba(88,166,255,0.6)]">.</span>Dev </span>
              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
            </button>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span className="h-[1px] w-2 bg-[#30363d]" />
              <p className="text-[9px] text-[#8b949e] uppercase tracking-[0.3em] font-extrabold font-mono">Frontend Developer</p>
              <span className="h-[1px] w-2 bg-[#30363d]" />
            </div>
          </div>
          <nav className="flex-1 space-y-1 overflow-y-auto pr-1 select-none">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button key={link.id} onClick={() => scrollTo(link.id)} className={`relative group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 border w-full text-left ${isActive ? "bg-[#161b22] text-white font-medium border-[#30363d]" : "text-gray-400 border-transparent hover:text-white hover:bg-[#161b22]/50"}`}>
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#58a6ff] rounded-full transition-all duration-300 ${isActive ? "h-6 shadow-[0_0_8px_#58a6ff]" : "h-0 group-hover:h-4"}`} />
                  <IconComponent className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-[#58a6ff]" : "text-gray-500 group-hover:text-[#58a6ff]"}`} />
                  <span className="tracking-wide text-xs uppercase font-semibold font-mono">{link.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#30363d]/50 flex flex-col items-center gap-2 shrink-0">
            <div className="flex items-center gap-2.5 bg-[#161b22] px-4 py-2 rounded-full border border-[#30363d]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_#22c55e]" />
              <span className="text-[9px] text-[#8b949e] uppercase tracking-widest font-extrabold font-mono">Available For Work</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ─── ROOT APP ─── */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isLoading || isSidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isLoading, isSidebarOpen]);

  useEffect(() => {
    const sections = ["home", "education", "about", "projects", "achievements", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(id); }, { threshold: 0.3 });
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-[#0d1117] text-white font-sans antialiased flex selection:bg-[#58a6ff]/30 selection:text-white overflow-x-hidden">
        {!isLoading && (
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fixed top-5 right-5 z-[100] md:hidden bg-[#161b22]/90 backdrop-blur-md border border-[#30363d] text-[#58a6ff] p-3 rounded-xl shadow-2xl transition-all active:scale-95 hover:border-[#58a6ff]/50 flex items-center justify-center" aria-label="Toggle navigation menu">
            <div className="transition-transform duration-300 transform rotate-0 hover:rotate-90">
              {isSidebarOpen ? <IoMdClose className="text-xl" /> : <FaBarsStaggered className="text-xl" />}
            </div>
          </button>
        )}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeSection={activeSection} />
        <main className="flex-1 min-h-screen md:pl-64 flex flex-col transition-all duration-300 ease-in-out">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#58a6ff]/10 to-transparent pointer-events-none" />
          <div className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-10 py-24 md:py-12 transition-all duration-300 space-y-0">
            <Hero />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <Education />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <About />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <Projects />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <Achievements />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <Skills />
            <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent my-4" />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}