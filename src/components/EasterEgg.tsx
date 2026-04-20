'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EasterEggProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const EasterEgg: React.FC<EasterEggProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to the Kernel. Type a command...']);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const historyEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const virtualFS: Record<string, string> = {
    'LINGEBRA': 'A custom C++ linear algebra library. SIMD optimized. High performance.',
    'TENSORLEARN': 'Deep learning framework from scratch. CUDA support. Custom autograd.',
    'UNICHOWS': 'Cloud-native food delivery infrastructure. Go & GCP.',
    'RESUME.MD': '# LEBOGANG MASIA\nSystems & ML Developer\n\nExpertise: C++, CUDA, Python, Linux Kernel, Distributed Systems.',
    'SECRETS.GPG': 'Error: Decryption key not found. GPG: decryption failed: No secret key'
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCmd = input.trim();
    const parts = fullCmd.split(' ');
    const cmd = parts[0].toUpperCase();
    const arg = parts[1]?.toUpperCase();
    
    let response: string | React.ReactNode = `Command not found: ${input}`;

    if (cmd === 'NEOFETCH') {
      response = (
        <div className="flex gap-4 text-[10px] leading-tight">
          <div className="text-primary font-bold">
            <div>&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;/&nbsp;&nbsp;\&nbsp;&nbsp;</div>
            <div>&nbsp;|    |&nbsp;</div>
            <div>&nbsp;&nbsp;\__/&nbsp;&nbsp;</div>
          </div>
          <div className="text-secondary">
            <div><span className="text-primary font-bold">OS</span>: MasiaOS v7.2</div>
            <div><span className="text-primary font-bold">Kernel</span>: 6.8.0-generic</div>
            <div><span className="text-primary font-bold">Uptime</span>: 1337h</div>
            <div><span className="text-primary font-bold">Shell</span>: msh</div>
            <div><span className="text-primary font-bold">CPU</span>: AMD Ryzen 9 @ 4.9GHz</div>
            <div><span className="text-primary font-bold">GPU</span>: NVIDIA RTX 4090</div>
          </div>
        </div>
      );
    } else if (cmd === 'CAT') {
      if (!arg) {
        response = "Usage: cat <filename>";
      } else if (virtualFS[arg]) {
        response = virtualFS[arg];
      } else {
        response = `cat: ${arg}: No such file or directory`;
      }
    } else if (cmd === 'M4SI4') {
      response = "ACCESS GRANTED: Kernel override successful. Welcome back, Masia.";
    } else if (cmd.includes('PARADOX') || cmd.includes('TIME TRAVEL')) {
      response = "ERROR: Temporal causality loop detected. Aborting to prevent universe segmentation fault.";
    } else if (cmd === 'ARCH') {
      response = "I use Arch btw.";
    } else if (cmd === 'LS') {
      response = Object.keys(virtualFS).map(f => f.toLowerCase()).join('  ');
    } else if (cmd === 'HELP') {
      response = "Available: NEOFETCH, LS, CAT, ARCH, HELP, EXIT";
    } else if (cmd === 'EXIT') {
      setIsOpen(false);
      return;
    }

    setHistory([...history, `> ${input}`, response as any]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 right-10 w-80 md:w-96 bg-background border border-primary/40 p-4 font-mono text-sm z-50 border-glow shadow-2xl shadow-primary/20"
        >
          <div className="flex justify-between mb-2 border-b border-primary/20 pb-1">
            <span className="text-primary text-xs">ROOT@MASIA-KERN</span>
            <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-white">×</button>
          </div>
          <div className="h-64 overflow-y-auto mb-2 text-primary/80 scrollbar-hide">
            {history.map((line, i) => (
              <div key={i} className="mb-2 whitespace-pre-wrap">{line}</div>
            ))}
            <div ref={historyEndRef} />
          </div>
          <form onSubmit={handleCommand} className="flex">
            <span className="text-primary mr-2 font-bold">$</span>
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
