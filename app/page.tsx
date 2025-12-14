import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { CertItem } from "@/components/CertItem";
import { ContactLink } from "@/components/ContactLink";
import { GithubRibbon } from "@/components/GithubRibbon";
import {PrintButton} from "@/components/PrintButton";
import "./page.css";
import "./page.mobile.css";
import "./printout.css"

// Import data from lib/config.ts
import {
  personalInfo,
  experience,
  projects,
  education,
  contacts,
} from "@/lib/config";

export default function Home() {
  return (
    <div className="page-container">
        <GithubRibbon/>
        <div className="layout-container">
            {/* Left Column - Cover Image (33% on large screens) */}
            <aside className="cover-aside">
                <Image
                    src={personalInfo.coverImage}
                    alt="Basil and Kaitlyn"
                    className="cover-image"
                    fill
                    priority
                />
            {/* Left Column Shadow overlay */}
            <div className="shadow-overlay"></div>
            </aside>

            {/* Right Column - Content (67% on large screens) */}
            <main className="main-content">
                {/* Hero Section */}
                <PrintButton/>
                <section className="section">
                    <h1 className="hero-title">
                    {personalInfo.name}
                    </h1>
                    <p className="hero-subtitle">
                    {personalInfo.title} | {personalInfo.company}
                    </p>
                    <p className="hero-bio">
                      {personalInfo.bio}
                    </p>

                </section>

                {/* Experience Section */}
                <section className="section">
                    <h2 className="section-heading">Experience</h2>
                <div className="experience-list">
                  {experience.map((experience, index) => (
                    <ExperienceItem
                      key={index}
                      title={experience.title}
                      company={experience.company}
                      dateRange={experience.dateRange}
                      description={experience.description}
                      highlights={experience.highlights}
                    />
                  ))}
                </div>
              </section>

          {/* Certifications Section */}
          <section className="section" id="cert-section">
            <h2 className="section-heading">Certifications</h2>
            <div className="cert-list">
              {education.map((edu, index) => (
                <CertItem
                  key={index}
                  certificate={edu.certificate}
                  issuer={edu.issuer}
                  year={edu.year}
                  details={edu.details}
                  badge={edu.badge}
                />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="section" id="projects-section">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacts-section">
            <h2 className="section-heading">Contact</h2>
            <div className="contact-links">
              {contacts.map((contact, index) => (
                <ContactLink
                  key={index}
                  href={contact.href}
                  label={contact.label}
                  external={contact.external}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
