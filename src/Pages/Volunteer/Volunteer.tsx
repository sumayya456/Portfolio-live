import React from "react";
import "./Volunteer.css";

interface VolunteerItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  link?: string;
}

const volunteerData: VolunteerItem[] = [
  {
    role: "UL App Testing",
    organization: "University of Limerick ",
    duration: "Present",
    description:
      "Testing UL App for release,helping the team identify usability issues, verify new features, and improve overall app quality.reporting bugs, and giving feedback on UI/UX enhancements to ensure a smoother experience for UL students.",
  },
  {
    role: "Event Coordinator",
    organization: "Diwali celebrations",
    duration: "Sept 2023 – Dec 2023",
    description:
      "Planned and managed community events promoting diversity and inclusion in technology. Coordinated guest speakers and hands-on QA demo sessions.",
  },
  
  {
    role: "Environmental Awareness Volunteer",
    organization: "Green Campus ",
    duration: "May 2022 – Dec 2022",
    description:
      "Collaborated with peers to organize eco-friendly drives and digital campaigns within the campus promoting sustainability and clean-tech innovation.",
  },
];

const Volunteer: React.FC = () => {
  return (
    <div className="volunteer-container">
      <h1 className="volunteer-title">Volunteer Service</h1>
      <p className="volunteer-subtitle">
        Community and professional volunteering roles that strengthened my leadership and teamwork skills.
      </p>

      <div className="volunteer-grid">
        {volunteerData.map((v, index) => (
          <div key={index} className="volunteer-card">
            <h2>{v.role}</h2>
            <p className="volunteer-org">{v.organization}</p>
            <p className="volunteer-duration">{v.duration}</p>
            <p className="volunteer-desc">{v.description}</p>
            {v.link && (
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="volunteer-link"
              >
                Learn More ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
