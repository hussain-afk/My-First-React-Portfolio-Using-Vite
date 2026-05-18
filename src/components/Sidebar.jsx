import { NavLink, Link } from 'react-router-dom';
// Importing specific icons matching your requirements from standard sets
import { 
  HiOutlineHome, 
  HiOutlineAcademicCap, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineShieldCheck, 
  HiOutlineSparkles, 
  HiOutlineMail 
} from 'react-icons/hi';

export default function Sidebar({ isOpen, onClose }) {
  // Navigation schema mapped to component instances instead of class strings
  const navLinks = [
    { path: '/', label: 'Home', icon: HiOutlineHome },
    { path: '/education', label: 'Education', icon: HiOutlineAcademicCap },
    { path: '/about', label: 'About Me', icon: HiOutlineUser },
    { path: '/projects', label: 'Projects', icon: HiOutlineCode },
    { path: '/achievements', label: 'Achievements', icon: HiOutlineShieldCheck },
    { path: '/skills', label: 'Skills', icon: HiOutlineSparkles },
    { path: '/contact', label: 'Contact', icon: HiOutlineMail },
  ];

  return (
    <>
      {/* BACKDROP BLUR FOR MOBILE NAVIGATION PANEL */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[85] md:hidden transition-opacity duration-300"
        />
      )}

      {/* FIXED SIDEBAR CONTAINER */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-[#30363d] z-[90] 
        transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
      >
        {/* Top ambient color glow accent mirroring the main landing aesthetics */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#58a6ff]/5 via-transparent to-transparent h-44" />
        
        <div className="relative flex flex-col h-full px-6 py-8">
          
          {/* SIDEBAR HEADER / BRAND LOGO */}
          <div className="mb-10 text-center shrink-0">
            <Link 
              to="/" 
              onClick={onClose}
              className="relative inline-flex items-center justify-center text-xl font-black tracking-tight text-white transition-all group"
            >
              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
              <span className="px-1 uppercase italic tracking-wide"> MHM<span className="text-[#58a6ff] drop-shadow-[0_0_8px_rgba(88,166,255,0.6)]">.</span>Dev </span>
              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
            </Link>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span className="h-[1px] w-2 bg-[#30363d]" />
              <p className="text-[9px] text-[#8b949e] uppercase tracking-[0.3em] font-extrabold font-mono">
                Frontend Developer
              </p>
              <span className="h-[1px] w-2 bg-[#30363d]" />
            </div>
          </div>

          {/* SIDEBAR NAVIGATION LINKS */}
          <nav className="flex-1 space-y-1 overflow-y-auto pr-1 select-none scrollbar-thin scrollbar-thumb-[#30363d]">
            {navLinks.map((link) => {
              // Extract the component reference to render dynamically
              const IconComponent = link.icon;
              
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) => `
                    relative group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 border
                    ${isActive 
                      ? 'bg-[#161b22] text-white font-medium border-[#30363d]' 
                      : 'text-gray-400 border-transparent hover:text-white hover:bg-[#161b22]/50'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Sliding structural focus line on active/hover conditions */}
                      <span 
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#58a6ff] rounded-full transition-all duration-300
                        ${isActive ? 'h-6 shadow-[0_0_8px_#58a6ff]' : 'h-0 group-hover:h-4'}`} 
                      />
                      
                      {/* Rendered React Icon Component */}
                      <IconComponent 
                        className={`w-5 h-5 text-center transition-colors duration-200 
                        ${isActive ? 'text-[#58a6ff]' : 'text-gray-500 group-hover:text-[#58a6ff]'}`} 
                      />
                      
                      <span className="tracking-wide text-xs uppercase font-semibold font-mono">{link.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* SIDEBAR FOOTER AVAILABILITY FLAG */}
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