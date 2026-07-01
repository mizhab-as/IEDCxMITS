"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const renderUserIcon = () => (
    <svg className="w-5 h-5 text-paper/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
  );

  const renderMailIcon = () => (
    <svg className="w-5 h-5 text-paper/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );

  const renderMessageIcon = () => (
    <svg className="w-5 h-5 text-paper/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
  );

  return (
    <div className="flex flex-col gap-16 py-12 max-w-6xl mx-auto px-5 md:px-16 w-full" id="contact-page">
      {/* Title Block */}
      <section className="reveal text-center max-w-3xl mx-auto">
        <h1 className="text-navy text-5xl font-extrabold tracking-tight">Contact Us</h1>
        <div className="w-20 h-1 bg-accent my-6 mx-auto"></div>
        <p className="text-navy/70 text-lg leading-relaxed">
          Have an idea to pitch, need incubation spaces, or looking to collaborate? Connect with the MITS IEDC coordinate office.
        </p>
      </section>

      {/* Contact Cards Row */}
      <section className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="border border-navy/10 bg-paper p-6 hover:border-accent transition-all duration-300 flex flex-col gap-3">
          <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent">
            <MapPin size={20} />
          </div>
          <h4 className="font-extrabold text-navy text-lg">Location</h4>
          <p className="text-xs text-navy/70 leading-relaxed">
            IEDC Hub, Muthoot Institute of Technology, Varikoli, Ernakulam, Kerala - 682308
          </p>
        </div>

        <div className="border border-navy/10 bg-paper p-6 hover:border-accent transition-all duration-300 flex flex-col gap-3">
          <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent">
            <Mail size={20} />
          </div>
          <h4 className="font-extrabold text-navy text-lg">Direct Mail</h4>
          <p className="text-xs text-navy/70 leading-relaxed">
            <a href="mailto:iedc@mits.ac.in" className="hover:text-accent underline">iedc@mits.ac.in</a>
          </p>
        </div>

        <div className="border border-navy/10 bg-paper p-6 hover:border-accent transition-all duration-300 flex flex-col gap-3">
          <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent">
            <Phone size={20} />
          </div>
          <h4 className="font-extrabold text-navy text-lg">Help Line</h4>
          <p className="text-xs text-navy/70 leading-relaxed">
            +91 484 273 2100<br/>
            Extension: 214 (IEDC Office)
          </p>
        </div>

        <div className="border border-navy/10 bg-paper p-6 hover:border-accent transition-all duration-300 flex flex-col gap-3">
          <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent">
            <Clock size={20} />
          </div>
          <h4 className="font-extrabold text-navy text-lg">Working Hours</h4>
          <p className="text-xs text-navy/70 leading-relaxed">
            Monday - Friday<br/>
            09:00 AM - 04:30 PM IST
          </p>
        </div>

      </section>

      {/* Form & Map Split */}
      <section className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Form Container (Updated visual style with rounded inputs and icons) */}
        <div className="lg:col-span-6 border border-navy bg-navy text-paper p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold mb-6 text-paper text-center">Contact Us</h3>
          
          <form className="flex flex-col gap-5" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-paper/85 mb-1.5 block">Name:</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4">
                    {renderUserIcon()}
                  </div>
                  <input
                    required
                    className="w-full bg-[#0b2136] border-0 rounded-lg py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-paper/45 focus:ring-2 focus:ring-accent outline-none"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-paper/85 mb-1.5 block">Email:</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4">
                    {renderMailIcon()}
                  </div>
                  <input
                    required
                    className="w-full bg-[#0b2136] border-0 rounded-lg py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-paper/45 focus:ring-2 focus:ring-accent outline-none"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-paper/85 mb-1.5 block">Message:</label>
              <div className="relative">
                <div className="absolute left-4 top-4">
                  {renderMessageIcon()}
                </div>
                <textarea
                  required
                  className="w-full bg-[#0b2136] border-0 rounded-lg pt-3.5 pb-4 pl-12 pr-4 text-sm text-white placeholder:text-paper/45 focus:ring-2 focus:ring-accent outline-none min-h-[120px] resize-none"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="mx-auto block bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-10 rounded-lg transition-colors focus:ring-2 focus:ring-accent"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Map Container */}
        <div className="lg:col-span-6 border border-navy/10 bg-paper/50 flex flex-col justify-between">
          <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-navy/5 relative overflow-hidden p-6 border-b border-navy/10">
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="100" y2="20" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="0" y1="40" x2="100" y2="40" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="0" y1="60" x2="100" y2="60" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="0" y1="80" x2="100" y2="80" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="20" y1="0" x2="20" y2="100" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="40" y1="0" x2="40" y2="100" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="60" y1="0" x2="60" y2="100" stroke="#0F2D4A" strokeWidth="0.5"/>
                <line x1="80" y1="0" x2="80" y2="100" stroke="#0F2D4A" strokeWidth="0.5"/>
              </svg>
            </div>
            <div className="text-center z-10 flex flex-col items-center gap-4">
              <MapPin size={48} className="text-accent animate-bounce" />
              <div>
                <h4 className="font-extrabold text-navy text-lg">MITS Innovation Hub</h4>
                <p className="text-xs text-navy/60 mt-1">Varikoli, Ernakulam, Kerala</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-navy/5 text-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:text-navy transition-colors tracking-widest uppercase"
            >
              [View on Google Maps]
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
