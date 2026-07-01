"use client";

import React from "react";

export default function Scaling() {
  return (
    <section className="reveal bg-accent/5 px-5 md:px-16 py-16 border-y border-accent/10">
      <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-6xl mx-auto w-full">
        <div className="w-full md:w-1/2 bg-paper border border-navy/10 p-6 flex items-center justify-center">
          <svg className="w-full max-w-[320px] h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,180 C100,140 100,80 100,45" stroke="#A81C1C" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M100,180 C90,185 85,175 80,185" stroke="#0F2D4A" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M100,180 C110,185 115,175 120,185" stroke="#0F2D4A" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="100" cy="45" r="7" fill="#A81C1C" stroke="#0F2D4A" strokeWidth="1.5"/>
            <path d="M100,110 C80,100 60,95 50,75" stroke="#0F2D4A" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="50" cy="75" r="5" fill="#FDFBF7" stroke="#0F2D4A" strokeWidth="1.5"/>
            <line x1="50" y1="75" x2="30" y2="55" stroke="#0F2D4A" strokeWidth="1"/>
            <circle cx="30" cy="55" r="3.5" fill="#0F2D4A"/>
            <line x1="50" y1="75" x2="50" y2="45" stroke="#0F2D4A" strokeWidth="1"/>
            <circle cx="50" cy="45" r="3.5" fill="#A81C1C"/>
            <path d="M100,90 C120,80 140,75 150,55" stroke="#0F2D4A" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="150" cy="55" r="5" fill="#FDFBF7" stroke="#0F2D4A" strokeWidth="1.5"/>
            <line x1="150" y1="55" x2="170" y2="75" stroke="#0F2D4A" strokeWidth="1"/>
            <circle cx="170" cy="75" r="3.5" fill="#0F2D4A"/>
            <line x1="150" y1="55" x2="180" y2="45" stroke="#0F2D4A" strokeWidth="1"/>
            <circle cx="180" cy="45" r="3.5" fill="#A81C1C"/>
          </svg>
        </div>
        
        <div className="w-full md:w-1/2 bg-accent text-paper p-12 flex flex-col justify-center gap-6 border border-accent">
          <span className="text-xs font-bold tracking-[0.2em] opacity-80 uppercase">Incubation &amp; Scaling</span>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Incubation &amp; Commercial Scaling</h2>
          <p className="text-base leading-relaxed opacity-90 font-light">
            Once a prototype achieves internal validation, we assist teams with intellectual property management, patent filings, and seed funding access to launch minimum viable products directly into the market.
          </p>
          <a className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-paper hover:opacity-90 transition-opacity mt-4" href="#contact">
            [Explore Opportunities 
            <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">→]</span>
          </a>
        </div>
      </div>
    </section>
  );
}
