"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="reveal min-h-[calc(100vh-110px)] flex flex-col md:flex-row items-center px-5 md:px-16 py-12 gap-12 max-w-full mx-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex gap-2 items-center text-accent">
          <span className="w-12 h-[1px] bg-accent"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase">develop | nurture | sustain</span>
        </div>
        
        <h1 className="font-extrabold text-5xl md:text-6xl text-navy leading-none tracking-tight">
          THINK. INNOVATE. INSPIRE.
          <span className="block text-accent text-4xl md:text-5xl mt-3 font-extrabold">WE ARE IEDC MITS</span>
        </h1>
        
        <p className="text-lg leading-relaxed text-navy/80 max-w-xl">
          Welcome to IEDC MITS — The innovation, ideation, and venture-building ecosystem of Muthoot Institute of Technology. We turn raw student potential into enterprise-ready solutions.
        </p>
        
        {/* Social Icon Links using inline SVGs */}
        <div className="flex gap-6 items-center mt-2 text-navy">
          <a
            className="hover:text-accent transition-all hover:scale-110"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a
            className="hover:text-accent transition-all hover:scale-110"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            className="hover:text-accent transition-all hover:scale-110"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Rotating Gears Illustration */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M70,30 C90,20 120,20 135,40 C145,55 140,80 155,90 C165,95 170,105 160,115 C150,125 145,130 140,140 C135,150 130,165 110,170 C90,175 80,175 70,160 C65,150 60,140 50,135 C40,130 35,120 40,110 C45,100 50,90 55,80 C60,70 65,40 70,30 Z"
              stroke="#0F2D4A"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />
            
            {/* Main Gear */}
            <g className="animate-spin-slow" style={{ transformOrigin: "100px 85px" }}>
              <circle cx="100" cy="85" r="22" stroke="#A81C1C" strokeWidth="1.2" />
              <circle cx="100" cy="85" r="8" fill="#FDFBF7" stroke="#A81C1C" strokeWidth="1.2" />
              <rect x="97" y="58" width="6" height="8" fill="#A81C1C" />
              <rect x="97" y="104" width="6" height="8" fill="#A81C1C" />
              <rect x="73" y="82" width="8" height="6" fill="#A81C1C" />
              <rect x="119" y="82" width="8" height="6" fill="#A81C1C" />
            </g>
            
            {/* Secondary Gear */}
            <g className="animate-spin-slow-reverse" style={{ transformOrigin: "130px 115px" }}>
              <circle cx="130" cy="115" r="16" stroke="#0F2D4A" strokeWidth="1.2" />
              <circle cx="130" cy="115" r="6" fill="#FDFBF7" stroke="#0F2D4A" strokeWidth="1.2" />
              <rect x="127" y="95" width="6" height="6" fill="#0F2D4A" />
              <rect x="127" y="129" width="6" height="6" fill="#0F2D4A" />
              <rect x="110" y="112" width="6" height="6" fill="#0F2D4A" />
              <rect x="144" y="112" width="6" height="6" fill="#0F2D4A" />
            </g>

            {/* Tertiary Gear */}
            <g className="animate-spin-slow" style={{ transformOrigin: "75px 110px" }}>
              <circle cx="75" cy="110" r="14" stroke="#0F2D4A" strokeWidth="1.2" />
              <circle cx="75" cy="110" r="5" fill="#FDFBF7" stroke="#0F2D4A" strokeWidth="1.2" />
              <rect x="72" y="92" width="6" height="6" fill="#0F2D4A" />
              <rect x="72" y="122" width="6" height="6" fill="#0F2D4A" />
              <rect x="57" y="107" width="6" height="6" fill="#0F2D4A" />
              <rect x="87" y="107" width="6" height="6" fill="#0F2D4A" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
