"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ArrowDown, MapPin, Sparkles } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiCplusplus,
  SiPython,
  SiLinux,
} from "react-icons/si";
import React, { useRef, useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

const projects = [
  {
    num: "01",
    title: "World Monitor",
    subtitle: "AI Intelligence Dashboard",
    description:
      "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.",
    tags: ["TypeScript", "React", "Next.js", "Python"],
    image: "/world-monitor.jpg",
    github: "https://github.com/Lebogang-G-Masia/worldmonitor",
    accent: "#9f1239", // rose-800
  },
  {
    num: "02",
    title: "TensorLearn",
    subtitle: "C++ Machine Learning Library",
    description:
      "A theoretical machine learning library engineered from scratch in C++, focusing on low-level system performance. Neural networks, gradient descent, and tensor operations from first principles.",
    tags: ["C++", "Linux", "Git"],
    image: "/tensorlearn.jpg",
    github: "https://github.com/Lebogang-G-Masia/TensorLearn",
    accent: "#be123c", // rose-700
  },
  {
    num: "03",
    title: "IWIS",
    subtitle: "Environmental Full-Stack Platform",
    description:
      "Integrated Water Information System for Hartbeespoort Dam. Python/Jupyter backend with a TypeScript React frontend for real-time water quality monitoring.",
    tags: ["TypeScript", "React", "Python", "Node.js"],
    image: "/iwis.jpg",
    github: "https://github.com/Lebogang-G-Masia/iwis-frontend",
    accent: "#881337", // rose-900
  },
];

const skills = [
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#EDEDED" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#6366f1" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#EDEDED" },
];

/* ═══════════════════════════════════════════════════════════
   UTILITY COMPONENTS
═══════════════════════════════════════════════════════════ */

function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9990] opacity-[0.018]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "150px",
      }}
    />
  );
}

/* Animated counter for stats */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* Marquee */
function SkillMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...skills, ...skills];
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 w-max"
      >
        {items.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-zinc-400 text-sm font-medium whitespace-nowrap shrink-0 hover:bg-white/[0.06] hover:text-zinc-200 transition-colors duration-300"
          >
            <skill.Icon size={15} style={{ color: skill.color }} className="opacity-70" />
            {skill.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* Animated text reveal — word by word */
function RevealText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : { y: "100%" }}
            transition={{
              delay: delay + i * 0.04,
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Bento card */
function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.025] p-7 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD — Alternating split layout
═══════════════════════════════════════════════════════════ */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="group relative"
    >
      {/* Background number watermark */}
      <span className="absolute -top-8 -right-4 text-[200px] font-black text-white/[0.015] leading-none select-none pointer-events-none hidden lg:block">
        {project.num}
      </span>

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-14 items-center`}>
        {/* Image side */}
        <div className="flex-1 w-full">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.06]"
            style={{ background: `linear-gradient(135deg, ${project.accent}10, transparent)` }}
          >
            <motion.div style={{ y: imgY }} className="relative aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
              />
            </motion.div>

            {/* Hover color overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
              style={{ background: `linear-gradient(135deg, ${project.accent}35, transparent 60%)` }}
            />

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-zinc-950/50 to-transparent" />

            {/* Number badge */}
            <span
              className="absolute top-5 left-6 text-[11px] font-black tracking-[0.2em]"
              style={{ color: project.accent }}
            >
              {project.num}
            </span>

            {/* Subtitle badge */}
            <span className="absolute top-5 right-6 text-[10px] font-semibold text-white/30 tracking-wider uppercase">
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 w-full space-y-6 lg:py-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 text-[11px] font-semibold rounded-full border text-zinc-400"
                style={{ borderColor: `${project.accent}25`, background: `${project.accent}08` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2.5 text-sm font-semibold transition-colors duration-200 pt-2"
            style={{ color: project.accent }}
          >
            <FaGithub size={16} />
            View Source
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO — Name-dominant with staggered letter animation
═══════════════════════════════════════════════════════════ */

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const firstName = "LEBOGANG";
  const lastName = "MASIA";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG image with parallax zoom + slow rotation */}
      <motion.div className="absolute inset-[-10%]" style={{ scale: bgScale }}>
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-65"
          style={{ animation: "aurora-1 40s ease-in-out infinite" }}
        />
      </motion.div>

      {/* Aurora blobs — vivid and fast */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[70vw] h-[70vw] rounded-full blur-[160px] opacity-50"
          style={{
            top: "-25%", left: "-15%",
            background: "radial-gradient(circle, rgba(159,18,57,0.6), transparent 65%)", // rose-800
            animation: "aurora-1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-40"
          style={{
            top: "15%", right: "-15%",
            background: "radial-gradient(circle, rgba(190,18,60,0.5), transparent 65%)", // rose-700
            animation: "aurora-2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-35"
          style={{
            bottom: "-15%", left: "25%",
            background: "radial-gradient(circle, rgba(136,19,55,0.5), transparent 65%)", // rose-900
            animation: "aurora-3 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(9,9,11,0.6))]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ─── Main content ─── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 w-full"
      >


        {/* ─── THE NAME — letter by letter drop-in ─── */}
        <div className="mb-4 overflow-hidden">
          <h1
            className="font-black tracking-[-0.05em] leading-[0.85]"
            style={{ fontSize: "clamp(60px, 14vw, 200px)" }}
          >
            {/* LEBOGANG — each letter staggers in */}
            <span className="block">
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ y: "110%", opacity: 0, rotateX: -40 }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.05,
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="inline-block text-white"
                  style={{ perspective: "600px" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* MASIA — outlined / gradient stroke effect */}
            <span className="block mt-2">
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ y: "110%", opacity: 0, rotateX: -40 }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.06,
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                    perspective: "600px",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-10"
        >
          Software Engineer · C++ · Python · Full-Stack
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            View My Work
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PORTFOLIO
═══════════════════════════════════════════════════════════ */

export default function Portfolio() {
  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden selection:bg-rose-900/40">
      <Grain />

      {/* ── NAV ── */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-zinc-900/80 backdrop-blur-xl px-8 py-4 rounded-full border border-zinc-800/50 flex gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-900/10 via-transparent to-red-900/10 blur-xl -z-10" />
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

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── ABOUT — Bento ── */}
      <section id="about" className="py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-14"
          >
            <div className="w-8 h-px bg-gradient-to-r from-rose-700 to-transparent" />
            <span className="text-[11px] font-semibold text-rose-500 tracking-[0.25em] uppercase">
              About
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Bio */}
            <BentoCard className="lg:col-span-2 lg:row-span-2 p-10">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-8">
                <RevealText text="Software Engineer &" className="text-white" />
                <br />
                <RevealText
                  text="Systems Enthusiast."
                  delay={0.3}
                  className="bg-clip-text text-transparent"
                />
              </h2>
              <div
                className="[&_.reveal-heading]:bg-clip-text [&_.reveal-heading]:text-transparent"
                style={
                  {
                    "--gradient": "linear-gradient(135deg, #be123c, #fb7185)", // rose-700 to rose-400
                  } as React.CSSProperties
                }
              >
                <div className="space-y-5 text-zinc-400 text-[15px] leading-[1.85]">
                  <p>
                    I&apos;m a software engineering student at Belgium Campus ITversity. My
                    journey is driven by deep curiosity for how complex systems operate
                    under the hood — <span className="text-zinc-200">C++ and Python</span> are
                    my native languages.
                  </p>
                  <p>
                    Whether building <span className="text-zinc-200">AI intelligence dashboards</span> or
                    writing ML libraries from raw mathematics, I pursue one standard:
                    elegant, performant engineering.
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Location */}
            <BentoCard delay={0.05}>
              <MapPin size={18} className="text-rose-500 mb-5" />
              <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                Based in
              </p>
              <p className="text-white text-lg font-bold">South Africa</p>
            </BentoCard>

            {/* Currently */}
            <BentoCard delay={0.1}>
              <Sparkles size={18} className="text-red-400 mb-5" />
              <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                Currently
              </p>
              <p className="text-white text-sm font-semibold leading-snug">
                Theoretical ML &amp; Linux kernel internals
              </p>
            </BentoCard>

            {/* Stats */}
            {[
              { val: 3, suffix: "+", label: "Projects shipped" },
              { val: 5, suffix: "+", label: "Tech stacks" },
              { val: 99, suffix: "%", label: "Curiosity" },
            ].map((s, i) => (
              <BentoCard key={s.label} delay={0.05 * (i + 3)}>
                <div className="text-center">
                  <div
                    className="text-4xl font-black mb-1 bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #be123c, #fb7185)" }}
                  >
                    <Counter target={s.val} suffix={s.suffix} />
                  </div>
                  <p className="text-zinc-500 text-xs font-medium">{s.label}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS — Dual Marquee ── */}
      <section className="py-16 space-y-3 overflow-hidden">
        <SkillMarquee />
        <SkillMarquee reverse />
      </section>

      {/* ── WORK — Alternating Split ── */}
      <section id="work" className="py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-gradient-to-r from-rose-700 to-transparent" />
            <span className="text-[11px] font-semibold text-rose-500 tracking-[0.25em] uppercase">
              Selected Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-20"
          >
            Things I&apos;ve built.
          </motion.h2>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="min-h-screen bg-zinc-950 relative flex flex-col overflow-hidden pt-24"
      >
        <div className="absolute inset-0 -z-10">
          <img src="/contact-bg.jpg" alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(159,18,57,0.1),transparent)]" />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-[90rem] mx-auto w-full">
            {/* Letter-by-letter CONTACT */}
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                className="flex flex-wrap"
                style={{ fontSize: "clamp(60px, 12vw, 180px)" }}
              >
                {"CONTACT".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
                      },
                    }}
                    className="inline-block font-bold tracking-tighter leading-none"
                    style={{
                      background: "linear-gradient(180deg, #FFFFFF 30%, #52525b 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-zinc-800/50 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <p className="text-zinc-400 text-sm font-semibold tracking-wider leading-relaxed mb-8">
                  GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON SOMETHING?
                </p>
                <a
                  href="mailto:masialebogang2@gmail.com"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden relative"
                  style={{ background: "linear-gradient(135deg, #9f1239, #be123c)" }}
                >
                  Send me an email
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-start md:items-end gap-4"
              >
                {[
                  { name: "GITHUB", href: "https://github.com/Lebogang-G-Masia" },
                  { name: "LINKEDIN", href: "https://linkedin.com/in/lebogang-masia" },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-3xl md:text-5xl font-bold text-zinc-400 hover:text-white transition-all duration-300"
                  >
                    {name}
                    <ArrowUpRight
                      size={24}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-rose-500"
                    />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 md:px-16 pb-24 md:pb-8 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-zinc-600 tracking-wider">
          <span>© {new Date().getFullYear()} LEBOGANG MASIA</span>
          <span className="mt-4 md:mt-0">DESIGN &amp; DEPLOYED BY LEBOGANG MASIA</span>
        </div>
      </section>
    </div>
  );
}
