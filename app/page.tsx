"use client";

import React, { useState, useEffect } from "react";
import SiteNav from "@/components/portfolio/site-nav";
import Hero from "@/components/portfolio/hero";
import Announcements from "@/components/portfolio/announcements";
import About from "@/components/portfolio/about";
import Culture from "@/components/portfolio/culture";
import Pipeline from "@/components/portfolio/pipeline";
import Scaling from "@/components/portfolio/scaling";
import Projects from "@/components/portfolio/projects";
import Team from "@/components/portfolio/team";
import Events from "@/components/portfolio/events";
import Reports from "@/components/portfolio/reports";
import ContactPage from "@/components/portfolio/contact-page";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  const [currentView, setCurrentView] = useState<string>("home");

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    // Observe reveal elements
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentView]); // Re-run when view changes to observe newly rendered elements

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent selection:text-paper antialiased">
      {/* Navigation Hub */}
      <SiteNav currentView={currentView} onViewChange={handleViewChange} />

      {/* Main Content Area with entrance animations */}
      <main className="flex-grow bg-paper">
        {currentView === "home" && (
          <div className="flex flex-col gap-2 animate-fade-in">
            <Hero />
            <Announcements />
            <Culture />
            <Pipeline />
            <Scaling />
            <Projects onViewChange={handleViewChange} />
          </div>
        )}

        {currentView === "about" && (
          <div className="animate-fade-in">
            <About />
          </div>
        )}

        {currentView === "events" && (
          <div className="animate-fade-in">
            <Events onViewChange={handleViewChange} />
          </div>
        )}

        {currentView === "team" && (
          <div className="animate-fade-in">
            <Team />
          </div>
        )}

        {currentView === "reports" && (
          <div className="animate-fade-in">
            <Reports />
          </div>
        )}

        {currentView === "contact" && (
          <div className="animate-fade-in">
            <ContactPage />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
