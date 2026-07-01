import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Next.js", "JavaScript", "TailwindCSS"];
  const backendSkills = ["Django", "Python", "SQL", "REST APIs", "DRF"];
  const Db = ["PostgreSQL", "SQLite", "MongoDB"];
  const ToolsDevOps = ["Git", "GitHub", "Postman", "VS Code"];

  const skillGroup = (label, skills) => (
    <div>
      <h3 className="font-mono text-sm text-[#f5a623] mb-3">// {label}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((tech, key) => (
          <span
            key={key}
            className="font-mono text-xs text-[#e4e2dd] border border-[#f5a623]/20 py-1 px-3 rounded hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors"
          >
            [{tech}]
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="relative py-28 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#e4e2dd]">
            About Me
          </h2>

          <div className="rounded-lg p-8 border border-[#f5a623]/10">
            <p className="text-[#9a988f] mb-8 leading-relaxed">
              I'm a Full-Stack Developer with a background in Electrical &
              Electronics Engineering — which means I think in systems, not
              just syntax. I work primarily with Python, Django, and DRF on
              the backend, and React on the frontend, building applications
              that are clean under the hood and usable on the surface.
              Currently at Curiosity Labs, I've gone from automating
              industrial systems to building web platforms — and that
              cross-domain experience shapes how I approach problems. I care
              about writing APIs that actually make sense, keeping codebases
              maintainable, and shipping things that work in the real world,
              not just in dev.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillGroup("frontend", frontendSkills)}
              {skillGroup("backend", backendSkills)}
              {skillGroup("database", Db)}
              {skillGroup("tools", ToolsDevOps)}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
