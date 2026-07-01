import React from 'react';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLink = (href, label) =>
    onHome ? (
      <a href={href} className="text-[#9a988f] hover:text-[#f5a623] transition-colors">
        {label}
      </a>
    ) : (
      <Link to={`/${href}`} className="text-[#9a988f] hover:text-[#f5a623] transition-colors">
        {label}
      </Link>
    );

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0b0c0e]/90 backdrop-blur-lg border-b border-[#f5a623]/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-lg text-[#e4e2dd]">
            Rudra<span className="text-[#f5a623]">'s</span> Portfolio
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#e4e2dd]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            {navLink("#home", "home")}
            {navLink("#about", "about")}
            {navLink("#projects", "projects")}
            {navLink("#experience", "experience")}
            {navLink("#contact", "contact")}
          </div>
        </div>
      </div>
    </nav>
  );
};
