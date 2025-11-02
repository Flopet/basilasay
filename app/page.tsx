import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { EducationItem } from "@/components/EducationItem";
import { ContactLink } from "@/components/ContactLink";
import {
  personalInfo,
  experiences,
  projects,
  education,
  contacts,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            {personalInfo.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {personalInfo.bio}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
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
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
          <div className="space-y-4">
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Contact</h2>
          <div className="flex flex-wrap gap-4">
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
  );
}
