"use client";

import React from "react";
import { Globe, Terminal, Cpu } from "lucide-react";

interface FooterProps {
  onViewChange: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  return (
    <footer className="bg-navy text-paper border-t border-accent/20" id="footer-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-5 md:px-16 py-12 max-w-6xl mx-auto">
        
        {/* Column 1: Brand & Affiliation Spotlight */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-accent">IEDC MITS</h2>
          <span className="text-[10px] font-bold tracking-[0.25em] text-paper/50 uppercase">
            THINK. INNOVATE. INSPIRE.
          </span>
          <p className="text-xs text-paper/70 leading-relaxed max-w-sm mt-2">
            The Innovation and Entrepreneurship Development Cell (IEDC) at Muthoot Institute of Technology and Science (MITS) is a premier technology incubator registered under the Kerala Startup Mission (KSUM) and MoE's Institution's Innovation Council (IIC).
          </p>
        </div>
        
        {/* Column 2: Ecosystem Sitemap */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-paper/40 uppercase">Ecosystem Sitemap</h4>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-2">
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("home");
              }}
            >
              <span>›</span> Home
            </a>
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("about");
              }}
            >
              <span>›</span> About Us
            </a>
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("team");
              }}
            >
              <span>›</span> Team Directory
            </a>
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("events");
              }}
            >
              <span>›</span> Events Portal
            </a>
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("reports");
              }}
            >
              <span>›</span> Activity Reports
            </a>
            <a
              className="text-paper/80 hover:text-accent text-xs font-semibold transition-colors flex items-center gap-1.5"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange("contact");
              }}
            >
              <span>›</span> Contact Office
            </a>
          </div>
        </div>
        
        {/* Column 3: Office & Coordinate Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-paper/40 uppercase">Office Connect</h4>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-xs text-paper/85 leading-relaxed font-semibold">
              IEDC Innovation Hub Office,<br/>
              Muthoot Institute of Technology and Science,<br/>
              Varikoli, Ernakulam, Kerala - 682308
            </p>
            <div className="w-8 h-[1px] bg-accent/30 my-2"></div>
            <p className="text-xs text-paper/70">
              Direct Mail: <a href="mailto:iedc@mits.ac.in" className="hover:text-accent underline text-accent font-semibold">iedc@mits.ac.in</a>
            </p>
            <p className="text-[11px] text-paper/50">
              Phone: +91 484 273 2100 (Ext: 214)
            </p>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="px-5 md:px-16 py-6 border-t border-paper/10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-semibold text-paper/40 tracking-wider">
          Copyright © 2026 IEDC MITS. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-paper/40">
          <Globe size={18} className="hover:text-accent cursor-pointer transition-colors" />
          <Terminal size={18} className="hover:text-accent cursor-pointer transition-colors" />
          <Cpu size={18} className="hover:text-accent cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}
