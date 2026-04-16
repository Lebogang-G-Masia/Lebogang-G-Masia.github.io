'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between group">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2 block">
              Biography
            </span>
            <h2 className="text-3xl font-bold tracking-tight">Focus & Discipline.</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
            <span className="font-bold">02</span>
          </div>
        </div>
        
        <div className="space-y-6 text-lg text-secondary leading-relaxed max-w-2xl">
          <p>
            I am a 3rd-year Bachelor of Computing student specializing in 
            <span className="text-white"> high-performance computing</span> and 
            <span className="text-white"> algorithmic complexity</span>.
          </p>
          <p>
            My work lives at the intersection of systems-level optimization and neural networks. 
            I build libraries that push performance boundaries, from SIMD-optimized linear 
            algebra engines to custom backpropagation implementations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {[
              { label: "OS", value: "Arch Linux" },
              { label: "SHELL", value: "Zsh" },
              { label: "EDITOR", value: "Neovim" },
              { label: "DEBUG", value: "GDB" },
              { label: "ARCH", value: "x86_64 / ARM" },
              { label: "COMP", value: "CUDA / OpenMP" }
            ].map(spec => (
              <div key={spec.label} className="border border-white/5 p-4 rounded-xl bg-white/[0.02]">
                <p className="text-[10px] text-secondary mb-1 uppercase tracking-widest">{spec.label}</p>
                <p className="text-sm font-medium text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
