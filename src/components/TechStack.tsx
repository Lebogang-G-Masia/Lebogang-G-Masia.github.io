'use client';

import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  "C++", "Python", "Arch Linux", "Neovim", "GDB", 
  "Assembly", "SIMD", "OpenMP", "CUDA", "TensorFlow",
  "PyTorch", "Git", "Docker", "GCP", "Linux Kernel"
];

const TechStack: React.FC = () => {
  return (
    <div className="bento-card h-full flex flex-col group">
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2 block">
            Environment
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Stack.</h2>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
          <span className="font-bold">03</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((item, i) => (
          <motion.span 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-sm px-4 py-2 bg-white/5 border border-white/5 rounded-full text-secondary hover:text-white hover:border-primary/50 transition-all cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
