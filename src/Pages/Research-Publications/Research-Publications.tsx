import React from "react";
import "./Research-Publications.css";

interface ResearchItem {
  title: string;
  description: string;
  year: string;
  domain: string;
  link?: string;
}

const researchItems: ResearchItem[] = [
  {
    title: "Building Energy Rating (BER) Data Analytics – Ireland",
    description:
      "A comprehensive study using SEAI datasets to analyze Ireland's residential energy performance. The research focused on data cleaning, classification, and visualization techniques to assess energy efficiency trends.",
    year: "2024",
    domain: "Data Analytics / Energy Informatics",
    link: "https://github.com/sumayya456/BER-Data-Analytics",
  },
  
];

const ResearchPublications: React.FC = () => {
  return (
    <div className="research-container">
      <h1 className="research-title">Research & Publications</h1>
      <p className="research-subtitle">
        Selected academic work, papers, and research studies completed during my MSc and professional journey.
      </p>

      <div className="research-grid">
        {researchItems.map((r, index) => (
          <div key={index} className="research-card">
            <div className="research-header">
              <h2>{r.title}</h2>
              <span className="research-year">{r.year}</span>
            </div>
            <p className="research-domain">{r.domain}</p>
            <p className="research-desc">{r.description}</p>
            {r.link && (
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="research-link"
              >
                View Paper ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPublications;
