import { Analytics } from "@vercel/analytics/react"
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function TypingHeading() {
  const text = "I'm Srivalli, Software Engineer.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100); // typing speed (100ms per letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
      {displayedText}
      <span className="animate-pulse">|</span> {/* blinking cursor */}
    </h1>
  );
}
const profile = {
  name: "Srivalli Kotichukkala",
  tag: "Software Engineer · Full-Stack · Backend · AI",
  email: "kotichukkalasrivalli@gmail.com",
  location: "Raleigh, NC",
  links: {
    github: "https://github.com/skotichukkala",
    linkedin: "https://www.linkedin.com/in/srivalli-kotichukkala",
    resume: "/Kotichukkala_Resume.pdf", 
  },
};

const highlights = ["Full-Stack", "Backend", "Gen AI"];

const projects = [
  {
    title: "Gator Taxi",
    blurb:
      "Ride allocation engine using Min-Heap + Red-Black Tree and Strategy/Factory patterns.",
    tag: "Open-source",
    href: "https://github.com/skotichukkala/gatorTaxi",
    image: "gator.png",
  },
  {
    title: "Plagiarism Detection using NLP",
    blurb:
      "Plagiarism detection system leveraging SVM, Random Forest, and BERT. BERT acheived 85% accuracy.",
    tag: "Research",
    href: "https://github.com/skotichukkala/NLP-detectives",
    image: "nlp.png",
  },
  {
    title: "Data Migration Agents",
    blurb:
      "Multi-agent workflow (Bedrock + MCP) to translate SPL → target queries and migrate data.",
    tag: "In progress",
    href: "#",
    image: "agent.png",
  },
  {
    title: "Fetal Health Dimensionality Reduction",
    blurb:
      "Fetal health classification using dimensionality reduction (PCA, ICA, RFE) and ML models (Regression, SVM, QDA).",
    tag: "Research",
    href: "https://github.com/skotichukkala/DRtechniques",
    image: "dr.png",
  },
];

const experience = [
  {
    org: "Community Dreams Foundation",
    role: "Software Engineer",
    period: "Jul 2024 – Jun 2025",
    bullets: [
      "Designed and implemented cloud-native platforms including a Donor CRM System, Volunteer Portal, and Impact Analytics Dashboard using Java (Spring Boot), React, Python, AWS, and GCP, improving engagement and data transparency across community programs.",
      "Developed an ML-powered Donor Retention Engine leveraging AWS SageMaker, Lambda, and predictive models, increasing donor retention by 18% and automating reporting workflows by 80%.",
    ],
  },
  {
    org: "HCL Technologies",
    role: "Software Engineer",
    period: "Aug 2020 – Jul 2022",
    bullets: [
      "Built and maintained microservices and Open Banking APIs using Java (Spring Boot, JAX-RS) for Instant Payments (NPP) and Credit Card Management, ensuring compliance with ISO 20022 and improving performance across 10M+ monthly transactions.",
      "Containerized services with Docker, deployed on AWS ECS and Kubernetes, and implemented CI/CD pipelines via Jenkins, reducing deployment time by 85% and increasing release frequency.",
    ],
  },
  {
    org: "SoftScript Solutions",
    role: "Software Engineer Intern",
    period: "Dec 2019 - Apr 2020",
    bullets: [
      "Developed a full-stack healthcare web app using Python (Django, FastAPI) with ML algorithms to predict six diseases based on lab results, achieving ~85% accuracy and enabling real-time diagnostic insights.",
      "Deployed the solution on AWS with integrated CI/CD and collaborated in an Agile team to optimize model inference speed and web scalability.",
    ],
  },
];

const academics = [
  {
    school: "University of Florida",
    degree: "Masters in Computer Science",
    details: "Graduated May 2024 · GPA 3.63",
    abbr: "UF",
  },
  {
    school: "Jawaharlal Nehru Technological University",
    degree: "Bachelors in Computer Science",
    details: "Graduated Sep 2020 . GPA 8.34",
    abbr: "JNTUK",
  },
];

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
  {profile.name}
</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#academics" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-14">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-wrap gap-2">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  {h}
                </span>
              ))}
            </div>
           <TypingHeading className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
  {["I’m", "Srivalli,", "Software", "Engineer."].map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.4, duration: 0.6 }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</TypingHeading>
            <p className="w-full text-neutral-300">
              With hands-on experience across fintech, healthcare, and sustainability, I specialize in full-stack development using Java, Python, JavaScript, TypeScript, Spring Boot, Hibernate, SQL, REST APIs, Angular, and React. My background spans algorithms, distributed systems, blockchain, and computer networks, giving me a strong foundation for building scalable, data-driven solutions. I also explore Generative AI and Machine Learning, having developed projects involving AI agents, MCP servers, NLP, deep learning, and predictive modeling. 
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-300 text-neutral-900 px-5 py-2 text-sm font-medium 
             transition transform hover:scale-105 
             hover:shadow-[0_0_15px_rgba(52,211,153,0.6)]"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-300 text-neutral-900 px-5 py-2 text-sm font-medium 
             transition transform hover:scale-105 
             hover:shadow-[0_0_15px_rgba(52,211,153,0.6)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
 {/* ACADEMICS */}
      <section id="academics" className="mx-auto max-w-6xl px-5 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">EDUCATION</h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {academics.map((a, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 
           bg-gradient-to-br from-white/[0.08] to-transparent 
           p-6 text-center transition 
           hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            >
              <h3 className="text-lg font-medium">{a.school}</h3>
              <p className="text-sm text-neutral-400">{a.degree}</p>
              <p className="mt-2 text-sm text-neutral-300">{a.details}</p>
            </div>
          ))}
        </div>
      </section>
      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">EXPERIENCE</h2>
        </div>
        <div className="mt-6 space-y-6">
          {experience.map((e, i) => (
            <div key={i} className="rounded-2xl border border-white/10 
           bg-gradient-to-br from-white/[0.08] to-transparent 
           p-6 transition 
           hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-medium">{e.role}</p>
                  <p className="text-sm text-neutral-400">{e.org}</p>
                </div>
                <p className="text-sm text-neutral-400">{e.period}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300 space-y-1">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">PROJECTS</h2>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 
           bg-gradient-to-b from-white/[0.06] to-white/[0.02] 
           p-4 transition 
           hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            >
              <img
                src={`/images/${p.image}`}
                alt={p.title}
                className="aspect-[16/9] w-full overflow-hidden rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-medium group-hover:underline underline-offset-4">{p.title}</h3>
                <span className="text-xs rounded-full border border-white/15 px-2 py-0.5 text-neutral-300">{p.tag}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
     
<section id="skills" className="mx-auto max-w-6xl px-5 py-12">
  <div className="text-center mb-10">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">TECHNICAL SKILLS</h2>
  </div>
  <div className="flex flex-wrap justify-center gap-3">
    {[
      "Java",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Spring Boot",
      "Hibernate",
      "React",
      "Angular",
      "SQL",
      "REST API",
      "AWS",
      "Git",
      "CI/CD",
      "Docker",
      "Gen AI",
      "Machine Learning",
    ].map((skill, i) => (
      <span
        key={i}
        className="rounded-full bg-green-300 text-neutral-900 px-5 py-2 text-sm font-medium 
             transition transform hover:scale-105 
             hover:shadow-[0_0_15px_rgba(52,211,153,0.6)]"
      >
        {skill}
      </span>
    ))}
  </div>
</section>
      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-2xl font-medium leading-tight">Let’s create something <span className="text-neutral-400">awesome</span> together.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="rounded-full bg-white text-neutral-900 px-5 py-2 text-sm font-medium hover:opacity-90">Email me</a>
                <a href={profile.links.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2 text-sm text-neutral-200 hover:bg-white/5">Download resume</a>
              
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-neutral-200">Pages</p>
                <ul className="mt-3 space-y-2 text-neutral-400">
                  <li><a href="#work" className="hover:text-white">Projects</a></li>
                  <li><a href="#experience" className="hover:text-white">Experience</a></li>
                  <li><a href="#academics" className="hover:text-white">Education</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-neutral-200">Latest</p>
                <ul className="mt-3 space-y-2 text-neutral-400">
                  {projects.slice(0,3).map((p, i) => (
                    <li key={i}><a href={p.href} className="hover:text-white">{p.title}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-10 text-xs text-neutral-500">© {year} {profile.name}. Built with React + Tailwind.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
