"use client";

import React from "react";
import { Wrench, Database, Calendar, MapPin, Users, Coins } from "lucide-react";

interface EventsProps {
  onViewChange: (view: string) => void;
}

export default function Events({ onViewChange }: EventsProps) {
  const recentHighlights = [
    {
      title: "Leetcode Problem Solving Series (Internship 2026)",
      tag: "DSA & LEETCODE INTERNSHIP",
      desc: "A 2-week online problem-solving boot camp covering LeetCode fundamentals, DSA basics, and live debugging. Organized by Adil Junaid (CFO) and Safeena K S (WII).",
      date: "June 2026 (Batch 1 & 2)",
      venue: "Online mode",
      metaIcon: <Coins size={12} className="text-accent" />,
      metaVal: "Fee: ₹200 | Open to all"
    },
    {
      title: "ESP32 & IoT Internship Program",
      tag: "IOT & EMBEDDED SYSTEMS",
      desc: "A fully hands-on internship in collaboration with EARC training 60+ students to build Smart Home Automation Systems. Features leaderboard gamification.",
      date: "Semester Breaks (3 Batches)",
      venue: "MITS Makers Lab",
      metaIcon: <Users size={12} className="text-accent" />,
      metaVal: "60 Students | ₹37,540 raised"
    }
  ];

  const pastHighlights = [
    {
      title: "Women’s Day Seminar",
      tag: "COLLEGE LEVEL EVENT",
      desc: "Conducted a special seminar for innovators to build tech-stacks and structural business guidelines.",
      date: "07-03-2025",
      venue: "MITS Campus, Varikoli",
      participants: "75 Participants"
    },
    {
      title: "IEDC Ideathon",
      tag: "COLLEGE LEVEL EVENT",
      desc: "Conducted a massive campus-wide ideation drive with student innovators pitching fresh product and startup concepts.",
      date: "17-09-2024",
      venue: "MITS Campus, Varikoli",
      participants: "147 Participants"
    },
    {
      title: "Techxcel Challenge (Final Round)",
      tag: "COLLEGE LEVEL EVENT",
      desc: "Hosted the final round of the flagship Techxcel technical prototype showcase for engineering student developers.",
      date: "26-07-2024",
      venue: "MITS Campus, Varikoli",
      participants: "60 Participants"
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-12 max-w-6xl mx-auto px-5 md:px-16 w-full">
      {/* Title block */}
      <section className="reveal text-center max-w-3xl mx-auto">
        <h1 className="text-navy text-5xl font-extrabold tracking-tight">Events Portal</h1>
        <div className="w-20 h-1 bg-accent my-6 mx-auto"></div>
        <p className="text-navy/70 text-lg leading-relaxed font-light">
          Discover upcoming bootcamps, developer hackathons, and past startup challenge highlights organized by IEDC MITS.
        </p>
      </section>

      {/* 1. UPCOMING EVENTS STAGING */}
      <section className="reveal border border-navy/10 bg-paper p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm hover:border-accent transition-colors duration-300">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 animate-pulse">
            <Wrench size={32} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Next Term Schedules</span>
            <h3 className="text-2xl font-extrabold text-navy mt-1">Events Scheduler | Under Staging</h3>
            <p className="text-xs text-navy/70 mt-1 max-w-md">
              Our incubation coordinators are staging upcoming hackathons (MITS Innovate) and KSUM seed workshops. Complete calendars release soon!
            </p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => onViewChange("home")}
            className="bg-navy text-paper px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-200"
          >
            Return Home
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onViewChange("contact");
            }}
            className="border border-navy text-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-navy hover:text-paper transition-colors duration-200"
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* 2. RECENT EVENT HIGHLIGHTS */}
      <section className="reveal flex flex-col gap-8">
        <h2 className="text-2xl font-extrabold text-navy border-l-4 border-accent pl-4">Recent Event Highlights</h2>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {recentHighlights.map((evt, idx) => (
            <div
              key={idx}
              className="border border-navy/10 bg-paper p-6 hover-lift hover:border-accent flex flex-col justify-between w-full md:w-[340px]"
            >
              <div className="flex flex-col gap-3">
                <span className="inline-block bg-accent/10 text-accent text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 self-start">
                  {evt.tag}
                </span>
                <h4 className="font-extrabold text-lg text-navy leading-snug mt-1">{evt.title}</h4>
                <p className="text-xs text-navy/75 leading-relaxed mt-2">{evt.desc}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-navy/60 mt-1">
                  {evt.metaIcon}
                  <span>{evt.metaVal}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-navy/10 pt-4 mt-6 text-[10px] text-navy/50 font-semibold uppercase">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-accent" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-accent" />
                  {evt.venue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAST EVENT HIGHLIGHTS */}
      <section className="reveal flex flex-col gap-8">
        <h2 className="text-2xl font-extrabold text-navy border-l-4 border-accent pl-4">Past Event Highlights</h2>
        
        {/* Forced 3-Column Desktop Grid for Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {pastHighlights.map((evt, idx) => (
            <div
              key={idx}
              className="border border-navy/10 bg-paper p-6 hover-lift hover:border-accent flex flex-col justify-between w-full"
            >
              <div className="flex flex-col gap-3">
                <span className="inline-block bg-navy/5 text-navy border border-navy/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider self-start">
                  {evt.tag}
                </span>
                <h4 className="font-extrabold text-lg text-navy leading-snug mt-1">{evt.title}</h4>
                <p className="text-xs text-navy/70 leading-relaxed mt-2">{evt.desc}</p>
                <div className="flex items-center gap-1 text-[11px] text-navy/60 mt-1">
                  <Users size={12} className="text-accent" />
                  <span>{evt.participants}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-navy/10 pt-4 mt-6 text-[10px] text-navy/50 font-semibold uppercase">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-accent" />
                  Conducted: {evt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-accent" />
                  {evt.venue}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Database compiler status notification bar */}
        <div className="border border-navy/10 bg-navy/5 p-4 flex items-center justify-center gap-3 text-center mt-4">
          <Database size={16} className="text-accent" />
          <span className="text-[10px] font-bold text-navy/60 uppercase tracking-wider">
            Staging Notification: Historical event archives from 2016-2023 are currently under active compilation.
          </span>
        </div>
      </section>
    </div>
  );
}
