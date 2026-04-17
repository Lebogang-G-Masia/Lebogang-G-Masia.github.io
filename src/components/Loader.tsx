'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hints = [
  "INITIALIZING KERNEL...",
  "SEARCHING FOR BACKDOORS...",
  "HINT: THE BACKTICK IS THE KEY.",
  "TRY COMBINING WITH CONTROL...",
  "CAUTION: TEMPORAL LOOPS DETECTED.",
  "READY."
];

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev < hints.length - 1 ? prev + 1 : prev));
    }, 800);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // Roughly 5 seconds total

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center font-mono p-6"
    >
      <div className="w-full max-w-md">
        <div className="flex justify-between mb-2 text-primary text-xs tracking-widest">
          <span>SYSTEM_BOOT_SEQUENCE</span>
          <span>{progress}%</span>
        </div>
        
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="h-20 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-secondary text-sm md:text-base"
            >
              <span className="text-primary mr-2">{'>'}</span>
              {hints[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="h-0.5 bg-primary/30"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
