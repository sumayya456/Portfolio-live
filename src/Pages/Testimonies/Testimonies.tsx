import React from "react";
import "./Testimonies.css";

interface Testimony {
  initials: string;
  name: string;
  position: string;
  company: string;
  message: string;
}

const testimonies: Testimony[] = [
  
  {
    initials: "SS",
    name: "Sri Lakshmi",
    position: "Associate",
    company: "Accenture",
    message:
      "It was a pleasure working with Sumayya during our Tosca automation projects. She showcased leadership and initiative in ensuring test efficiency and high coverage within tight deadlines.",
  },
  {
    initials: "VV",
    name: "Vishwa",
    position: "Automation Lead",
    company: "Accenture",
    message:
      "Her understanding of both manual and automated testing frameworks makes her a strong QA professional. Sumayya’s communication and mentoring approach elevated the team’s performance significantly.",
  },
  {
    initials: "AR",
    name: "Aisha Rahman",
    position: "MSc Student",
    company: "University of Limerick",
    message:
      "Sumayya has been an excellent collaborator on multiple academic projects, bringing structure and creativity to every deliverable. Her technical precision and consistency stand out.",
  },
];

const Testimonies: React.FC = () => {
  return (
    <div className="testimonies-container">
      <h1 className="testimonies-title">Professional Testimonials</h1>
      <p className="testimonies-subtitle">
        Feedback and recommendations from mentors, colleagues, and professionals I’ve worked with.
      </p>

      <div className="testimonies-grid">
        {testimonies.map((t, index) => (
          <div key={index} className="testimony-card">
            {/* Circle with initials */}
            <div className="testimony-initials">{t.initials}</div>

            <p className="testimony-message">“{t.message}”</p>

            <div className="testimony-author">
              <h3>{t.name}</h3>
              <p>
                {t.position} — <span>{t.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
