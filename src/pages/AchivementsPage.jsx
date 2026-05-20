import { useContext } from 'react';
import { FiAward, FiTarget, FiActivity, FiArrowUpRight, FiZap } from 'react-icons/fi';
import { ThemeContext } from '../components/themeContext/context';

export default function Achievements() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const achievementsData = [
    {
      title: "Meta Front-End Developer Certified",
      category: "Certification",
      metric: "Credential Complete",
      description: "Successfully authorized professional frontend certification directly verified by Meta. Validated advanced mastery across high-level Single Page Application architectures, complex state mechanics, component lifecycles, UI rendering metrics, and deployment pipelines.",
      icon: FiAward,
      tagColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      link: "#"
    },
    {
      title: "15+ Production-Ready Deployments",
      category: "Engineering milestone",
      metric: "100% Client Ready",
      description: "Architected, designed, and deployed over 15 projects with fully decoupled application states. Projects feature cross-viewport responsiveness, clean self-documenting code bases, semantic layouts, and real-time integration loops utilizing platforms like Vercel and Firebase.",
      icon: FiTarget,
      tagColor: "border-[#58a6ff]/20 bg-[#58a6ff]/10 text-[#58a6ff]",
      link: "/projects"
    },
    {
      title: "SMIT Hackathon Core Participant",
      category: "Competitive Coding",
      metric: "Top Tier Showcase",
      description: "Collaborated in fast-paced sprint development sessions at Saylani Mass IT Training. Designed and modeled functional application interfaces within extremely tight execution deadlines, showcasing advanced Tailwind custom systems layouts and robust React module interactions.",
      icon: FiZap,
      tagColor: "border-amber-500/20 bg-amber-500/10 text-amber-400",
      link: "#"
    },
    {
      title: "Open Source Code Contributions",
      category: "Community",
      metric: "Continuous Integration",
      description: "Actively contributing to local ecosystem workspaces, providing modular layout adjustments and optimized component scripts. Maintaining consistent tracking profiles on GitHub with semantic commit patterns and pristine branch architectures.",
      icon: FiActivity,
      tagColor: "border-purple-500/20 bg-purple-500/10 text-purple-400",
      link: "https://github.com/MuhammadHussainMemon"
    }
  ];

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">
          Milestones & Recognition
        </span>

        <h2
          className={`text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 ${
            isDark ? 'text-white' : 'text-gray-950'
          }`}
        >
          Key{' '}
          <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">
            Achievements
          </span>
        </h2>

        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {achievementsData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={index}
              className={`group relative border rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:border-[#58a6ff]/40 hover:shadow-2xl ${
                isDark
                  ? 'bg-[#161b22] border-[#30363d]'
                  : 'bg-white border-gray-300'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl border text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 transition-all duration-300 shadow-inner ${
                      isDark
                        ? 'bg-[#0d1117] border-[#30363d]'
                        : 'bg-gray-100 border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-mono font-bold tracking-wider border ${item.tagColor}`}>
                    {item.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold tracking-widest text-gray-500 uppercase block">
                    // {item.metric}
                  </span>

                  <h3
                    className={`text-xl font-bold tracking-tight group-hover:text-[#58a6ff] transition-colors duration-200 flex items-center gap-2 ${
                      isDark ? 'text-white' : 'text-gray-950'
                    }`}
                  >
                    <span>{item.title}</span>
                  </h3>

                  <p
                    className={`text-sm font-light leading-relaxed pt-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              <div
                className={`mt-6 pt-4 border-t flex justify-end ${
                  isDark ? 'border-[#30363d]/40' : 'border-gray-200'
                }`}
              >
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono tracking-wider font-bold text-gray-500 group-hover:text-[#58a6ff] transition-colors duration-200 uppercase"
                >
                  <span>Verification</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}