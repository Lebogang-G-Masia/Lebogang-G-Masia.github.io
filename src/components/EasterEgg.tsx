'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to the Kernel. Type a command...']);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toUpperCase();
    let response = `Command not found: ${input}`;

    if (cmd === 'M4SI4') {
      response = "ACCESS GRANTED: Kernel override successful. Welcome back, Masia.";
    } else if (cmd.includes('PARADOX') || cmd.includes('TIME TRAVEL')) {
      response = "ERROR: Temporal causality loop detected. Aborting to prevent universe segmentation fault.";
    } else if (cmd === 'ARCH') {
      response = "I use Arch btw.";
    } else if (cmd === 'LS') {
      response = "lingebra  tensorlearn  unichows  secrets.gpg";
    } else if (cmd === 'HELP') {
      response = "Available: M4SI4, ARCH, LS, HELP, EXIT";
    } else if (cmd === 'EXIT') {
      setIsOpen(false);
      return;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 right-10 w-80 md:w-96 bg-black border border-primary/40 p-4 font-mono text-sm z-50 border-glow"
        >
          <div className="flex justify-between mb-2 border-b border-primary/20 pb-1">
            <span className="text-primary text-xs">ROOT@MASIA-KERN</span>
            <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-white">×</button>
          </div>
          <div className="h-48 overflow-y-auto mb-2 text-primary/80">
            {history.map((line, i) => (
              <div key={i} className="mb-1">{line}</div>
            ))}
          </div>
          <form onSubmit={handleCommand} className="flex">
            <span className="text-primary mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-primary w-full"
              autoFocus
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
