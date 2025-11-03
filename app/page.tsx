import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { EducationItem } from "@/components/EducationItem";
import { ContactLink } from "@/components/ContactLink";
import "./page.css";

// Import data from lib/data.ts
import {
  personalInfo,
  experience,
  projects,
  education,
  contacts,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="page-container">

      <div className="layout-container">
        {/* Left Column - Cover Image (33% on large screens) */}
        <aside className="cover-aside">
          <Image
            src="/BasilAndKaitlyn.png"
            alt="Basil and Kaitlyn"
            fill
            className="cover-image"
            priority
          />
          {/* Shadow overlay */}
          <div className="shadow-overlay inner-shadow"></div>
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
              <hr />
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
                  technologies={project.tags}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-heading">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <EducationItem
                  key={index}
                  degree={edu.degree}
                  institution={edu.institution}
                  year={edu.year}
                  details={edu.details}
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
