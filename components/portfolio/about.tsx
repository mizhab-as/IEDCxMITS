"use client";

import React from "react";
import { Lightbulb, Rocket, ShieldCheck, Award } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-12 max-w-6xl mx-auto px-5 md:px-16 w-full">
      {/* Header Block */}
      <section className="reveal text-center max-w-3xl mx-auto">
        <h1 className="text-navy text-5xl font-extrabold tracking-tight">About IEDC MITS</h1>
        <div className="w-20 h-1 bg-accent my-6 mx-auto"></div>
        <p className="text-navy/70 text-lg leading-relaxed font-light">
          The Innovation and Entrepreneurship Development Cell (IEDC) at Muthoot Institute of Technology and Science (MITS) is a flagship institutional incubator established under the aegis of the Kerala Startup Mission (KSUM).
        </p>
      </section>

      {/* Vision & Mission Row */}
      <section className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="border border-navy/10 bg-paper p-8 hover-lift hover:border-accent flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent">
            <Lightbulb size={24} />
          </div>
          <h3 className="text-2xl font-extrabold text-navy">Our Vision</h3>
          <p className="text-sm leading-relaxed text-navy/80 font-light">
            To emerge as a state-of-the-art incubation hub that transforms engineering students into job creators, nurturing technical skillsets into sustainable commercial enterprises that drive socio-economic growth.
          </p>
        </div>

        <div className="border border-navy/10 bg-paper p-8 hover-lift hover:border-accent flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent">
            <Rocket size={24} />
          </div>
          <h3 className="text-2xl font-extrabold text-navy">Our Mission</h3>
          <p className="text-sm leading-relaxed text-navy/80 font-light">
            To provide robust infrastructural support, direct access to pre-seed micro-grants, expert business mentorship, and structural pathways to Intellectual Property (IP) management, reducing friction for early-stage founders.
          </p>
        </div>
      </section>

      {/* Institutional Affiliation & Accreditations */}
      <section className="reveal bg-navy text-paper p-8 md:p-12 border border-navy flex flex-col md:flex-row gap-8 items-center justify-between shadow-lg">
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Institutional Affiliations</span>
          <h3 className="text-3xl font-extrabold leading-tight">Ministry of Education (MoE) IIC &amp; KSUM Accredited</h3>
          <p className="text-sm leading-relaxed text-paper/85 font-light">
            IEDC MITS is registered under the Ministry of Education's Institution's Innovation Council (IIC). We operate under the operational guidelines of the Kerala Startup Mission (KSUM) and work in sync with university incubation regulations to secure grants, prototyping toolkits, and patent filing structures.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full md:w-auto">
          <div className="flex items-center gap-3 bg-paper/5 border border-paper/10 px-5 py-4 w-full sm:w-48 hover:border-accent/40 transition-colors">
            <ShieldCheck size={28} className="text-accent shrink-0" />
            <div>
              <h5 className="font-bold text-sm">KSUM Approved</h5>
              <p className="text-[10px] opacity-60">Verified Chapter</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-paper/5 border border-paper/10 px-5 py-4 w-full sm:w-48 hover:border-accent/40 transition-colors">
            <Award size={28} className="text-accent shrink-0" />
            <div>
              <h5 className="font-bold text-sm">MoE IIC Chapter</h5>
              <p className="text-[10px] opacity-60">National Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="reveal flex flex-col gap-8">
        <h3 className="text-center text-navy text-3xl font-extrabold">Our Core Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="border border-navy/10 bg-paper p-6 hover-lift hover:border-accent flex flex-col gap-3">
            <h4 className="font-extrabold text-navy text-lg">1. Skill Incubation</h4>
            <p className="text-xs leading-relaxed text-navy/70 font-light">
              Conducting regular design-thinking workshops, tech-stack bootcamps, and developer challenges to build hands-on engineering competence.
            </p>
          </div>

          <div className="border border-navy/10 bg-paper p-6 hover-lift hover:border-accent flex flex-col gap-3">
            <h4 className="font-extrabold text-navy text-lg">2. IP &amp; Patents</h4>
            <p className="text-xs leading-relaxed text-navy/70 font-light">
              Guiding student innovations through formal search checks, documentation templates, and securing seed grants for patent and filing costs.
            </p>
          </div>

          <div className="border border-navy/10 bg-paper p-6 hover-lift hover:border-accent flex flex-col gap-3">
            <h4 className="font-extrabold text-navy text-lg">3. Venture Commercialization</h4>
            <p className="text-xs leading-relaxed text-navy/70 font-light">
              Assisting validated prototypes with legal company incorporation, branding setups, and pitching direct to KSUM funding matrices.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
