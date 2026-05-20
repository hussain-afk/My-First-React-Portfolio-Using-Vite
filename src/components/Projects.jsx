import { useCallback, useContext, useMemo, useState } from 'react';
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiCpu,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { ThemeContext } from './themeContext/context';

const projectsData = [
  {
    title: 'Calculator',
    subtitle: 'Utility Interface Engine',
    description:
      'A fast, precise calculator interface built with clean ES6 logic, responsive controls, and smooth interaction states.',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6'],
    githubUrl: 'https://github.com/hussain-afk/Calculator-Using-JS',
    liveUrl: 'https://todo-app-swgx.vercel.app/',
  },
  {
    title: 'Todo App',
    subtitle: 'State System Management',
    description:
      'A polished task manager with persistent local storage, dark mode support, and efficient client-side state handling.',
    tags: ['Web Architecture', 'Local Storage', 'Vanilla Stack'],
    githubUrl: 'https://github.com/hussain-afk/Todo-App',
    liveUrl: 'https://todo-app-beta-six-17.vercel.app',
  },
  {
    title: 'BG Remover',
    subtitle: 'Asynchronous Asset Pipeline',
    description:
      'A responsive image tool for quick background removal with drag-and-drop input and smooth asset handling.',
    tags: ['Image API', 'DOM Graphics', 'Responsive Logic'],
    githubUrl: 'https://github.com/hussain-afk/BG-Remover',
    liveUrl: 'https://bg-remover-lilac-ten.vercel.app/',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  const visibleProjects = useMemo(() => {
    return projectsData
      .map((project, index) => {
        let offset = index - activeIndex;

        if (offset < -1) offset += projectsData.length;
        if (offset > 1) offset -= projectsData.length;

        return { project, index, offset };
      })
      .filter(({ offset }) => Math.abs(offset) <= 1);
  }, [activeIndex]);

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full select-none flex-col justify-center overflow-hidden px-4 py-8 md:min-h-[calc(100vh-120px)]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58a6ff]/5 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col justify-center">
        <div className="mb-10 flex flex-col gap-4 text-center sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="min-w-0">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-[#58a6ff] sm:text-xs">
              // Engineering Work
            </span>

            <h2
              className={`text-2xl font-black uppercase tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-gray-950'
              }`}
            >
              Featured{' '}
              <span className="normal-case text-[#58a6ff] drop-shadow-[0_0_16px_rgba(88,166,255,0.22)]">
                Projects
              </span>
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#58a6ff] to-transparent sm:mx-0 sm:w-24" />
          </div>

          <div className="flex shrink-0 items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-[border-color,color,background-color,transform] duration-200 hover:border-[#58a6ff]/40 hover:text-[#58a6ff] active:scale-95 sm:h-11 sm:w-11 ${
                isDark
                  ? 'border-[#30363d] bg-[#161b22] text-gray-400'
                  : 'border-gray-300 bg-white text-gray-600'
              }`}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-[border-color,color,background-color,transform] duration-200 hover:border-[#58a6ff]/40 hover:text-[#58a6ff] active:scale-95 sm:h-11 sm:w-11 ${
                isDark
                  ? 'border-[#30363d] bg-[#161b22] text-gray-400'
                  : 'border-gray-300 bg-white text-gray-600'
              }`}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative flex h-[380px] w-full items-center justify-center [perspective:1000px] sm:h-[400px]">
          {visibleProjects.map(({ project, index, offset }) => {
            const isCenter = offset === 0;

            const transform =
              offset === 0
                ? 'translate3d(0, 0, 0) scale(1) rotateY(0deg)'
                : offset < 0
                  ? 'translate3d(-24%, 0, -80px) scale(0.9) rotateY(12deg)'
                  : 'translate3d(24%, 0, -80px) scale(0.9) rotateY(-12deg)';

            return (
              <article
                key={project.title}
                style={{
                  transform,
                  opacity: isCenter ? 1 : 0.42,
                  zIndex: isCenter ? 30 : 10,
                  willChange: 'transform, opacity',
                  contain: 'layout paint',
                }}
                className={`absolute flex h-full w-full max-w-[450px] transform-gpu flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-xl transition-[transform,opacity,border-color,background-color] duration-500 ease-out sm:p-7 ${
                  isDark ? 'bg-[#161b22]/95' : 'bg-white'
                } ${
                  isCenter
                    ? 'border-[#58a6ff]/60 shadow-[0_14px_30px_rgba(88,166,255,0.08)]'
                    : isDark
                      ? 'pointer-events-none border-[#30363d]'
                      : 'pointer-events-none border-gray-300'
                }`}
              >
                {isCenter && (
                  <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#58a6ff]/50 to-transparent" />
                )}

                <span
                  className={`pointer-events-none absolute -bottom-4 -right-2 font-mono text-6xl font-black leading-none sm:text-8xl ${
                    isDark ? 'text-[#30363d]/20' : 'text-gray-200'
                  }`}
                >
                  0{index + 1}
                </span>

                <div>
                  <div className="mb-5 flex items-center justify-between sm:mb-6">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-11 sm:w-11 ${
                        isCenter
                          ? 'border-[#58a6ff]/30 text-[#58a6ff]'
                          : isDark
                            ? 'border-[#30363d] text-gray-500'
                            : 'border-gray-300 text-gray-500'
                      } ${isDark ? 'bg-[#0d1117]' : 'bg-gray-100'}`}
                    >
                      <FiFolder className="h-5 w-5" />
                    </div>

                    <div
                      className={`relative z-20 flex items-center gap-2 sm:gap-3 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className={`rounded-lg p-1.5 transition-colors duration-200 ${
                          isDark
                            ? 'hover:bg-[#30363d]/40 hover:text-white'
                            : 'hover:bg-gray-100 hover:text-gray-950'
                        }`}
                      >
                        <FiGithub className="h-4 w-4" />
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live preview`}
                        className="rounded-lg p-1.5 transition-colors duration-200 hover:bg-[#58a6ff]/10 hover:text-[#58a6ff]"
                      >
                        <FiExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-500 sm:text-[10px]">
                      <FiCpu className="shrink-0 text-[#58a6ff]/60" />
                      {project.subtitle}
                    </span>

                    <h3
                      className={`text-lg font-black tracking-tight transition-colors duration-300 sm:text-2xl ${
                        isCenter
                          ? 'text-[#58a6ff]'
                          : isDark
                            ? 'text-white'
                            : 'text-gray-950'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`line-clamp-5 pt-1 text-left text-xs leading-relaxed sm:line-clamp-none sm:text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`relative z-20 mt-5 flex flex-wrap gap-1.5 border-t pt-4 sm:mt-6 ${
                    isDark ? 'border-[#30363d]/40' : 'border-gray-200'
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md border px-2 py-0.5 font-mono text-[9px] sm:py-1 sm:text-[10px] ${
                        isDark
                          ? 'border-[#30363d]/60 bg-[#0d1117] text-gray-400'
                          : 'border-gray-300 bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}