'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import EasterEgg from '@/components/EasterEgg';
import Loader from '@/components/Loader';
import { Terminal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <React.Fragment>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background selection:bg-primary selection:text-white relative pb-20"
      >
        {/* Background & Overlays */}
        <div className="fixed inset-0 bg-dot-pattern pointer-events-none opacity-50" />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/5 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="max-w-6xl w-full px-6 flex justify-between items-center">
            <span className="font-bold tracking-tighter text-xl">MASIA.</span>
            <div className="flex gap-8 text-sm font-medium text-secondary">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#stack" className="hover:text-white transition-colors">Tech</a>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pt-24 space-y-8">
          {/* Bento Hero */}
          <section id="hero">
            <Hero />
          </section>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2" id="about">
              <About />
            </div>
            <div className="md:col-span-1" id="stack">
              <TechStack />
            </div>
          </div>

          {/* Projects Full Width */}
          <section id="projects">
            <Projects />
          </section>
        </div>
        
        <footer className="mt-20 py-10 border-t border-white/5 text-center text-secondary text-xs uppercase tracking-widest relative">
          <div className="flex flex-col items-center gap-4">
            <button 
              type="button"
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all group"
              title="Toggle Terminal (Ctrl + `)"
            >
              <Terminal size={14} className="group-hover:text-primary transition-colors" />
              <span className="group-hover:text-white transition-colors">Terminal</span>
            </button>
            <p>&copy; 2026 Lebogang Masia &mdash; Systems & Machine Learning</p>
          </div>
        </footer>

        <EasterEgg isOpen={isTerminalOpen} setIsOpen={setIsTerminalOpen} />
      </motion.main>
    </React.Fragment>
  );
}
