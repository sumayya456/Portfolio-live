// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

type Card = {
  title: string;
  description?: string;
  link: string;
};

const rightCards: Card[] = [
  { title: "Certifications & Awards", description: "Recognized achievements and industry certifications.", link: "/certifications" },
  { title: "Testimonies", description: "Feedback and recommendations from colleagues and clients.", link: "/testimonies" },
  { title: "2+ Industry Experience", description: "Automation Focus", link: "/experience" },
  { title: "Volunteer Service", description: "Community and professional volunteer contributions.", link: "/volunteer" },
];

const bottomCards: Card[] = [
  { title: "Featured Projects", link: "/projects" },
  { title: "Research/Publications", link: "/research" },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Quality Assurance Specialist | Tester & Automation Engineer
      </h1>
      <p className="home-subtitle">
        Skilled in Salesforce testing, Tosca automation, and test management
        with proven expertise in improving software quality and efficiency.
      </p>

      {/* Main grid */}
      <div className="home-main-grid">
        {/* Big card */}
        <Link to="/blogs" className="home-card home-big-card">
          <h2>Blogs</h2>
          <p>
            Insights and deep dives into the latest in Quality Assurance,
            Automation, and Salesforce testing methodologies.
          </p>
          <div className="card-footer">
            <span>View Blog Posts →</span>
          </div>
        </Link>

        {/* Four small cards */}
        <div className="home-right-grid">
          {rightCards.map((card) => (
            <Link to={card.link} className="home-card" key={card.title}>
              <h2>{card.title}</h2>
              {card.description && <p>{card.description}</p>}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="home-bottom-grid">
        {bottomCards.map((card) => (
          <Link to={card.link} className="home-card" key={card.title}>
            <h2>{card.title}</h2>
            <div className="card-footer">
              <span>View all →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
