'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Lingebra",
    description: "A custom C++ linear algebra library built from the ground up for high performance and SIMD acceleration.",
    tags: ["C++", "SIMD", "OpenMP"],
    link: "https://github.com/Lebogang-G-Masia/lingebra"
  },
  {
    title: "TensorLearn",
    description: "Deep learning framework featuring bespoke neural network implementations and gradient descent algorithms.",
    tags: ["C++", "Python", "Backprop"],
    link: "https://github.com/Lebogang-G-Masia/tensorlearn"
  },
  {
    title: "UniChows",
    description: "Infrastructure and deployment architecture for a food delivery platform utilizing Go and GCP.",
    tags: ["Go", "Flutter", "GCP"],
    link: "https://github.com/UniChows"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Core Repositories.</h2>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-bold">04</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a 
            href={project.link}
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bento-card flex flex-col justify-between h-80 group cursor-pointer"
            aria-label={`View ${project.title} project on GitHub`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <svg className="w-5 h-5 text-secondary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/5 rounded-md text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
