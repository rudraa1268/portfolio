import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Curiosity Labs",
      duration: "March 2026 – Present",
      points: [
        "Building and maintaining full-stack web applications using Django, DRF, and React.",
        "Designing REST APIs, managing PostgreSQL databases, and handling end-to-end feature development.",
        "Collaborating on production-level codebases with focus on clean architecture and performance.",
      ],
    },
    {
      role: "Research Analyst Intern",
      company: "GraphiMitra",
      duration: "Nov 2025 – Feb 2026",
      points: [
        "Built and curated targeted company datasets across multiple domains for B2B client outreach.",
        "Performed data cleaning and basic analysis to ensure dataset accuracy and usability.",
        "Supported the sales pipeline by identifying potential leads and organizing structured outreach data.",
      ],
    },
    {
      role: "Automation Engineer",
      company: "Elecsol (Automation Division)",
      duration: "2025",
      points: [
        "Worked on SCADA system design and configuration for industrial automation projects.",
        "Handled E16 PLC programming, setup, and I/O mapping for automation workflows.",
        "Contributed to end-to-end deployment of automation systems in real industrial environments.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech — Electrical & Electronics Engineering",
      institution: "Bhilai Institute of Technology, Durg",
      year: "2021 – 2025",
    },
    {
      degree: "Class 12 (PCM)",
      institution: "Krishna Public School, Dunda",
      year: "2021 — 86.8%",
    },
    {
      degree: "Class 10",
      institution: "Krishna Public School, Dunda",
      year: "2019 — 85.8%",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-28 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-8 text-[#e4e2dd]">
            Experience
          </h2>

          <div className="space-y-4 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[#f5a623]/10 hover:border-[#f5a623]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-1 flex-wrap gap-1">
                  <h3 className="text-lg font-semibold text-[#e4e2dd]">{exp.role}</h3>
                  <span className="font-mono text-xs text-[#f5a623] whitespace-nowrap">{exp.duration}</span>
                </div>
                <p className="text-[#9a988f] text-sm mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-[#9a988f] text-sm flex items-start gap-2">
                      <span className="text-[#f5a623] mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-[#e4e2dd]">
            Education
          </h2>

          <div className="space-y-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-[#f5a623]/10 hover:border-[#f5a623]/30 transition-all flex justify-between items-center flex-wrap gap-1"
              >
                <div>
                  <h3 className="font-semibold text-[#e4e2dd]">{edu.degree}</h3>
                  <p className="text-[#9a988f] text-sm">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-[#f5a623] whitespace-nowrap">{edu.year}</span>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
