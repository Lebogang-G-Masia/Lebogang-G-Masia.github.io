"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiCplusplus,
  SiPython,
  SiLinux,
} from "react-icons/si";
import React from "react";

/* ─────────────── DATA ─────────────── */

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

const projects = [
  {
    title: "World Monitor",
    description:
      "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface. Built with modern web technologies for maximum performance.",
    techIcons: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
    image: "/world-monitor.jpg",
    github: "https://github.com/Lebogang-G-Masia/worldmonitor",
    link: "#",
  },
  {
    title: "TensorLearn",
    description:
      "A theoretical machine learning library engineered completely from scratch in C++, focusing on low-level system performance and architectural efficiency. Implements neural networks, gradient descent, and tensor operations from first principles.",
    techIcons: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
    image: "/tensorlearn.jpg",
    github: "https://github.com/Lebogang-G-Masia/TensorLearn",
    link: "#",
  },
  {
    title: "IWIS",
    description:
      "Integrated Water Information System for Hartbeespoort Dam. A complete full-stack environment utilizing a Python/Jupyter backend and a TypeScript React frontend for real-time water quality monitoring and environmental data analysis.",
    techIcons: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ],
    image: "/iwis.jpg",
    github: "https://github.com/Lebogang-G-Masia/iwis-frontend",
    link: "#",
  },
];

const tools = [
  {
    category: "Languages & Core",
    items: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
  },
];

/* ─────────────── ANIMATION CONFIG ─────────────── */

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const childFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

/* ─────────────── PORTFOLIO ─────────────── */

export default function Portfolio() {
  return (
    <div className="relative selection:bg-purple-500/30 bg-zinc-950 font-sans text-white overflow-hidden">
      {/* ══════ FLOATING NAV ══════ */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="bg-zinc-900/80 backdrop-blur-xl px-8 py-4 rounded-full border border-zinc-800/50 flex gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200 tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* ══════ HERO ══════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 3D wavy background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
          {/* Dark overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/40" />
        </div>

        {/* Animated ambient orbs that add to the 3D feel */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/15 blur-[100px]"
        />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/90">
            Hi I&apos;m Lebogang Masia.
          </h1>
        </motion.div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-24 px-6 relative bg-zinc-950 z-10"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={childFade}
            className="text-3xl md:text-5xl font-bold text-zinc-200 mb-12"
          >
            Software Engineer &amp; Systems Enthusiast.
          </motion.h2>

          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            <motion.p variants={childFade}>
              I am a software engineering student at Belgium Campus ITversity. My
              journey is driven by an insatiable curiosity for how complex
              systems operate under the hood, heavily focusing on C++ and Python
              architectures. I believe in trying out new things and picking up
              challenges as it is always great to have knowledge in a variety of
              subjects and have various experiences to share. I&apos;m always interested
              in pushing my boundaries and developing my weaknesses into strengths.
            </motion.p>
            <motion.p variants={childFade}>
              Whether I&apos;m designing a sleek intelligence dashboard or
              engineering a complex machine learning library from scratch, I&apos;m
              always striving to create something unique and innovative. I love
              experimenting with new technologies and staying up-to-date with the
              latest trends in systems engineering and web development.
            </motion.p>
            <motion.p variants={childFade}>
              Right now, I&apos;m focused on pushing the boundaries of theoretical
              machine learning and expanding my knowledge of Linux kernel
              internals. But I&apos;m always open to new opportunities and
              collaborations.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ══════ WORK ══════ */}
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
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center hover:border-zinc-700/60 hover:bg-zinc-900/70 transition-all duration-500"
              >
                {/* Left: content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-zinc-100 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack icons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.techIcons.map((t) => (
                      <div key={t.name} className="group/icon relative">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/icon:bg-zinc-700 transition-colors duration-300">
                          <t.Icon
                            size={20}
                            style={{ color: t.color }}
                            className="opacity-70 group-hover/icon:opacity-100 transition-opacity"
                          />
                        </div>
                        {/* Tooltip */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-[10px] font-semibold text-zinc-300 rounded-md whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:scale-110 transition-all duration-300 text-white shadow-lg"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:scale-110 transition-all duration-300 text-white shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Right: image */}
                <div className="flex-1 w-full relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TOOLS ══════ */}
      <section className="min-h-[80vh] py-24 px-6 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-zinc-700/80 mb-20 tracking-tighter"
          >
            TOOLS I&apos;M USING.
          </motion.h2>

          <div className="space-y-16">
            {tools.map((section, idx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-medium text-zinc-500 mb-6 uppercase tracking-wider">
                  {section.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800/80 hover:border-zinc-700 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      <item.Icon
                        size={18}
                        style={{ color: item.color }}
                        className="opacity-80"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section
        id="contact"
        className="min-h-screen bg-zinc-950 relative flex flex-col overflow-hidden pt-24"
      >
        {/* 3D spheres background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/contact-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6">
          <div className="max-w-[90rem] mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-[12vw] leading-none font-bold text-white tracking-tighter mb-12"
            >
              CONTACT
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-12 border-t border-zinc-800/50 pt-12">
              {/* Left: CTA text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <p className="text-zinc-400 text-sm font-semibold tracking-wider leading-relaxed">
                  GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON
                  SOMETHING? SEND ME AN EMAIL
                </p>
              </motion.div>

              {/* Right: Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-start md:items-end gap-6"
              >
                <a
                  href="https://github.com/Lebogang-G-Masia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-5xl font-bold text-zinc-300 hover:text-white transition-colors duration-300"
                >
                  GITHUB
                </a>
                <a
                  href="#"
                  className="text-3xl md:text-5xl font-bold text-zinc-300 hover:text-white transition-colors duration-300"
                >
                  LINKEDIN
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-6 pb-24 md:pb-8 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-zinc-500 tracking-wider">
          <span>© {new Date().getFullYear()} LEBOGANG MASIA</span>
          <span className="mt-4 md:mt-0">
            DESIGN &amp; DEPLOYED BY LEBOGANG MASIA
          </span>
        </div>
      </section>
    </div>
  );
}
