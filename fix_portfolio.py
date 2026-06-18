import re

with open('src/components/Portfolio.tsx', 'r') as f:
    content = f.read()

# I am completely wiping out the complex framer-motion components (Spotlight, Magnetic, FluidBackground)
# and restoring the original, standard design from the very first successful response.

clean_content = '''"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiPostgresql, SiMysql, SiMongodb, SiNodedotjs, SiGithub, SiGit,
  SiCplusplus, SiPython, SiLinux
} from "react-icons/si";
import React from "react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

const projects = [
  {
    title: "World Monitor",
    description: "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.",
    techIcons: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Python", Icon: SiPython, color: "#3776AB" }
    ],
    image: "https://via.placeholder.com/800x400/18181b/ffffff?text=World+Monitor",
    github: "https://github.com/Lebogang-G-Masia/worldmonitor",
    link: "#",
  },
  {
    title: "TensorLearn",
    description: "A theoretical machine learning library engineered completely from scratch in C++, focusing on low-level system performance and architectural efficiency.",
    techIcons: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Git", Icon: SiGit, color: "#F05032" }
    ],
    image: "https://via.placeholder.com/800x400/18181b/ffffff?text=TensorLearn+C%2B%2B",
    github: "https://github.com/Lebogang-G-Masia/TensorLearn",
    link: "#",
  },
  {
    title: "IWIS",
    description: "Integrated Water Information System for Hartbeespoort Dam. A complete full-stack environment utilizing a Python/Jupyter backend and a TypeScript React frontend.",
    techIcons: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" }
    ],
    image: "https://via.placeholder.com/800x400/18181b/ffffff?text=IWIS+Dashboard",
    github: "https://github.com/Lebogang-G-Masia/iwis-frontend",
    link: "#",
  }
];

const tools = [
  {
    category: "Languages & Core",
    items: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    category: "Systems & Data",
    items: [
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" }
    ]
  }
];

export default function Portfolio() {
  return (
    <div className="relative selection:bg-purple-500/30 bg-zinc-950 font-sans text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="bg-zinc-900/80 backdrop-blur-xl px-8 py-4 rounded-full border border-zinc-800/50 flex gap-8 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-zinc-950">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/30 blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/20 blur-[150px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/90">
            Hi I&apos;m Lebogang Masia.
          </h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-24 px-6 relative bg-zinc-950 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold text-zinc-200 mb-12"
          >
            Software Engineer & Systems Enthusiast.
          </motion.h2>

          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I am a software engineering student at Belgium Campus ITversity. My journey is driven by an insatiable curiosity for how complex systems operate under the hood, heavily focusing on C++ and Python architectures.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Whether I&apos;m building high-level intelligence dashboards like World Monitor or writing low-level machine learning libraries from scratch, my north star remains the same: highly performant, robust engineering.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Right now, I&apos;m focused on pushing the boundaries of theoretical machine learning and expanding my knowledge of Linux kernel internals. My inbox is always open for ambitious collaborations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-24 px-6 bg-zinc-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center text-white mb-20"
          >
            Check out some of my work!
          </motion.h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-zinc-100 uppercase">{project.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.techIcons.map(t => (
                      <div key={t.name} className="group relative">
                         <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                           <t.Icon size={20} style={{ color: t.color }} className="opacity-70 group-hover:opacity-100" />
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={project.github} className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors text-white shadow-lg">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.link} className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors text-white shadow-lg">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex-1 w-full relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full absolute inset-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="min-h-[80vh] py-24 px-6 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-zinc-700/80 mb-20 tracking-tighter"
          >
            TOOLS IM USING.
          </motion.h2>

          <div className="space-y-16">
            {tools.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-medium text-zinc-500 mb-6 uppercase tracking-wider">{section.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {section.items.map(item => (
                    <div key={item.name} className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800/80 transition-colors cursor-default">
                      <item.Icon size={18} style={{ color: item.color }} className="opacity-80" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-zinc-950 relative flex flex-col overflow-hidden pt-24">
        {/* Subtle dark 3D spheres background */}
        <div className="absolute inset-0 -z-10 opacity-50">
           <motion.div 
             animate={{ y: [0, -30, 0] }} 
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 blur-[2px] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.8)]"
           />
           <motion.div 
             animate={{ y: [0, 40, 0] }} 
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-[40%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 blur-[3px] shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.9)]"
           />
           <motion.div 
             animate={{ y: [0, -20, 0], x: [0, 20, 0] }} 
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[40%] left-[45%] w-48 h-48 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 blur-[1px] shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.8)]"
           />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6">
          <div className="max-w-[90rem] mx-auto w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] leading-none font-bold text-white tracking-tighter mb-12"
            >
              CONTACT
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-12 border-t border-zinc-800/50 pt-12">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <p className="text-zinc-400 text-sm font-semibold tracking-wider leading-relaxed">
                  GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON SOMETHING? SEND ME AN EMAIL
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start md:items-end gap-6"
              >
                <a href="https://github.com/Lebogang-G-Masia" className="text-3xl md:text-5xl font-bold text-zinc-300 hover:text-white transition-colors">
                  GITHUB
                </a>
                <a href="#" className="text-3xl md:text-5xl font-bold text-zinc-300 hover:text-white transition-colors">
                  LINKEDIN
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-6 pb-24 md:pb-8 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-zinc-500 tracking-wider">
          <span>© {new Date().getFullYear()} Lebogang Masia</span>
          <span className="mt-4 md:mt-0">DESIGN & DEPLOYED BY LEBOGANG MASIA</span>
        </div>
      </section>

    </div>
  );
}
'''

with open('src/components/Portfolio.tsx', 'w') as f:
    f.write(clean_content)

