'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 px-8 md:px-20 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 font-mono border-b border-primary/20 pb-2 inline-block">
          &gt; ABOUT_ME
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              I am a 3rd-year Bachelor of Computing student specializing in 
              <span className="text-foreground"> high-performance computing</span>, 
              <span className="text-foreground"> C++</span>, and 
              <span className="text-foreground"> machine learning</span>.
            </p>
            <p>
              My focus lies at the intersection of systems-level optimization and 
              algorithmic complexity. I build libraries that push the boundaries 
              of performance, from custom linear algebra engines to quantized 
              neural network implementations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                { label: "OS", value: "Arch Linux" },
                { label: "SHELL", value: "Fish / Zsh" },
                { label: "EDITOR", value: "Neovim" },
                { label: "DEBUG", value: "GDB / LLDB" },
                { label: "CPU", value: "x86_64 / ARM" },
                { label: "GPU", value: "CUDA Support" }
              ].map(spec => (
                <div key={spec.label} className="border border-primary/10 p-4 bg-primary/5">
                  <p className="text-[10px] text-primary/40 mb-1">{spec.label}</p>
                  <p className="text-sm font-mono text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 border border-primary/20 rounded-sm font-mono text-xs relative overflow-hidden h-fit">
            <div className="flex justify-between items-center mb-4 border-b border-primary/10 pb-2">
              <span className="text-primary/40">PROFILER.EXE</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <pre className="text-primary/70 leading-tight">
              <code>
{`[0.0012] init_masia_core()
[0.0245] loading_ds_algo...
[0.1042] mounting_rev_eng...
[0.1450] OK: all_systems_go

$ git --version
git version 2.43.0

$ uname -a
Linux masia-pc 6.6.10-arch
#1 SMP PREEMPT_DYNAMIC
x86_64 GNU/Linux

$ du -sh .
42G    projects/`}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
