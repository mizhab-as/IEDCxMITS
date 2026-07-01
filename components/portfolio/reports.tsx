"use client";

import React from "react";
import { FileText, Download, Award, Calendar, Target } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "IEDC Activities Report (2022–2025)",
      type: "Activity Audit",
      date: "2025",
      size: "158 KB",
      accreditation: "KSUM Verified Statement",
      url: "/IEDC-Activities-(2022-2025).pdf"
    },
    {
      title: "EVENTS ORGANIZED BY IEDC MITS (2016-2023)",
      type: "Archived Audit",
      date: "2023",
      size: "212 KB",
      accreditation: "MITS Institutional Record",
      url: "/EVENTS-ORGANIZED-BY-IEDC-MITS.pdf"
    }
  ];

  const milestones = [
    {
      title: "IEDC Ideathon",
      desc: "Conducted a massive campus-wide ideation drive with student innovators pitching fresh product and startup concepts.",
      participants: "147 Participants",
      date: "17-09-2024",
      icon: <Target className="text-accent shrink-0" size={24} />
    },
    {
      title: "Women’s Day",
      desc: "Conducted a special seminar for innovators to build tech-stacks and structural business guidelines.",
      participants: "75 Participants",
      date: "07-03-2025",
      icon: <Award className="text-accent shrink-0" size={24} />
    },
    {
      title: "Techxcel Challenge (Final Round)",
      desc: "Hosted the final round of the flagship Techxcel technical prototype showcase for engineering student developers.",
      participants: "60 Participants",
      date: "26-07-2024",
      icon: <Award className="text-accent shrink-0" size={24} />
    },
    {
      title: "Startup Launchpad",
      desc: "Organized a venture-launching bootcamp for early-stage student teams detailing registration and validation routes.",
      participants: "52 Participants",
      date: "18-04-2024",
      icon: <Target className="text-accent shrink-0" size={24} />
    },
    {
      title: "EmpowerHer",
      desc: "Empowered female innovators and student founders with entrepreneurship training and leadership mentoring.",
      participants: "51 Participants",
      date: "18-04-2024",
      icon: <Award className="text-accent shrink-0" size={24} />
    },
    {
      title: "Meet the Business Leader Series: Go and kiss the world",
      desc: "Hosted an inspiring sharing session to bridge the gap between student innovators and industry leaders.",
      participants: "43 Participants",
      date: "12-04-2024",
      icon: <Target className="text-accent shrink-0" size={24} />
    },
    {
      title: "Unleash Creativity",
      desc: "Conducted a specialized creative ideation workshop for core student teams.",
      participants: "5 Participants",
      date: "15-08-2024",
      icon: <Target className="text-accent shrink-0" size={24} />
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-12 max-w-6xl mx-auto px-5 md:px-16 w-full">
      {/* Title block */}
      <section className="reveal text-center max-w-3xl mx-auto">
        <h1 className="text-navy text-5xl font-extrabold tracking-tight">Activity &amp; Achievements</h1>
        <div className="w-20 h-1 bg-accent my-6 mx-auto"></div>
        <p className="text-navy/70 text-lg leading-relaxed font-light">
          Access verified operational activity audits and explore the flagship programs organized by IEDC MITS.
        </p>
      </section>

      {/* Flagship Programs Showcase (Centered Flex Layout) */}
      <section className="reveal flex flex-col gap-8">
        <h2 className="text-2xl font-extrabold text-navy border-l-4 border-accent pl-4">Flagship Programs &amp; Activities</h2>
        <p className="text-navy/60 text-xs -mt-6">
          Selected highlight events and entrepreneurship initiatives organized and conducted by IEDC MITS.
        </p>
        
        {/* Flex Wrap Center Layout - Prevents Left-Alignment of Trailing Cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {milestones.map((mil, idx) => (
            <div
              key={idx}
              className="border border-navy/10 bg-paper p-6 hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full sm:w-[320px] md:w-[340px] flex-grow-0 flex-shrink-0"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full">
                    {mil.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy text-base leading-snug">{mil.title}</h4>
                    <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 mt-1 inline-block uppercase">
                      {mil.participants}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-navy/70 leading-relaxed">{mil.desc}</p>
              </div>
              <div className="flex items-center gap-1 mt-6 text-[10px] text-navy/40 font-semibold uppercase">
                <Calendar size={12} className="text-accent" />
                <span>Conducted: {mil.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Audit PDF Files */}
      <section className="reveal flex flex-col gap-8">
        <h2 className="text-2xl font-extrabold text-navy border-l-4 border-accent pl-4">Verified Case Studies &amp; Audits</h2>
        
        <div className="border border-navy/10 bg-paper overflow-hidden">
          <div className="divide-y divide-navy/10">
            {reports.map((rpt, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-navy/5 transition-colors duration-200"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-navy/5 text-navy rounded flex items-center justify-center shrink-0 mt-1">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-navy leading-snug">{rpt.title}</h4>
                    <div className="flex flex-wrap gap-4 text-[10px] text-navy/50 font-bold uppercase mt-1">
                      <span>{rpt.type}</span>
                      <span>•</span>
                      <span>{rpt.date}</span>
                      <span>•</span>
                      <span>{rpt.size}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-[10px] font-bold text-accent border border-accent/25 px-2.5 py-1 bg-accent/5">
                    {rpt.accreditation}
                  </span>
                  <a
                    href={rpt.url}
                    download
                    className="p-2 bg-navy text-paper hover:bg-accent transition-colors flex items-center justify-center"
                    aria-label="Download PDF"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
