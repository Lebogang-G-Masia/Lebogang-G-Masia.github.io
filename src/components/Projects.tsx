'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Lingebra",
    description: "A custom C++ linear algebra library built from the ground up for high performance.",
    tags: ["C++", "SIMD", "OpenMP"],
    color: "#00ff00"
  },
  {
    title: "TensorLearn",
    description: "A custom machine learning library featuring bespoke neural network implementations.",
    tags: ["C++", "Python", "Backprop"],
    color: "#ffffff"
  },
  {
    title: "UniChows",
    description: "Backend infrastructure and deployment architecture for a Flutter-based food delivery application.",
    tags: ["Go", "Flutter", "GCP"],
    color: "#666666"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-sm border border-primary/20 bg-primary/5 p-8 transition-colors duration-500 hover:bg-primary/10"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="flex h-full flex-col justify-between"
      >
        <div>
          <h3 className="text-3xl font-bold font-mono mb-4 text-glow" style={{ color: project.color }}>
            {project.title}
          </h3>
          <p className="text-secondary text-lg">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-mono px-2 py-1 border border-primary/30 text-primary/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-8 md:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 font-mono border-b border-primary/20 pb-2 inline-block">
          &gt; REPOSITORIES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
