import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

const codeLines = [
  { text: "const dev = {", delay: 0 },
  { text: '  name: "Rudra Pandey",', delay: 300 },
  { text: '  stack: ["Python", "Django", "React"],', delay: 600 },
  { text: '  role: "Full-Stack Developer",', delay: 900 },
  { text: '  status: "open_to_work",', delay: 1200 },
  { text: "};", delay: 1500 },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f5a623]/10 blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <RevealOnScroll>
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#e4e2dd] leading-tight">
              Rudra Pandey
            </h1>
            <p className="text-[#9a988f] text-lg mb-8 max-w-lg border-l-2 border-[#f5a623]/40 pl-4">
              Backend-leaning full-stack developer. I build with Python, Django,
              DRF, and React — currently at Curiosity Labs, actively looking for
              SDE roles where I can ship real products.
              <span className="text-[#f5a623] animate-blink ml-1">|</span>
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="#projects"
                className="border border-[#f5a623]/40 text-[#f5a623] py-3 px-6 rounded transition-all duration-200
               hover:-translate-y-0.5 hover:bg-[#f5a623]/10"
              >
                view projects
              </a>

              <a
                href="#contact"
                className="border border-[#f5a623]/40 text-[#f5a623] py-3 px-6 rounded transition-all duration-200
               hover:-translate-y-0.5 hover:bg-[#f5a623]/10"
              >
                contact me
              </a>
              <a
                href="/Rudra.pdf"
                download="Rudra_Resume.pdf"
                className="border border-[#f5a623]/40 text-[#f5a623] py-3 px-6 rounded transition-all duration-200
               hover:-translate-y-0.5 hover:bg-[#f5a623]/10"
              >
                download resume
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* decorative animated code panel, desktop only */}
        <div className="hidden lg:block">
          <div className="rounded-lg border border-[#f5a623]/15 bg-[#111214] shadow-[0_0_40px_rgba(245,166,35,0.06)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#f5a623]/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f5a623]/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f5a623]/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f5a623]/10" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="text-[#9a988f] whitespace-pre opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${line.delay}ms` }}
                >
                  {line.text}
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-[#f5a623] animate-blink mt-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
