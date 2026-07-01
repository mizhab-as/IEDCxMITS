"use client";

import React, { useState } from "react";

interface Member {
  name: string;
  role: string;
  dept?: string;
  linkedin: string;
  bio?: string;
  initials?: string;
}

interface Department {
  id: string;
  name: string;
  icon: string;
  members: Member[];
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const renderLinkedinIcon = (sizeClass = "w-3.5 h-3.5") => (
    <svg className={`${sizeClass} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const renderUserSilhouette = (sizeClass = "w-16 h-16") => (
    <svg className={`${sizeClass} text-navy/20 fill-current group-hover:text-paper/20 transition-colors`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  // Equal Nodal Officers List
  const nodalOfficers: Member[] = [
    {
      name: "Dr. Bibin Jose",
      role: "Nodal Officer",
      dept: "Dept of Electrical & Electronics Engineering",
      linkedin: "https://www.linkedin.com/in/dr-bibin-jose-60ab89b8",
      bio: "Provides administrative guidance, policy formulation, and direct liaison with the Kerala Startup Mission (KSUM) to secure institutional support and funding opportunities for MITS innovators.",
      initials: "BJ"
    },
    {
      name: "Dr. Arunkant A Jose",
      role: "Nodal Officer",
      dept: "Dept of Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/arunkantajose",
      bio: "Guides technological research, software commercialization, and incubation pipelines, ensuring student projects meet state startup standards and industrial viability benchmarks.",
      initials: "AJ"
    },
    {
      name: "Dr. Prathibha Sudhakaran",
      role: "Nodal Officer",
      dept: "Dept of Civil Engineering",
      linkedin: "https://www.linkedin.com/in/dr-prathibha-s-4761b267",
      bio: "Oversees community expansion, structural planning, and multidisciplinary design initiatives to promote a collaborative entrepreneurship culture across all departments.",
      initials: "PS"
    }
  ];

  // Core Execom List
  const coreExecom: Member[] = [
    {
      name: "Bhavana Vijeesh",
      role: "Chief Executive Officer",
      linkedin: "https://www.linkedin.com/in/bhavna-vijeesh",
      bio: "Drives the strategic vision, institutional partnerships, and executive roadmap for IEDC MITS, leading all student cells toward incubation excellence.",
      initials: "BV"
    },
    {
      name: "Aditya R Menon",
      role: "Chief Operating Officer",
      linkedin: "https://www.linkedin.com/in/aditya-r-menon-446344291",
      bio: "Manages day-to-day operations, task coordination across cells, and ensures efficient execution of bootcamps, hackathons, and venture milestones.",
      initials: "AM"
    }
  ];

  // Specialized Execom Cells
  const departments: Department[] = [
    {
      id: "finance",
      name: "Finance Cell",
      icon: "payments",
      members: [
        {
          name: "Adil Junaid",
          role: "Chief Financial Officer",
          linkedin: "https://www.linkedin.com/in/adil-junaid-40841b32a",
          bio: "Oversees financial planning, budget allocations, compliance reporting, and micro-grant disbursement for active student startups.",
          initials: "AJ"
        },
        {
          name: "Fathima Zuhara P",
          role: "Chief Financial Officer",
          linkedin: "https://www.linkedin.com/in/fathima-zuhara-p-b89b2237a",
          bio: "Coordinates accounts auditing, sponsorship acquisitions, and direct institutional funding compliance reports for the center.",
          initials: "FZ"
        }
      ]
    },
    {
      id: "tech",
      name: "Technical Cell",
      icon: "code",
      members: [
        {
          name: "Mizhab A S",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/mizhab-as",
          bio: "Coordinates technical project pipelines, builds internal software tools, and leads code audits for student-run digital products.",
          initials: "MS"
        },
        {
          name: "Hathim Mohammed",
          role: "Technical Lead",
          linkedin: "https://www.linkedin.com/in/hathim-mohammed-rafeeque-aa7814327",
          bio: "Assists technical teams with system architecture design, database setups, and API configurations for incubation projects.",
          initials: "HM"
        }
      ]
    },
    {
      id: "ops",
      name: "Operations Cell",
      icon: "settings",
      members: [
        {
          name: "Benett Bobby",
          role: "Lead Operations",
          linkedin: "https://www.linkedin.com/in/benett-bobby-849290271",
          bio: "Orchestrates event logistics, room allocations, scheduling grids, and speaker relations for flagship workshops.",
          initials: "BB"
        },
        {
          name: "Christia Regi",
          role: "Operations Lead",
          linkedin: "https://www.linkedin.com/in/christia-regi-08069a32a",
          bio: "Coordinates operational logistics and material supplies to maintain workflow continuity during bootcamps.",
          initials: "CR"
        },
        {
          name: "Achal Sai Krishna",
          role: "Operations Lead",
          linkedin: "https://www.linkedin.com/in/achal-sai-krishna",
          bio: "Assists with logistical tracking, volunteer rosters, and post-event analysis grids.",
          initials: "AK"
        }
      ]
    },
    {
      id: "startup",
      name: "Startup Support",
      icon: "rocket_launch",
      members: [
        {
          name: "Ashwin R",
          role: "Lead Startup",
          linkedin: "https://www.linkedin.com/in/ashwin-r-a58025350",
          bio: "Helps student teams with initial market research, business plans, and pitching strategies for seed funding.",
          initials: "AR"
        },
        {
          name: "M Soorya Narayan",
          role: "Startup Lead",
          linkedin: "https://www.linkedin.com/in/m-soorya-narayan-a1488a335",
          bio: "Connects early-stage startups with incubation resources, mentorship pools, and legal advice.",
          initials: "SN"
        },
        {
          name: "Jaganath Joshy",
          role: "Startup Lead",
          linkedin: "https://www.linkedin.com/in/jaganath-joshy-8913a637b",
          bio: "Assists with ideation workshops and pitch decks for KSUM pitching rounds.",
          initials: "JJ"
        }
      ]
    },
    {
      id: "creative",
      name: "Creative & Design",
      icon: "palette",
      members: [
        {
          name: "Elaina Sara Sabu",
          role: "Lead Creative",
          linkedin: "https://www.linkedin.com/in/elaina-sara-sabu-9932b7319",
          bio: "Drives visual brand guidelines, UI layouts, and primary design structures for all marketing brochures and platforms.",
          initials: "ES"
        },
        {
          name: "Aljo Benny",
          role: "Creative Lead",
          linkedin: "https://www.linkedin.com/in/aljo-benny-250430380",
          bio: "Creates illustration vectors, custom graphics, and event banner designs.",
          initials: "AB"
        },
        {
          name: "Harsha Esmayil",
          role: "Creative Lead",
          linkedin: "https://www.linkedin.com/in/harsha-esmayil",
          bio: "Designs user interfaces, slide layouts, and print assets for flagship events.",
          initials: "HE"
        }
      ]
    },
    {
      id: "marketing",
      name: "Marketing & PR",
      icon: "campaign",
      members: [
        {
          name: "Abdul Hazim Rafeeq",
          role: "Lead Marketing",
          linkedin: "https://www.linkedin.com/in/abdul-hazim-894b48375",
          bio: "Orchestrates public relations, corporate sponsor relations, and event broadcast campaigns.",
          initials: "AR"
        },
        {
          name: "Samuel Abraham",
          role: "Marketing Lead",
          linkedin: "https://linkedin.com",
          bio: "Coordinates social media channels, posting calendars, and target audience outreach campaigns.",
          initials: "SA"
        },
        {
          name: "Hafeez Mohammed",
          role: "Marketing Lead",
          linkedin: "https://www.linkedin.com/in/hafeez-mohamed-b33166284",
          bio: "Manages campus outreach networks, newsletter distribution, and PR releases.",
          initials: "HM"
        }
      ]
    },
    {
      id: "ipr",
      name: "IPR & Research",
      icon: "menu_book",
      members: [
        {
          name: "M V Tanishi",
          role: "Lead IPR & Research",
          linkedin: "https://www.linkedin.com/in/tanishi-m-195071365",
          bio: "Coordinates research papers audits, patent filing guides, and intellectual property eligibility checks.",
          initials: "MT"
        },
        {
          name: "Ananthakrishnan A D",
          role: "IPR Lead",
          linkedin: "https://www.linkedin.com/in/ananthakrishnan-a-d-201907261",
          bio: "Assists with intellectual property workshops, search reviews, and case study documentation.",
          initials: "AD"
        },
        {
          name: "Aleena Benny",
          role: "IPR Lead",
          linkedin: "https://www.linkedin.com/in/aleena-benny-776500328",
          bio: "Guides student developers in documenting patents and copyright claims.",
          initials: "AB"
        }
      ]
    },
    {
      id: "community",
      name: "Community & Relations",
      icon: "diversity_3",
      members: [
        {
          name: "Mebin K Sebin",
          role: "Lead Community",
          linkedin: "https://www.linkedin.com/in/mebinks",
          bio: "Directs developer relations, inter-college club collaborations, and manages developer communities.",
          initials: "MS"
        },
        {
          name: "Madhav S Krishna",
          role: "Community Lead",
          linkedin: "https://www.linkedin.com/in/madhav-s-krishna",
          bio: "Coordinates cohort workshops, developer forums, and open-source contributions.",
          initials: "MK"
        },
        {
          name: "Mahathi Nagesh",
          role: "Community Lead",
          linkedin: "https://www.linkedin.com/in/mahathi-nagesh",
          bio: "Maintains communications with cohort communities, and maps feedback grids.",
          initials: "MN"
        }
      ]
    },
    {
      id: "women",
      name: "Women in Innovation",
      icon: "female",
      members: [
        {
          name: "Gouri Rajagopal",
          role: "Lead Women in Innovation",
          linkedin: "https://linkedin.com",
          bio: "Fosters female leadership initiatives, specialized women founder cohorts, and mentorship panels.",
          initials: "GR"
        },
        {
          name: "Safeena KS",
          role: "Women Lead",
          linkedin: "https://www.linkedin.com/in/safeena-k-s-782547328",
          bio: "Coordinates networking meetups and skill bootcamps for female innovators.",
          initials: "SK"
        },
        {
          name: "Erine Anna Binu",
          role: "Women Lead",
          linkedin: "https://www.linkedin.com/in/erine-anna-binu-9a436531b",
          bio: "Assists with community outreach for female startup programs and workshops.",
          initials: "EB"
        }
      ]
    },
    {
      id: "media",
      name: "Media Cell",
      icon: "photo_camera",
      members: [
        {
          name: "Varghese Jibu",
          role: "Media Lead",
          linkedin: "https://www.linkedin.com/in/varghesejibu",
          bio: "Coordinates event photography campaigns, video editing pipelines, and promotional video releases.",
          initials: "VJ"
        },
        {
          name: "Athul Sabarish",
          role: "Media Lead",
          linkedin: "https://www.linkedin.com/in/athul-sabarish-98b6231b3",
          bio: "Manages event documentation, archives, and live stream setups.",
          initials: "AS"
        },
        {
          name: "Ashik Binoy",
          role: "Media Lead",
          linkedin: "https://www.linkedin.com/in/ashik-binoy-946a51380",
          bio: "Directs digital photography, archives, and event coverage schedules.",
          initials: "AB"
        }
      ]
    },
    {
      id: "docs",
      name: "Documentation Cell",
      icon: "description",
      members: [
        {
          name: "Neha Binoy",
          role: "Documentation Lead",
          linkedin: "https://www.linkedin.com/in/neha-binoy-2n00b5",
          bio: "Writes institutional reports, KSUM audit logs, and meeting minutes.",
          initials: "NB"
        },
        {
          name: "Meera G Thayyil",
          role: "Documentation Lead",
          linkedin: "https://www.linkedin.com/in/meera-g-thayil-162088328",
          bio: "Coordinates documentation templates and event data reports.",
          initials: "MT"
        }
      ]
    }
  ];

  // Helper to compile all members for filtering
  const allSpecializedMembers: Member[] = departments.reduce((acc: Member[], dept) => {
    return [...acc, ...dept.members.map(m => ({ ...m, dept: dept.name }))];
  }, []);

  const allExecomMembers = [
    ...coreExecom.map(m => ({ ...m, dept: "Core Leadership" })),
    ...allSpecializedMembers
  ];

  // Filter members based on selected Tab and Search query
  const filteredMembers = allExecomMembers.filter((m) => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.dept && m.dept.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "core") return m.dept === "Core Leadership" && matchesSearch;
    
    // Find department name matching Tab ID
    const targetDept = departments.find(d => d.id === activeTab);
    return targetDept && m.dept === targetDept.name && matchesSearch;
  });

  // Determine card size based on number of filtered members
  const getCardSizeClasses = (length: number) => {
    if (length === 1) {
      return {
        card: "w-[340px] p-8",
        imgContainer: "w-40 h-40",
        imgSilhouette: "w-20 h-20",
        nameText: "text-2xl",
        roleText: "text-xs",
        linkedinBadge: "w-8 h-8",
        linkedinIcon: "w-4 h-4"
      };
    }
    if (length === 2) {
      return {
        card: "w-[310px] p-8",
        imgContainer: "w-36 h-36",
        imgSilhouette: "w-18 h-18",
        nameText: "text-xl",
        roleText: "text-xs",
        linkedinBadge: "w-7 h-7",
        linkedinIcon: "w-3.5 h-3.5"
      };
    }
    if (length === 3) {
      return {
        card: "w-[275px] p-7",
        imgContainer: "w-32 h-32",
        imgSilhouette: "w-16 h-16",
        nameText: "text-lg",
        roleText: "text-[11px]",
        linkedinBadge: "w-6 h-6",
        linkedinIcon: "w-3 h-3"
      };
    }
    // Default size for 4+ members
    return {
      card: "w-[240px] p-6",
      imgContainer: "w-28 h-28",
      imgSilhouette: "w-14 h-14",
      nameText: "text-base",
      roleText: "text-[10px]",
      linkedinBadge: "w-6 h-6",
      linkedinIcon: "w-3 h-3"
    };
  };

  const size = getCardSizeClasses(filteredMembers.length);

  return (
    <div className="flex flex-col gap-12 relative pb-16">
      {/* TEAM TITLE BLOCK */}
      <section className="reveal text-center py-12 max-w-4xl mx-auto w-full px-5">
        <h1 className="text-accent text-5xl font-extrabold tracking-tight">IEDC MITS Team Directory</h1>
        <p className="text-navy/70 text-sm md:text-base mt-3 max-w-xl mx-auto font-light">
          The guides, executives, and operational officers orchestrating the Muthoot Institute incubation ecosystem.
        </p>
      </section>

      {/* 1. NODAL OFFICERS SECTION */}
      <section className="reveal px-5 md:px-16 py-12 max-w-6xl mx-auto w-full">
        <h2 className="text-center text-accent text-4xl font-extrabold tracking-tight border-b border-navy/10 pb-4 mb-12 animate-fade-in">
          Nodal Officers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
          {nodalOfficers.map((officer, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(officer)}
              className="flex flex-col items-center bg-paper p-8 border border-navy/10 hover-lift text-center cursor-pointer group w-full max-w-[320px] hover:border-accent"
            >
              <div className="relative w-36 h-36 mb-6">
                <div className="w-full h-full rounded-full bg-navy/5 flex items-center justify-center overflow-hidden border border-navy/10 group-hover:scale-105 transition-transform duration-300">
                  {renderUserSilhouette("w-20 h-20")}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#0077b5] text-white rounded-full flex items-center justify-center border-2 border-paper shadow-md">
                  {renderLinkedinIcon("w-4 h-4")}
                </div>
              </div>
              <h4 className="font-extrabold text-navy text-xl group-hover:text-accent transition-colors">{officer.name}</h4>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1.5">{officer.role}</p>
              <p className="text-[11px] text-navy/50 uppercase mt-1 leading-relaxed">{officer.dept}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. DYNAMIC & INTERACTIVE HUB */}
      <section className="reveal bg-navy/5 border-t border-navy/10 px-5 md:px-16 py-16 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-center text-accent text-4xl font-extrabold tracking-tight mb-4">
            Executive Committee
          </h2>
          <p className="text-center text-navy/60 text-sm max-w-lg mx-auto mb-10 font-light">
            Filter by cell or search for specific officers to learn about their roles and contact cards.
          </p>

          {/* Search and Category Control Bar */}
          <div className="flex flex-col gap-6 mb-10">
            {/* Search Input */}
            <div className="max-w-md mx-auto w-full relative">
              <input
                type="text"
                placeholder="Search by name, role, or cell..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-paper border border-navy/20 text-navy p-3.5 pl-5 pr-10 text-sm focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-navy/35 font-medium shadow-sm"
              />
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/40">
                search
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center py-2 max-w-4xl mx-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-navy/10 ${
                  activeTab === "all" ? "bg-accent text-paper border-accent shadow-sm" : "bg-paper text-navy hover:border-accent"
                }`}
              >
                All Members
              </button>
              
              <button
                onClick={() => setActiveTab("core")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-navy/10 ${
                  activeTab === "core" ? "bg-accent text-paper border-accent shadow-sm" : "bg-paper text-navy hover:border-accent"
                }`}
              >
                Core Leadership
              </button>

              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-navy/10 ${
                    activeTab === dept.id ? "bg-accent text-paper border-accent shadow-sm" : "bg-paper text-navy hover:border-accent"
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Centered Flexbox Layout */}
          <div className="flex flex-wrap justify-center gap-6 w-full min-h-[300px] max-w-6xl mx-auto">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className={`flex flex-col items-center bg-paper border border-navy/10 hover-lift ${size.card} text-center cursor-pointer group relative overflow-hidden hover:border-accent`}
                >
                  {/* Subtle Grid Accent in Card Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="25" x2="100" y2="25" stroke="#0f2d4a" strokeWidth="0.5"/>
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#0f2d4a" strokeWidth="0.5"/>
                      <line x1="0" y1="75" x2="100" y2="75" stroke="#0f2d4a" strokeWidth="0.5"/>
                      <line x1="25" y1="0" x2="25" y2="100" stroke="#0f2d4a" strokeWidth="0.5"/>
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#0f2d4a" strokeWidth="0.5"/>
                      <line x1="75" y1="0" x2="75" y2="100" stroke="#0f2d4a" strokeWidth="0.5"/>
                    </svg>
                  </div>

                  {/* Profile Circular Silhouette */}
                  <div className={`relative ${size.imgContainer} mb-4`}>
                    <div className="w-full h-full rounded-full bg-navy/5 flex items-center justify-center overflow-hidden border border-navy/10 group-hover:scale-105 transition-transform duration-300">
                      {renderUserSilhouette(size.imgSilhouette)}
                    </div>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${size.linkedinBadge} bg-[#0077b5] text-white rounded-full flex items-center justify-center border-2 border-paper shadow-sm`}>
                      {renderLinkedinIcon(size.linkedinIcon)}
                    </div>
                  </div>

                  {/* Member Name */}
                  <h4 className={`font-extrabold text-navy leading-tight group-hover:text-accent transition-colors ${size.nameText}`}>
                    {member.name}
                  </h4>
                  
                  {/* Member Role */}
                  <p className={`font-bold text-accent uppercase tracking-widest mt-1.5 ${size.roleText}`}>
                    {member.role}
                  </p>

                  {/* Cell Category Tag */}
                  {member.dept && (
                    <span className="inline-block mt-3 text-[9px] font-semibold text-navy/40 border border-navy/10 px-2 py-0.5 group-hover:border-accent/30 group-hover:text-accent/60 transition-colors">
                      {member.dept}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className="w-full py-16 text-center text-navy/40">
                <span className="material-symbols-outlined text-4xl block mb-2">
                  search_off
                </span>
                <p className="text-sm font-semibold">No members matched your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. MODAL POP-UP FLASH CARD */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-navy/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-paper border-2 border-navy p-8 max-w-md w-full relative rounded-none shadow-2xl flex flex-col items-center text-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-navy hover:text-accent font-bold text-lg focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Profile Image inside Modal (Enlarged and Hover Zoom-capable) */}
            <div className="relative w-48 h-48 mb-6 group/modal-img">
              <div className="w-full h-full rounded-full border-4 border-navy bg-navy/5 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105 shadow-inner">
                {renderUserSilhouette("w-24 h-24")}
              </div>
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 translate-y-1/2 w-9 h-9 bg-[#0077b5] text-white rounded-full flex items-center justify-center border-2 border-paper hover:scale-125 transition-all shadow-md z-10"
                aria-label="LinkedIn"
              >
                {renderLinkedinIcon("w-4.5 h-4.5")}
              </a>
            </div>

            {/* Name and Role */}
            <h4 className="font-extrabold text-2xl text-navy">{selectedMember.name}</h4>
            <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1.5">{selectedMember.role}</p>
            {selectedMember.dept && (
              <p className="text-[10px] text-navy/40 uppercase mt-0.5 font-medium">{selectedMember.dept}</p>
            )}

            {/* Separator line */}
            <div className="w-16 h-[1px] bg-navy/20 my-4"></div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-navy/80 italic font-light px-4">
              "{selectedMember.bio || "Orchestrates operations and supports the venture development environment at MITS, streamlining workflows and scaling student innovations."}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
