"use client";

import React from "react";
import { Users, Calendar } from "lucide-react";

interface ProjectsProps {
  onViewChange: (view: string) => void;
}

export default function Projects({ onViewChange }: ProjectsProps) {
  return (
    <section className="reveal px-5 md:px-16 py-16 max-w-6xl mx-auto w-full" id="projects">
      <div className="flex flex-col gap-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-navy border-l-4 border-accent pl-4 uppercase">
          Live Portfolio &amp; Pipelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Link to Team */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onViewChange("team");
            }}
            className="aspect-square bg-navy/5 border border-navy/10 flex flex-col items-center justify-center p-8 gap-4 hover:border-accent transition-all duration-300 group"
          >
            <Users className="text-navy/60 group-hover:text-accent transition-colors" size={40} />
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-navy/60">TEAM DIRECTORY</p>
              <h4 className="font-extrabold text-xl text-navy mt-1 group-hover:text-accent transition-colors">MEET THE TEAM</h4>
              <p className="text-[11px] text-navy/40 mt-2">Nodal officers, advisory board, and student leaders list.</p>
            </div>
          </a>
          
          {/* Events Link to Events View */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onViewChange("events");
            }}
            className="aspect-square bg-navy/5 border border-navy/10 flex flex-col items-center justify-center p-8 gap-4 hover:border-accent transition-all duration-300 group"
          >
            <Calendar className="text-navy/60 group-hover:text-accent transition-colors" size={40} />
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-navy/60">EVENTS</p>
              <h4 className="font-extrabold text-xl text-navy mt-1 group-hover:text-accent transition-colors">SCHEDULER</h4>
              <p className="text-[11px] text-navy/40 mt-2">KSUM Hackathons, Bootcamps, and Pitch Competitions.</p>
            </div>
          </a>
          
          {/* Incubation Statistics */}
          <div className="aspect-square bg-navy text-paper flex flex-col items-center justify-center p-8 gap-4 border border-navy">
            <div className="text-6xl font-extrabold text-accent">12+</div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-paper/80">Active Startups</p>
            <p className="text-[11px] text-paper/50 text-center px-4 leading-relaxed">Incorporated companies mentored and incubated through IEDC.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
