import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion'; // Optional: For smooth scroll animations

// 1. Static import for the critical above-the-fold content
import Hero from '../components/Hero';

// 2. Lazy load below-the-fold components for better performance
const Education = lazy(() => import('../components/Education'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Achievements = lazy(() => import('../pages/AchivementsPage')); // Fixed typo if necessary later
const Skills = lazy(() => import('../pages/Skills'));
const Contact = lazy(() => import('../pages/ContactPage'));

// A simple loading skeleton or spinner for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex justify-center items-center h-48 opacity-50">
    <div className="animate-pulse text-sm font-medium">Loading section...</div>
  </div>
);

function Home() {
  return (
    <div className="min-h-screen  dark: text-slate-800 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Hero loads instantly */}
      <Hero />

      {/* Wrap remaining sections in Suspense for performance */}
      <Suspense fallback={<SectionLoader />}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="about"
          >
            <About />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="skills"
          >
            <Skills />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="projects"
          >
            <Projects />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="education"
          >
            <Education />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="achievements"
          >
            <Achievements />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <Contact />
          </motion.section>

        </main>
      </Suspense>
    </div>
  );
}

export default Home;