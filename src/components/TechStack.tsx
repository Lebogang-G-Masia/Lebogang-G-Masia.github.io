'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    label: "Low-Level / Systems",
    items: ["C++20", "Assembly", "CUDA", "SIMD", "Linux Kernel", "GDB"]
  },
  {
    label: "ML & Data",
    items: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "OpenCV"]
  },
  {
    label: "Tools & Infra",
    items: ["Docker", "Kubernetes", "GCP", "Git", "Neovim"]
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="bento-card h-full flex flex-col group">
      <div className="flex justify-between items-start mb-6">
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
      
      <div className="space-y-6 overflow-y-auto">
        {techCategories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-[10px] font-mono uppercase text-secondary mb-3 tracking-widest">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <motion.span 
                  key={j} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i * 5 + j) * 0.05 }}
                  className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-secondary hover:text-white hover:border-primary/50 transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
