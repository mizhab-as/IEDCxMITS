"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface SiteNavProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function SiteNav({ currentView, onViewChange }: SiteNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onViewChange(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full z-50 bg-paper border-b border-navy/10">
      {/* Top Bar (RSET-style contact & social utility bar) */}
      <div className="hidden lg:flex justify-between items-center w-full px-16 py-2 bg-navy text-paper/70 text-[11px] font-medium border-b border-paper/10">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-accent" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            MITS, Varikoli, Ernakulam, Kerala
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-accent" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            iedc@mits.ac.in
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>Follow us:</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="flex justify-between items-center w-full px-5 md:px-16 py-4 max-w-full mx-auto bg-paper/90 backdrop-blur-md sticky top-0">
        <a
          href="#"
          onClick={(e) => handleNavClick("home", e)}
          className="text-xl font-extrabold tracking-widest text-accent hover:opacity-90 transition-opacity"
        >
          IEDC MITS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            className={`font-semibold text-xs tracking-wider uppercase py-1 transition-all duration-200 ${
              currentView === "home"
                ? "text-accent border-b-2 border-accent"
                : "text-navy hover:text-accent"
            }`}
            href="#"
            onClick={(e) => handleNavClick("home", e)}
          >
            Home
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase py-1 transition-all duration-200 ${
              currentView === "about"
                ? "text-accent border-b-2 border-accent"
                : "text-navy hover:text-accent"
            }`}
            href="#"
            onClick={(e) => handleNavClick("about", e)}
          >
            About Us
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase py-1 transition-all duration-200 ${
              currentView === "events"
                ? "text-accent border-b-2 border-accent"
                : "text-navy hover:text-accent"
            }`}
            href="#"
            onClick={(e) => handleNavClick("events", e)}
          >
            Events
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase py-1 transition-all duration-200 ${
              currentView === "team"
                ? "text-accent border-b-2 border-accent"
                : "text-navy hover:text-accent"
            }`}
            href="#"
            onClick={(e) => handleNavClick("team", e)}
          >
            Team
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase py-1 transition-all duration-200 ${
              currentView === "reports"
                ? "text-accent border-b-2 border-accent"
                : "text-navy hover:text-accent"
            }`}
            href="#"
            onClick={(e) => handleNavClick("reports", e)}
          >
            Reports
          </a>
          <a
            className={`bg-accent text-paper px-6 py-2.5 font-semibold text-xs tracking-widest uppercase hover:bg-navy hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ${
              currentView === "contact" ? "bg-navy" : ""
            }`}
            href="#"
            onClick={(e) => handleNavClick("contact", e)}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-navy p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper border-b border-navy/10 px-5 py-4 flex flex-col gap-3">
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "home" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("home", e)}
          >
            Home
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "about" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("about", e)}
          >
            About Us
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "events" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("events", e)}
          >
            Events
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "team" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("team", e)}
          >
            Team
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "reports" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("reports", e)}
          >
            Reports
          </a>
          <a
            className={`font-semibold text-xs tracking-wider uppercase ${
              currentView === "contact" ? "text-accent" : "text-navy"
            }`}
            href="#"
            onClick={(e) => handleNavClick("contact", e)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
