import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#0b0c0e]/95 z-40 flex flex-col items-center justify-center font-mono
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#e4e2dd] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {links.map((link) =>
        onHome ? (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl text-[#e4e2dd] my-4 transform transition-transform duration-300 hover:text-[#f5a623]
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            to={`/${link.href}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl text-[#e4e2dd] my-4 transform transition-transform duration-300 hover:text-[#f5a623]
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );
};
