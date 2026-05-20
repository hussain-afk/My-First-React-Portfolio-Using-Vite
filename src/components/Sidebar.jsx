import { NavLink, Link } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineMail,
  HiOutlineSun,
  HiOutlineMoon,
} from 'react-icons/hi';
import { useContext } from 'react';
import { ThemeContext } from './themeContext/context';

export default function Sidebar({ isOpen, onClose }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[85] md:hidden transition-opacity duration-300"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 border-r z-[90] 
        transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col
        ${
          theme === 'dark'
            ? 'bg-[#0d1117] border-[#30363d]'
            : 'bg-white border-gray-300'
        }
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#58a6ff]/5 via-transparent to-transparent h-44" />

        <div className="relative flex flex-col h-full px-6 py-8">
          <div className="mb-10 text-center shrink-0">
            <Link
              to="/"
              onClick={onClose}
              className={`relative inline-flex items-center justify-center text-xl font-black tracking-tight transition-all group ${
                theme === 'dark' ? 'text-white' : 'text-gray-950'
              }`}
            >
              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:-translate-x-1">
                &lt;
              </span>

              <span className="px-1 uppercase italic tracking-wide">
                MHM
                <span className="text-[#58a6ff] drop-shadow-[0_0_8px_rgba(88,166,255,0.6)]">
                  .
                </span>
                Dev
              </span>

              <span className="text-[#58a6ff] font-mono opacity-60 transition-transform duration-300 group-hover:translate-x-1">
                /&gt;
              </span>
            </Link>

            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span
                className={`h-[1px] w-2 ${
                  theme === 'dark' ? 'bg-[#30363d]' : 'bg-gray-300'
                }`}
              />
              <p className="text-[9px] text-[#8b949e] uppercase tracking-[0.3em] font-extrabold font-mono">
                Frontend Developer
              </p>
              <span
                className={`h-[1px] w-2 ${
                  theme === 'dark' ? 'bg-[#30363d]' : 'bg-gray-300'
                }`}
              />
            </div>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-1 select-none scrollbar-thin scrollbar-thumb-[#30363d]">
            {navLinks.map((link) => {
              const IconComponent = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `relative group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 border ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-[#161b22] text-white font-medium border-[#30363d]'
                          : 'bg-gray-100 text-gray-950 font-medium border-gray-300'
                        : theme === 'dark'
                          ? 'text-gray-400 border-transparent hover:text-white hover:bg-[#161b22]/50'
                          : 'text-gray-600 border-transparent hover:text-gray-950 hover:bg-gray-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#58a6ff] rounded-full transition-all duration-300 ${
                          isActive
                            ? 'h-6 shadow-[0_0_8px_#58a6ff]'
                            : 'h-0 group-hover:h-4'
                        }`}
                      />

                      <IconComponent
                        className={`w-5 h-5 text-center transition-colors duration-200 ${
                          isActive
                            ? 'text-[#58a6ff]'
                            : 'text-gray-500 group-hover:text-[#58a6ff]'
                        }`}
                      />

                      <span className="tracking-wide text-xs uppercase font-semibold font-mono">
                        {link.label}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div
            className={`pt-4 border-t flex flex-col items-center gap-3 shrink-0 ${
              theme === 'dark' ? 'border-[#30363d]/50' : 'border-gray-300'
            }`}
          >
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
              className={`flex h-11 w-11 items-center justify-center rounded-xl border text-[#58a6ff] transition-[border-color,background-color,transform] duration-200 hover:border-[#58a6ff]/50 hover:bg-[#58a6ff]/10 active:scale-95 ${
                theme === 'dark'
                  ? 'border-[#30363d] bg-[#161b22]'
                  : 'border-gray-300 bg-gray-100'
              }`}
            >
              {theme === 'dark' ? (
                <HiOutlineSun className="h-5 w-5" />
              ) : (
                <HiOutlineMoon className="h-5 w-5" />
              )}
            </button>

            <div
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full border ${
                theme === 'dark'
                  ? 'bg-[#161b22] border-[#30363d]'
                  : 'bg-gray-100 border-gray-300'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_#22c55e]" />
              <span className="text-[9px] text-[#8b949e] uppercase tracking-widest font-extrabold font-mono">
                Available For Work
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}