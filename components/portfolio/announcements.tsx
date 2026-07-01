"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Trophy } from "lucide-react";

export default function Announcements() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="reveal px-5 md:px-16 py-12 max-w-4xl mx-auto w-full">
      <div className="flex flex-col gap-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-navy border-l-4 border-accent pl-4 uppercase">
          Announcements &amp; News
        </h2>
        
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div
            className="border border-navy bg-paper transition-all hover:bg-navy/5 cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex justify-between items-center p-6">
              <h3 className="font-bold text-base md:text-lg text-navy flex items-center gap-3">
                <Trophy className="text-accent shrink-0" size={20} />
                MITS INNOVATE Hackathon | Registration Open
              </h3>
              <span className="text-navy transition-transform duration-300">
                {activeAccordion === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: activeAccordion === 1 ? "200px" : "0px" }}
            >
              <div className="px-6 pb-6 pt-2 border-t border-navy/10">
                <p className="text-navy/80 mb-6 text-sm leading-relaxed">
                  Join the flagship 24-hour hackathon pushing the boundaries of building public-impact solutions. Team registrations close soon.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-accent text-paper px-6 py-2.5 font-semibold text-xs tracking-widest uppercase hover:bg-navy transition-all duration-200"
                >
                  [Register Now]
                </a>
              </div>
            </div>
          </div>
          
          {/* Accordion Item 2 */}
          <div
            className="border border-navy bg-paper transition-all hover:bg-navy/5 cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex justify-between items-center p-6">
              <h3 className="font-bold text-base md:text-lg text-navy flex items-center gap-3">
                <Calendar className="text-accent shrink-0" size={20} />
                Ideation &amp; Bootstrapping Workshop by Kerala Startup Mission (KSUM)
              </h3>
              <span className="text-navy transition-transform duration-300">
                {activeAccordion === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: activeAccordion === 2 ? "200px" : "0px" }}
            >
              <div className="px-6 pb-6 pt-2 border-t border-navy/10">
                <p className="text-navy/80 text-sm leading-relaxed">
                  Learn how to transform a basic software prototype into a scalable business model. Venue: Main Seminar Hall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
