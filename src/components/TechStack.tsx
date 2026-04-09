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
    <section className="py-20 overflow-hidden bg-primary/5">
      <div className="px-8 md:px-20 mb-10">
        <h2 className="text-4xl font-bold font-mono border-b border-primary/20 pb-2 inline-block">
          &gt; ENVIRONMENT
        </h2>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
        >
          {[...tech, ...tech].map((item, i) => (
            <span 
              key={i} 
              className="text-5xl md:text-7xl font-bold font-mono text-secondary/20 hover:text-primary transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="flex overflow-hidden mt-8">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{ x: [-1000, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {[...tech, ...tech].reverse().map((item, i) => (
            <span 
              key={i} 
              className="text-5xl md:text-7xl font-bold font-mono text-secondary/20 hover:text-primary transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
