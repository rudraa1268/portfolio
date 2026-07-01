import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "rudrapandey1268@gmail.com",
      href: "mailto:rudrapandey1268@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 8269477548",
      href: "tel:+918269477548",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rudraa-pandey02102002",
      href: "https://www.linkedin.com/in/rudraa-pandey02102002",
    },
    {
      label: "GitHub",
      value: "github.com/rudraa1268",
      href: "https://github.com/rudraa1268",
    },
    {
      label: "LeetCode",
      value: "leetcode.com",
      href: "https://leetcode.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-4 text-[#e4e2dd] text-center">
            Get In Touch
          </h2>
          <p className="text-[#9a988f] text-center mb-10">
            Open to full-time SDE roles. Feel free to reach out via any of the channels below.
          </p>

          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-lg border border-[#f5a623]/10 hover:border-[#f5a623]/40 hover:bg-[#f5a623]/[0.03] transition-all"
              >
                <span className="font-mono text-xs text-[#f5a623]">{contact.label}</span>
                <span className="text-[#e4e2dd] text-sm">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
