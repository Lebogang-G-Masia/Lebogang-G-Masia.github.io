import re

with open('src/components/Portfolio.tsx', 'r') as f:
    content = f.read()

# 1. Update Imports
import_react_icons = """import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiThreedotjs, SiWebgl, SiPostgresql, SiMysql, SiMongodb, SiNodedotjs, SiGithub, SiGit,
  SiCplusplus, SiPython, SiLinux
} from "react-icons/si";"""

content = re.sub(r'import \{[^}]+\} from "react-icons/si";', import_react_icons, content, flags=re.MULTILINE|re.DOTALL)


# 2. Update Projects array
projects_array = """const projects = [
  {
    title: "World Monitor",
    description: "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.",
    techIcons: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Python", Icon: SiPython, color: "#3776AB" }
    ],
    image: "https://via.placeholder.com/800x400/09090b/ffffff?text=World+Monitor",
    github: "https://github.com/Lebogang-G-Masia/worldmonitor",
    link: "#",
    accent: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "TensorLearn",
    description: "A theoretical machine learning library engineered completely from scratch in C++, focusing on low-level system performance and architectural efficiency.",
    techIcons: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Git", Icon: SiGit, color: "#F05032" }
    ],
    image: "https://via.placeholder.com/800x400/09090b/ffffff?text=TensorLearn+C%2B%2B",
    github: "https://github.com/Lebogang-G-Masia/TensorLearn",
    link: "#",
    accent: "from-emerald-500/20 to-teal-500/20"
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
    image: "https://via.placeholder.com/800x400/09090b/ffffff?text=IWIS+Dashboard",
    github: "https://github.com/Lebogang-G-Masia/iwis-frontend",
    link: "#",
    accent: "from-cyan-500/20 to-blue-500/20"
  }
];"""

content = re.sub(r'const projects = \[.*?\];', projects_array, content, flags=re.MULTILINE|re.DOTALL)


# 3. Update Tools array
tools_array = """const allTools = [
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" }
];"""

content = re.sub(r'const allTools = \[.*?\];', tools_array, content, flags=re.MULTILINE|re.DOTALL)

# 4. Update Name in Hero
content = content.replace("KM.", "LM.")
content = content.replace("KARTHIK", "LEBOGANG")
content = content.replace("MUDUNURI.", "MASIA.")
content = content.replace("contact@karthikmudunuri.com", "masia@example.com")
content = content.replace("Karthik Mudunuri", "Lebogang Masia")


# 5. Update Bios and copy
old_hero_sub = 'Architecting <span className="text-white font-medium">immaculate digital experiences</span> that blur the line between design and engineering.'
new_hero_sub = 'Software Engineer passionate about <span className="text-white font-medium">systems engineering</span> and <span className="text-white font-medium">theoretical machine learning</span>.'
content = content.replace(old_hero_sub, new_hero_sub)

old_bio_1 = '"Pursuing my B.Tech at Woxsen University, my journey is driven by an insatiable curiosity for Front-end & Full Stack Development. I command a versatile stack including JavaScript, Next.js, React, and CSS.",'
new_bio_1 = '"I am a software engineering student at Belgium Campus ITversity. My journey is driven by an insatiable curiosity for how complex systems operate under the hood, heavily focusing on C++ and Python architectures.",'
content = content.replace(old_bio_1, new_bio_1)

old_bio_2 = '"Whether I\'m architecting a sleek user interface or engineering complex backend logic, my north star remains the same: crafting the extraordinary. I thrive on challenges, transforming weaknesses into my sharpest tools.",'
new_bio_2 = '"Whether I\'m building high-level intelligence dashboards like World Monitor or writing low-level machine learning libraries from scratch, my north star remains the same: highly performant, robust engineering.",'
content = content.replace(old_bio_2, new_bio_2)

old_bio_3 = '"Right now, I\'m focused on pushing boundaries in web performance and 3D rendering. My inbox is always open for ambitious collaborations."'
new_bio_3 = '"Right now, I\'m focused on pushing the boundaries of theoretical machine learning and expanding my knowledge of Linux kernel internals. My inbox is always open for ambitious collaborations."'
content = content.replace(old_bio_3, new_bio_3)


old_split = 'const isHighlight = ["JavaScript,", "Next.js,", "React,", "CSS.", "crafting", "extraordinary.", "3D", "performance"].includes(word);'
new_split = 'const isHighlight = ["Belgium", "Campus", "ITversity.", "C++", "Python", "architectures.", "World", "Monitor", "machine", "learning", "libraries", "performant,", "robust", "engineering.", "Linux", "kernel", "internals."].includes(word);'
content = content.replace(old_split, new_split)

with open('src/components/Portfolio.tsx', 'w') as f:
    f.write(content)

