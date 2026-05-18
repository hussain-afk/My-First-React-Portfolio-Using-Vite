import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCpu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

// Import Swiper styling directly into the project bundle
import 'swiper/css';

export default function Projects() {
  const swiperRef = useRef(null);

  const projectsData = [
    {
      title: "Calculator",
      subtitle: "Utility Interface Engine",
      description: "A high-performance, dynamic computing module delivering precise structural computational rendering built with advanced ES6 structural architecture and optimized functional event states.",
      tags: ["HTML5", "CSS3", "JavaScript ES6"],
      githubUrl: "https://github.com/hussain-afk/Calculator-Using-JS",
      liveUrl: "https://todo-app-swgx.vercel.app/"
    },
    {
      title: "Todo App",
      subtitle: "State System Management",
      description: "A robust task matrix featuring fluid persistent dark-mode layers, structural local storage sync interceptors, and high-end layout animations keeping client workflows completely optimized.",
      tags: ["Web Architecture", "Local Storage", "Vanilla Stack"],
      githubUrl: "https://github.com/hussain-afk/Todo-App",
      liveUrl: "https://todo-app-beta-six-17.vercel.app"
    },
    {
      title: "BG Remover",
      subtitle: "Asynchronous Asset Pipeline",
      description: "A production-grade algorithmic canvas rendering interface enabling immediate background extractions via low-latency drag-and-drop actions and fluid client handling.",
      tags: ["Image API", "DOM Graphics", "Responsive Logic"],
      githubUrl: "https://github.com/hussain-afk/BG-Remover",
      liveUrl: "https://bg-remover-lilac-ten.vercel.app/"
    }
  ];

  return (
    <section className="relative min-h-screen py-12 flex flex-col justify-center animate-fadeIn select-none">
      
      {/* GLOW BACKGROUND EFFECT MATRIX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#58a6ff]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* CAROUSEL HEADER CONTROL BLOCK */}
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between text-center sm:text-left gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#58a6ff] block mb-2">// Engineering Work</span>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            Featured <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">Projects</span>
          </h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-[#58a6ff] to-transparent mt-4 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* CONTROLS BAR DECK */}
        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="w-11 h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95"
            title="Previous Build"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="w-11 h-11 rounded-xl bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-[#58a6ff] hover:border-[#58a6ff]/40 flex items-center justify-center transition-all duration-200 active:scale-95"
            title="Next Build"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT SLIDER WRAPPER */}
      <div className="w-full px-1 sm:px-0">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
          className="py-4 !overflow-visible"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="group relative flex flex-col justify-between bg-[#161b22]/90 border border-[#30363d] rounded-2xl p-7 min-h-[380px] h-full overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#58a6ff]/50 hover:shadow-[0_10px_30px_rgba(88,166,255,0.06)] backdrop-blur-sm">
                
                {/* Micro-glow interactive accents */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Index Matrix Identifier Background Watermark */}
                <span className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-[#30363d]/15 select-none transition-colors duration-300 group-hover:text-[#58a6ff]/5">
                  0{index + 1}
                </span>

                <div>
                  {/* TOP CARD BAR ACTIONS */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0d1117] border border-[#30363d] text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/30 transition-all duration-300 transform group-hover:rotate-6">
                      <FiFolder className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-400 z-10">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1.5 rounded-lg hover:text-white hover:bg-[#30363d]/40 transition-all duration-200"
                        title="Source Repository Code"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1.5 rounded-lg hover:text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all duration-200"
                        title="Live Application Deployment"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* TYPOGRAPHY MATRIX */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                      <FiCpu className="text-[#58a6ff]/60 transition-spin duration-1000 group-hover:rotate-180" /> {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#58a6ff] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed pt-2 text-justify sm:text-left">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* BOTTOM COMPONENT TECH TAGS */}
                <div className="mt-8 pt-4 border-t border-[#30363d]/40 flex flex-wrap gap-1.5 z-10">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-2.5 py-1 bg-[#0d1117] border border-[#30363d]/60 text-gray-400 font-mono text-[10px] rounded-md transition-all group-hover:text-gray-200 group-hover:border-[#58a6ff]/20 group-hover:bg-[#161b22]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}