import React from "react";
import "./Featured Projects.css";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  year: string;
}

const projects: Project[] = [
  
  {
    title: "Mall Management System",
    description:
      "Developed an N-Tier web-based management platform for tenants, mall administrators, and logistics managers. Implemented rent, delivery scheduling, and billing modules.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    link: "https://github.com/sumayya456/sign-in-and-sign-up-page-main",
    year: "2024",
  },
 
 
  
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Featured Projects</h1>
      <p className="projects-subtitle">
        Academic and professional projects demonstrating my skills in QA, software engineering, and data analytics.
      </p>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2>{p.title}</h2>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
               View Project ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
