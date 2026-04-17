'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = ["C++", "Machine Learning", "Reverse Engineering", "Systems Optimization"];

const Hero: React.FC = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = skills[skillIndex];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
        
        if (displayText === "") {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % skills.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, skillIndex, typingSpeed]);

  return (
    <div className="bento-card bg-gradient-to-br from-[#171717] to-background min-h-[400px] flex flex-col justify-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="text-[12rem] font-bold leading-none select-none tracking-tighter">
          01
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
          Systems Engineering & Machine Learning
        </span>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-gradient leading-none">
          Masia.
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl text-secondary max-w-xl leading-relaxed">
            Crafting high-performance systems and bespoke neural architectures.
          </p>
          <div className="flex items-center text-primary font-mono text-lg h-8">
            <span className="text-white">{displayText}</span>
            <span className="w-1.5 h-6 bg-primary ml-2 animate-pulse rounded-full" />
          </div>
        </div>
      </motion.div>

      <div className="mt-12 flex gap-4">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
        >
          View Projects
        </button>
        <a 
          href="mailto:masialebogang2@gmail.com"
          className="px-6 py-2 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all flex items-center justify-center"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
