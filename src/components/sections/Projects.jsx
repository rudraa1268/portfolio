import React from 'react';
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#e4e2dd]">
            Featured Projects
          </h2>

          <div className="space-y-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group flex items-center justify-between gap-4 p-5 rounded-lg border border-[#f5a623]/10 hover:border-[#f5a623]/40 hover:bg-[#f5a623]/[0.03] transition-all"
              >
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-[#e4e2dd] group-hover:text-[#f5a623] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#9a988f] text-sm mt-1 truncate">
                    {project.tagline}
                  </p>
                </div>
                <span className="font-mono text-sm text-[#f5a623] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  view →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
