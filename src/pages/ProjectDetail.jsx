import React from 'react';
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 font-mono text-[#e4e2dd]">
        <p className="text-[#f5a623] mb-4">404: project not found</p>
        <Link to="/" className="underline hover:text-[#f5a623]">
          back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/#projects"
          className="font-mono text-sm text-[#f5a623] hover:underline"
        >
          ← back to projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[#e4e2dd] mt-6 mb-2">
          {project.title}
        </h1>
        <p className="text-[#9a988f] mb-6">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-[#e4e2dd] border border-[#f5a623]/20 py-1 px-3 rounded"
            >
              [{tech}]
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-3 font-mono text-sm">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#f5a623]/40 text-[#f5a623] py-2 px-5 rounded hover:bg-[#f5a623]/10 transition-colors"
          >
            live demo →
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#f5a623]/20 text-[#9a988f] py-2 px-5 rounded hover:border-[#f5a623]/40 hover:text-[#f5a623] transition-colors"
          >
            source code →
          </a>
        </div>

        {project.deployNote && (
          <p className="text-[#9a988f]/70 text-xs mb-10 max-w-md">
            ⓘ {project.deployNote}
          </p>
        )}

        <section className="mb-8">
          <h2 className="font-mono text-sm text-[#f5a623] mb-3">// overview</h2>
          <p className="text-[#9a988f] leading-relaxed">{project.overview}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-mono text-sm text-[#f5a623] mb-3">// features</h2>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="text-[#9a988f] text-sm flex items-start gap-2">
                <span className="text-[#f5a623] mt-1">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-mono text-sm text-[#f5a623] mb-3">// challenges</h2>
          <p className="text-[#9a988f] leading-relaxed">{project.challenges}</p>
        </section>

        <section>
          <h2 className="font-mono text-sm text-[#f5a623] mb-3">// stack</h2>
          <p className="text-[#9a988f] leading-relaxed">{project.stack_notes}</p>
        </section>
      </div>
    </div>
  );
};
