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
          setTypingSpeed(500); // Pause at the end
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
        
        if (displayText === "") {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % skills.length);
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, skillIndex, typingSpeed]);

  return (
    <section className="h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tighter text-glow">
          MASIA.
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl text-secondary font-mono">
            Systems & Machine Learning Developer
          </p>
          <div className="flex items-center text-primary font-mono text-lg md:text-xl">
            <span className="mr-2 text-secondary opacity-50">$</span>
            <span className="text-primary">{displayText}</span>
            <span className="w-2 h-6 bg-primary ml-1 animate-pulse" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-xs text-secondary mb-2 uppercase tracking-widest font-mono">Scroll to explore</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
