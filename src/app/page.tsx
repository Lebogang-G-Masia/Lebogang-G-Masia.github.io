'use client';

import MatrixBackground from '@/components/MatrixBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import EasterEgg from '@/components/EasterEgg';

import SideMonitor from '@/components/SideMonitor';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-black">
      {/* Background & Overlays */}
      <MatrixBackground />
      <div className="fixed inset-0 scanlines pointer-events-none z-40 opacity-20" />
      <div className="fixed inset-0 crt-flicker pointer-events-none z-40 opacity-[0.03]" />
      
      {/* Persistant Workspace Elements */}
      <SideMonitor />
      
      {/* Main Content Pane */}
      <div className="ml-16 md:ml-20 relative z-10 border-l border-primary/10 min-h-screen flex flex-col">
        
        {/* Navigation / Breadcrumb Bar */}
        <nav className="h-10 border-b border-primary/20 flex items-center px-6 text-[10px] font-mono text-secondary sticky top-0 bg-background/80 backdrop-blur-sm z-30">
          <span className="text-primary/60">~/masia-portfolio</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">index.tsx</span>
          <div className="ml-auto flex gap-4">
            <span>MODE: STABLE</span>
            <span className="text-primary">GIT:(MAIN)</span>
          </div>
        </nav>

        <div className="flex-1">
          <Hero />
          <About />
          <Projects />
          <TechStack />
        </div>
        
        <footer className="py-2 px-6 border-t border-primary/20 bg-primary/5 flex justify-between items-center text-primary text-[10px] font-mono">
          <div className="flex gap-4">
            <span className="bg-primary text-black px-2 font-bold italic">NORMAL</span>
            <p>UTF-8 | C++ / TSX</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LN: 1024, COL: 56</a>
            <p>© {new Date().getFullYear()} MASIA_OS</p>
          </div>
        </footer>
      </div>

      <EasterEgg />

      {/* Info indicator for CLI */}
      <div className="fixed bottom-12 right-6 text-[10px] text-secondary opacity-30 font-mono hidden md:block pointer-events-none">
        CTRL + ` TO OPEN KERNEL
      </div>
    </main>
  );
}
