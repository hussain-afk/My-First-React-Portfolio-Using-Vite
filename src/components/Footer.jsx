import { useContext } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { ThemeContext } from './themeContext/context';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const year = new Date().getFullYear();

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/hussain-afk',
      icon: FiGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: FiLinkedin,
    },
    {
      label: 'Email',
      href: 'mailto:your-email@example.com',
      icon: FiMail,
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden border-t px-4 py-10 transition-colors duration-300 ${
        isDark
          ? 'border-[#30363d]/70 bg-[#0d1117] text-gray-400'
          : 'border-gray-300 bg-white text-gray-600'
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#58a6ff]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.35em] text-[#58a6ff]">
            // Portfolio
          </span>

          <h2
            className={`text-2xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-gray-950'
            }`}
          >
            Hussain <span className="text-[#58a6ff]">AFK</span>
          </h2>

          <p
            className={`mt-3 text-sm leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Building clean, responsive, and performance-focused web experiences
            with modern frontend tools.
          </p>

          <a
            href="mailto:your-email@example.com"
            className={`mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:border-[#58a6ff]/50 hover:text-[#58a6ff] ${
              isDark
                ? 'border-[#30363d] bg-[#161b22] text-white'
                : 'border-gray-300 bg-gray-100 text-gray-950'
            }`}
          >
            Let&apos;s Work Together
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#58a6ff]/50 hover:text-[#58a6ff] ${
                  isDark
                    ? 'border-[#30363d] bg-[#161b22] text-gray-400'
                    : 'border-gray-300 bg-gray-100 text-gray-600'
                }`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <nav
            className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <a href="#home" className="transition-colors hover:text-[#58a6ff]">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-[#58a6ff]">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-[#58a6ff]">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-[#58a6ff]">
              Contact
            </a>
          </nav>

          <p
            className={`font-mono text-xs ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            © {year} Hussain AFK. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}