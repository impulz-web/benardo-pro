"use client";

import { Navbar } from "@/components/site/navbar";
import { Container } from "@/components/ui/container";

export default function ResumeContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="py-12 sm:py-16">
        <Container className="max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">BENARD MULINDI</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text">
              <span className="flex items-center gap-2">📞 +254 717 389 815</span>
              <span className="flex items-center gap-2">✉ benardo@hotcorebeatz.com</span>
              <span className="flex items-center gap-2">📍 Nakuru, Kenya</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <a 
                href="https://www.linkedin.com/in/benard-mulindi-093390339/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1"
              >
                🔗 LinkedIn
              </a>
              <a 
                href="https://benardo.hotcorebeatz.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1"
              >
                🔗 Portfolio
              </a>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Professional Summary */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
                <p className="text-sm text-text leading-relaxed">
                  Versatile IT Support + Full-Stack Web Developer and Media producer with 5+ years of hands-on experience supporting businesses through reliable IT solutions, modern web systems, and automation. Skilled in troubleshooting, server management, networking, cloud deployment, WordPress/Elementor, and building full-stack applications deployed via Vercel. Strong ability to bridge technical IT operations with modern software development, digital tools, and user-focused solutions that drive efficiency and growth.
                </p>
              </section>

              {/* Professional Experience */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>
                
                <div className="space-y-6">
                  {/* iMerit Scholar */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Data Annotator — iMerit Scholar</h3>
                      <span className="text-xs text-text-muted">Contract | Remote | 2026</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Annotated and classified large-scale datasets to support machine learning model training and evaluation.</li>
                      <li>Delivered accurate labels and structured feedback following strict annotation guidelines.</li>
                      <li>Performed quality assurance on annotated data to ensure consistency and high accuracy.</li>
                      <li>Documented edge cases and contributed to improving annotation standards and workflows.</li>
                      <li>Maintained high productivity and attention to detail in a fast-paced remote environment.</li>
                      <li>Handled audio (speech/music) and image data annotation, ensuring accurate labeling, segmentation, and metadata tagging.</li>
                    </ul>
                  </div>

                  {/* Muramara Events */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Senior Developer | Muramara Events</h3>
                      <span className="text-xs text-text-muted">2025-2026 contract</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Built and manage custom web solution</li>
                      <li>Provide IT support and systems troubleshooting ensuring smooth operations.</li>
                      <li>Implement custom CRM leads and customer communication.</li>
                    </ul>
                  </div>

                  {/* Hotcore web services */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Founder & Technical Lead | Hotcore web services</h3>
                      <span className="text-xs text-text-muted">2024–Present</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Develop and deploy responsive business websites using WordPress, custom code, and Vercel for modern web applications.</li>
                      <li>Provide IT support and systems troubleshooting for clients, ensuring smooth operations.</li>
                      <li>Implement CRM and automation workflows (Zoho, HubSpot, Zapier) to streamline leads and customer communication.</li>
                      <li>Manage hosting environments, DNS configurations, website migrations, and performance optimization.</li>
                      <li>Apply prompt engineering techniques to accelerate UI/UX design and automate development workflows</li>
                      <li>Prototype and design front-end interfaces using AI (Gemini), translating concepts into functional, responsive applications.</li>
                    </ul>
                  </div>

                  {/* Eneza IT Solutions */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Digital Marketer & Technical Collaborator | Eneza IT Solutions</h3>
                      <span className="text-xs text-text-muted">2023–2024</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Worked closely with developers to deliver client websites, system integrations, and technical solutions.</li>
                      <li>Contributed to content creation, social media planning, and SEO-based digital campaigns.</li>
                      <li>Assisted in IT support tasks including software setup, basic networking, and troubleshooting during client deployments.</li>
                    </ul>
                  </div>

                  {/* Godwill Productions */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Producer & Technical Director | Godwill Productions</h3>
                      <span className="text-xs text-text-muted">2021–Present</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Managed production systems, digital equipment, and media software to deliver high-quality content.</li>
                      <li>Designed marketing content and online strategies to boost brand visibility.</li>
                      <li>Supported IT needs in studio environments (software installation, networking, backup solutions).</li>
                    </ul>
                  </div>

                  {/* Hotcorebeatz Studio */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Founder & Producer | Hotcorebeatz Studio</h3>
                      <span className="text-xs text-text-muted">2020–Present</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Built and maintained digital workstations, audio systems, and network setups for media production.</li>
                      <li>Provided consultation and technical guidance to emerging artists.</li>
                      <li>Leveraged digital platforms to drive studio growth and online reach.</li>
                    </ul>
                  </div>

                  {/* Freelance IT Support Specialist */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">IT Technician & Solutions Provider | Freelance IT Support Specialist</h3>
                      <span className="text-xs text-text-muted">2019–Present</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Delivered end-to-end IT support to small businesses (software installs, networking, security, troubleshooting).</li>
                      <li>Configured systems, printers, routers, and business workstations.</li>
                      <li>Offered reliable, budget-friendly technical solutions tailored to each client’s operations.</li>
                    </ul>
                  </div>

                  {/* Dream Records */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Intern Media Producer | Dream Records</h3>
                      <span className="text-xs text-text-muted">2019–2021</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Assisted in content production and learned client-facing technical coordination.</li>
                      <li>Contributed to marketing projects aimed at attracting new artists.</li>
                    </ul>
                  </div>

                  {/* BH Productions */}
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-foreground">Media Producer | BH Productions</h3>
                      <span className="text-xs text-text-muted">2016–2018</span>
                    </div>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Delivered client production projects, ensuring equipment setup, workflow planning, and on-time delivery.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div>
              {/* Core Skills */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-2 mb-4">CORE SKILLS</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">IT & Systems Admin</h3>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>IT Support, troubleshooting, diagnostics</li>
                      <li>Networking</li>
                      <li>Software installation, updates & patching</li>
                      <li>Cloud deployment (Vercel, Netlify, AWS basic)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Web Development</h3>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>AI-powered front-end prototyping</li>
                      <li>Prompt engineering</li>
                      <li>Full-Stack development (HTML, CSS, JS)</li>
                      <li>React.js, Next.js + Vercel</li>
                      <li>WordPress/Elementor</li>
                      <li>API integration (REST)</li>
                      <li>Supabase (PostgreSQL)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Tech & Digital Tools</h3>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Git & GitHub</li>
                      <li>CRM Tools (HubSpot, Zoho, Zapier)</li>
                      <li>SEO & Analytics</li>
                      <li>Google Search Console</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Creative & Additional</h3>
                    <ul className="text-sm text-text space-y-1 ml-4 list-disc">
                      <li>Video editing (Premiere, Photoshop, Canva)</li>
                      <li>Music production (FL Studio, Studio One, Logic Pro)</li>
                      <li>Strategic branding</li>
                      <li>Bilingual: English & Swahili</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education & Certifications */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-2 mb-4">EDUCATION & CERTIFICATIONS</h2>
                <ul className="text-sm text-text space-y-2 ml-4 list-disc">
                  <li>Full Stack Web Development (IBM) – Ongoing</li>
                  <li>Digital Marketing Advanced – HubSpot Academy</li>
                  <li>Elementor Web Development – Udemy (2024)</li>
                  <li>Certified Digital Marketing Strategist – LinkedIn (2024)</li>
                  <li>Advanced Music Production – Mixxin Academy (2025)</li>
                  <li>Degree in Information & Technology - Mount Kenya University (2020)</li>
                  <li>Media Production Certification – BH Media Production (2016)</li>
                </ul>
              </section>

              {/* References */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground border-b border-white/10 pb-2 mb-4">REFERENCES</h2>
                <div className="text-sm text-text space-y-2">
                  <div>
                    <span className="font-semibold text-foreground">Garang Deng Duot</span>, CEO – Godwill Productions
                    <div>✉ garangdengduot@gmail.com</div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Samwel Alfayo</span>, CEO – Alfavids & BH Productions
                    <div>📞 +254724431589</div>
                  </div>
                </div>
              </section>

              {/* Download/Print button */}
              <div className="text-center">
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold tracking-tight text-[#0B0B0B] shadow-[0_12px_30px_rgba(97,206,112,0.3)] transition duration-200 hover:brightness-105"
                >
                  Print / Save as PDF
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      <footer className="pb-10">
        <Container>
          <p className="text-xs text-text-muted text-center">© {new Date().getFullYear()} Benard Mulindi. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}
