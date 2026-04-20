'use client';

import React, { useState, useEffect } from 'react';

const SideMonitor: React.FC = () => {
  const [load, setLoad] = useState([0.15, 0.42, 0.28]);
  const [memory, setMemory] = useState(4124);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad([
        parseFloat((Math.random() * 0.5 + 0.1).toFixed(2)),
        parseFloat((Math.random() * 0.4 + 0.2).toFixed(2)),
        parseFloat((Math.random() * 0.3 + 0.3).toFixed(2)),
      ]);
      setMemory(prev => prev + (Math.random() > 0.5 ? 1 : -1) * 12);
      setUptime(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-16 md:w-20 border-r border-primary/20 bg-background hidden md:flex flex-col items-center py-10 z-50 overflow-hidden font-mono text-[10px]">
      <div className="rotate-90 origin-center whitespace-nowrap mb-20 text-primary font-bold tracking-[0.3em]">
        KERNEL_V7.2
      </div>
      
      <div className="flex flex-col gap-10 mt-20 opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center">
          <span className="text-secondary mb-1">LOAD</span>
          <div className="w-1 h-12 bg-primary/10 relative overflow-hidden">
             <div className="absolute bottom-0 w-full bg-primary" style={{ height: `${load[0] * 100}%` }} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-secondary mb-1">MEM</span>
          <span className="text-primary">{memory}MiB</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-secondary mb-1">UP</span>
          <span className="text-primary">{uptime}s</span>
        </div>
      </div>

      <div className="mt-auto mb-10 flex flex-col gap-4 text-secondary/30">
        <div className="w-4 h-[1px] bg-secondary/30" />
        <div className="w-4 h-[1px] bg-secondary/30" />
        <div className="w-4 h-[1px] bg-secondary/30" />
      </div>
    </div>
  );
};

export default SideMonitor;
