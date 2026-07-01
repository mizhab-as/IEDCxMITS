"use client";

import React from "react";

export default function Pipeline() {
  return (
    <section className="reveal bg-paper px-5 md:px-16 py-16 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Pre-Incubation Pipeline</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">We Are There For You</h2>
          <h3 className="text-lg font-bold text-navy/80">Have an idea but unsure how to implement it?</h3>
          <p className="text-base leading-relaxed text-navy/80">
            IEDC MITS acts as a dedicated pre-incubator. We support early-stage software and hardware innovations by offering micro-grants, cloud hosting architecture assistance, internal testing environments, and direct lines to veteran technical mentors. We handle the logistical friction so you can focus entirely on refining the core prototype.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <svg className="w-full max-w-[360px] h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,0 V200 M30,0 V200 M50,0 V200 M70,0 V200 M90,0 V200 M110,0 V200 M130,0 V200 M150,0 V200 M170,0 V200 M190,0 V200" stroke="#0F2D4A" strokeOpacity="0.08" strokeWidth="0.5"/>
            <path d="M0,10 H200 M0,30 H200 M0,50 H200 M0,70 H200 M0,90 H200 M0,110 H200 M0,130 H200 M0,150 H200 M0,170 H200 M0,190 H200" stroke="#0F2D4A" strokeOpacity="0.08" strokeWidth="0.5"/>
            <rect x="20" y="30" width="160" height="140" stroke="#0F2D4A" strokeWidth="1" fill="#0F2D4A" fillOpacity="0.01"/>
            <rect x="40" y="50" width="120" height="100" stroke="#0F2D4A" strokeWidth="1.2"/>
            <rect x="60" y="70" width="40" height="40" stroke="#0F2D4A" strokeWidth="1" strokeDasharray="3 3"/>
            <rect x="110" y="70" width="30" height="60" stroke="#0F2D4A" strokeWidth="1"/>
            <circle cx="125" cy="100" r="10" stroke="#A81C1C" strokeWidth="1.2"/>
            <line x1="30" y1="160" x2="170" y2="40" stroke="#A81C1C" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M145,65 L165,40 L170,45 L150,70 Z" fill="#0F2D4A" stroke="#0F2D4A" strokeWidth="0.8"/>
            <path d="M145,65 L141,69 L150,70 Z" fill="#A81C1C"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
