import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { ThemeContext } from "./themeContext/context";
import Modal from "./Modal";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

// import your image
import profileImg from "../assets/my-profile.png";
import Typewriter from "./TypeWriter";
import RESUME from "../assets/RESUME.jpg";
import qrCodeImg from "../assets/myPortfolioQr.png";

export default function Hero() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind",
    "HTML",
    "CSS",
    "GSAP",
    "Firebase",
    "GitHub",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <section
      style={{ backgroundColor: theme === 'dark' ? '#0d1117' : '#FFFFFF' }}
      className="relative w-full overflow-hidden flex items-center transition-colors duration-300 py-0 px-0 m-0"
    >

      <div className="max-w-[1300px] mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
                Available For Work
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-black tracking-tight leading-[0.95] text-[42px] sm:text-[64px] md:text-[80px] xl:text-[70px] uppercase">
              <span style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E293B' }} className="block">Muhammad</span>
              <span style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E293B' }} className="block">Hussain</span>
              <span style={{ color: theme === 'dark' ? '#60A5FA' : '#1D4ED8' }} className="block">Memon</span>
            </h1>

            {/* Role */}
            <h2 style={{ color: theme === 'dark' ? '#E2E8F0' : '#475569' }} className="mt-4 text-xl sm:text-2xl font-light tracking-wide">
              <Typewriter words={["<Frontend Developer/>", "<JavaScript Engineer/>"]} />
            </h2>

            {/* Description */}
            <p style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }} className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-[550px]">
              A passionate frontend engineer crafting beautiful, responsive and
              interactive web experiences from Karachi. Specialized in React,
              Tailwind CSS, JavaScript and modern UI development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-8 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-semibold hover:scale-105 active:scale-95 transition text-center text-sm shadow-md"
              >
                Let's Collaborate →
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                style={{ color: theme === 'dark' ? '#60A5FA' : '#1E293B', border: `1px solid ${theme === 'dark' ? '#60A5FA' : '#1E293B'}` }}
                className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/10 bg-transparent hover:border-blue-500 dark:hover:border-blue-400 active:scale-95 transition text-center text-sm font-medium"
              >
                Download Resume
              </button>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
                href="https://github.com/hussain-afk"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition text-lg bg-gray-50/50 dark:bg-transparent"
              >
                <FaGithub />
              </a>

              <a
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
                href="https://www.linkedin.com/in/muhammad-hussain-memon-a4b7883a5"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition text-lg bg-gray-50/50 dark:bg-transparent"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 pt-0">
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
            {/* Hanging Rope */}
            <div className="absolute left-1/2 -top-16 -translate-x-1/2 hidden sm:block">
              <div className="w-[2px] h-16 bg-gray-300/60 dark:bg-white/20" />
            </div>

            {/* CARD */}
            <div
              style={{ backgroundColor: theme === 'dark' ? '#0B1225' : '#FFFFFF',borderColor: '#0B1225' }}
              className="mt-4 relative w-[290px] sm:w-[340px] h-[520px] sm:h-[560px] rounded-[32px] border border-gray-200 dark:border-white/10 backdrop-blur-xl overflow-hidden shadow-xl "
            >
              <div className="p-6 sm:p-7 h-full flex flex-col">
                {/* Header */}
                <div
                  style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
                  className="flex justify-between text-[10px] tracking-[0.3em] uppercase font-mono"
                >
                  <span>Developer</span>
                  <span>2026</span>
                </div>

                {/* Profile */}
                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md">
                    <img
                      src={profileImg}
                      alt="Muhammad Hussain Memon"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white dark:border-[#0B1225]"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E293B' }} className="text-center text-2xl sm:text-3xl font-bold mt-5 sm:mt-6 px-2">
                  Muhammad Hussain
                </h3>

                <p style={{ color: theme === 'dark' ? '#60A5FA' : '#2563EB' }} className="text-center tracking-[0.25em] text-[10px] sm:text-xs uppercase mt-2 font-mono font-semibold">
                  Frontend Developer
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(241,245,249,0.9)',
                        color: theme === 'dark' ? '#CBD5E1' : '#475569'
                      }}
                      className="px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-white/10 text-[11px] sm:text-xs font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(226,232,240,0.8)' }} className="mt-auto border-t pt-4 sm:pt-6">
                  <div className="flex justify-between items-end">
                    <div className="font-mono">
                      <p style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }} className="text-[10px] uppercase tracking-wider">ID</p>
                      <p style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E293B' }} className="text-xs sm:text-sm font-semibold">
                        MHM-488103
                      </p>

                      <p style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }} className="text-[10px] uppercase tracking-wider mt-3">ACCESS</p>
                      <p style={{ color: theme === 'dark' ? '#E2E8F0' : '#475569' }} className="text-xs sm:text-sm font-medium">
                        Karachi, Pakistan
                      </p>
                    </div>

                    {/* QR Code Layout */}
                    <div style={{ borderColor: theme === 'dark' ? '#FFFFFF' : '#0F172A',backgroundColor:'#FFFFFF' }} className="w-20 rounded-2xl p-1 border border-gray-200/60 dark:border-white/10 flex items-center justify-center">
                      {/* Simulated QR Code Blocks */}
                      <img src={qrCodeImg} alt="QR Code" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Border Glow Edge Overlay */}
              <div className="absolute inset-0 rounded-[32px] border border-blue-400/5 dark:border-blue-400/10 pointer-events-none" />
            </div>
            </motion.div>
          </div>

        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
        title="Download Professional CV"
      >
        <div className="space-y-4 flex flex-col items-center">
          <p
            style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            className="text-xs font-mono uppercase tracking-widest text-center w-full"
          >
            Click on the preview to download CV
          </p>

          {/* SCROLLBAR HIDDEN ARCHITECTURE */}
          <div
            style={{
              borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              backgroundColor: theme === "dark" ? "#0F172A" : "#F8FAFC"
            }}
            className="relative w-full max-h-[65vh] overflow-y-auto rounded-2xl border p-2 group cursor-pointer shadow-inner [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Click-to-Download Anchor Link */}
            <a href={RESUME} download className="block relative overflow-hidden rounded-xl">

              {/* Interactive Hover Overlay Accent */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 dark:group-hover:bg-blue-500/5 transition-all duration-300 flex items-center justify-center z-10">
                <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 px-5 py-2.5 bg-gray-900/90 dark:bg-white/90 text-white dark:text-black font-semibold text-sm rounded-full shadow-xl backdrop-blur-sm">
                  📥 Download Document
                </span>
              </div>

              {/* Sharpened Image Layout */}
              <img
                src={RESUME}
                alt="Muhammad Hussain Memon - Professional CV"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}