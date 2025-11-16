import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationItem } from "@/components/CertificationItem";
import { ContactLink } from "@/components/ContactLink";
import { Skills } from "@/components/Skills";
import "./page.css";
import "./page.mobile.css";

// Import data from lib/config.ts
import {
  personalInfo,
  experience,
  projects,
  skills,
  certifications,
  contacts,
} from "@/lib/config";

export default function Home() {
  return (
    <div className="page-container">
        <div className="layout-container">

            {/* Left Column - Cover Image (33% on large screens) */}
            <aside className="cover-aside">
                <Image
                    src={personalInfo.coverImage}
                    alt={personalInfo.coverImageAlt}
                    className="cover-image"
                    fill
                    priority
                />
            {/* Shadow overlay */}
            <div className="shadow-overlay"></div>
            </aside>

            {/* Right Column - Content (67% on large screens) */}
            <main className="main-content">
                {/* Hero Section */}
                <section className="section">
                    <h1 className="hero-title">
                    {personalInfo.name}
                    </h1>
                    <p className="hero-subtitle">
                    {personalInfo.title} | {personalInfo.company}
                    </p>
                    <p className="hero-elevator">
                      {personalInfo.elevator}
                    </p>
                    <p className="hero-bio">
                      {personalInfo.bio}
                    </p>
                </section>

                {/* Skills Section */}
                <section className="section">
                    <h2 className="section-heading">Technical Skills</h2>
                    <Skills
                      proficient={skills.proficient}
                      intermediate={skills.intermediate}
                      learning={skills.learning}
                    />
                </section>

                {/* Experience Section */}
                <section className="section">
                    <h2 className="section-heading">Experience</h2>
                <div className="experience-list">
                  {experience.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      dateRange={exp.dateRange}
                      description={exp.description}
                      highlights={exp.highlights}
                    />
                  ))}
                </div>
              </section>

          {/* Projects Section */}
          <section className="section">
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

          {/* Certifications Section */}
          <section className="section">
            <h2 className="section-heading">Certifications</h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <CertificationItem
                  key={index}
                  name={cert.name}
                  issuer={cert.issuer}
                  year={cert.year}
                  description={cert.description}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
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
