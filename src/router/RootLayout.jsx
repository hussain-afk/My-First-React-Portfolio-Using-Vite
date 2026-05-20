import { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Preloader from '../components/PreLoader';
import { IoMdClose } from 'react-icons/io';
import { FaBarsStaggered } from 'react-icons/fa6';
import Footer from '../components/Footer';
import { ThemeContext } from '../components/themeContext/context';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const { theme } = useContext(ThemeContext);

  const themeClass =
    theme === 'dark'
      ? 'bg-[#0d1117] text-white'
      : 'bg-white text-black';

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isLoading || isSidebarOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading, isSidebarOpen]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen font-sans antialiased selection:bg-[#58a6ff]/30 selection:text-white overflow-x-hidden transition-colors duration-300 ${themeClass}`}
      >
        {!isLoading && (
          <button
            type="button"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className={`fixed top-5 right-5 z-[100] flex items-center justify-center rounded-xl border p-3 text-[#58a6ff] shadow-2xl backdrop-blur-md transition-[border-color,background-color,transform] hover:border-[#58a6ff]/50 active:scale-95 md:hidden ${
              theme === 'dark'
                ? 'border-[#30363d] bg-[#161b22]/90'
                : 'border-gray-300 bg-white/90'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
          >
            <span className="transition-transform duration-300 hover:rotate-90">
              {isSidebarOpen ? (
                <IoMdClose className="text-xl" />
              ) : (
                <FaBarsStaggered className="text-xl" />
              )}
            </span>
          </button>
        )}

        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`fixed inset-0 z-[80] backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            theme === 'dark' ? 'bg-black/50' : 'bg-white/50'
          } ${
            isSidebarOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        />

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="relative flex min-h-screen flex-col md:pl-64">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#58a6ff]/10 to-transparent" />

          <div className="mx-auto w-full max-w-5xl flex-1 px-5 py-24 transition-all duration-300 sm:px-10 md:py-12">
            <Outlet />
          </div>

          <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-10 md:py-16">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}