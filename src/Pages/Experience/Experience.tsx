import React from "react";
import "./Experience.css";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Packaged App Development Associate",
    company: "Accenture",
    duration: "Aug 2023 – Aug 2025",
    responsibilities: [
      "Designed and executed manual and automated test cases for Salesforce applications.",
      "Implemented Tosca test automation, reducing manual effort by 40%.",
      "Collaborated with developers to identify and resolve bugs across sprints.",
      "Prepared test summary reports and presented defect trends to the QA lead.",
    ],
    technologies: ["Tosca", "Salesforce", "Jira", "Postman", "Agile/Scrum"],
  },

];

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">2+ Years Industry Experience</h1>
      <p className="experience-subtitle">
        Real-world experience across automation testing, quality assurance, and agile collaboration.
      </p>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2>{exp.role}</h2>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration}</p>

            <ul className="experience-list">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <div className="experience-tech">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
