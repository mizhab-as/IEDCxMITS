"use client";

import React from "react";

export default function Culture() {
  return (
    <section className="reveal bg-navy text-paper skew-section-top px-5 md:px-16 py-20 pb-24 -mt-8 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
          Ecosystem Framework
        </h2>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">Our Startup Culture</h3>
          <p className="text-base md:text-lg leading-relaxed text-paper/90 font-light">
            MITS establishes an interactive environment for technological creation and collaborative learning. Through regular bootcamps, design-thinking marathons, and structured investor pitch clinics, we ensure our developers don't just build applications, but instead solve real industrial pain points. From technical debugging to corporate filing strategies, our network is structured to support founders at every inflection point.
          </p>
        </div>
      </div>
    </section>
  );
}
