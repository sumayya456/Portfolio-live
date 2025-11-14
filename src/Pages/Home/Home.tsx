// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

type Card = {
  title: string;
  description?: string;
  link: string;
};

const rightCards: Card[] = [
  {
    title: "Certifications & Awards",
    description: "Recognized achievements and industry certifications.",
    link: "/certifications",
  },
  {
    title: "Testimonies",
    description: "Feedback and recommendations from colleagues and clients.",
    link: "/testimonies",
  },
  {
    title: "2+ Industry Experience",
    description: "Automation Focus",
    link: "/experience",
  },
  {
    title: "Volunteer Service",
    description: "Community and professional volunteer contributions.",
    link: "/volunteer",
  },
];

const bottomCards: Card[] = [
  { title: "Featured Projects", link: "/projects" },
  { title: "Research/Publications", link: "/research" },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/today")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        }
      })
      .catch(() => {
        // Fallback quote if API fails
        setQuote("Stay positive, work hard, and make it happen.");
        setAuthor("Unknown");
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">
        Quality Assurance Specialist | Tester & Automation Engineer
      </h1>
      <p className="home-subtitle">
        Skilled in Salesforce testing, Tosca automation, and test management
        with proven expertise in improving software quality and efficiency.
      </p>

      {/* Quote of the Day */}
      {quote && (
        <div className="quote-box">
          <p className="quote-text">“{quote}”</p>
          <p className="quote-author">— {author}</p>
        </div>
      )}

      {/* Main grid */}
      <div className="home-main-grid">
        {/* Big card */}
        <div
          className="home-card home-big-card"
          onClick={() => navigate("/blogs")}
          style={{ cursor: "pointer" }}
        >
          <h2>Blogs</h2>
          <p>
            Insights and deep dives into the latest in Quality Assurance,
            Automation, and Salesforce testing methodologies.
          </p>
          <div className="card-footer">
            <span>View Blog Posts →</span>
          </div>
        </div>

        {/* Four small cards */}
        <div className="home-right-grid">
          {rightCards.map((card) => (
            <div
              key={card.title}
              className="home-card"
              onClick={() => navigate(card.link)}
              style={{ cursor: "pointer" }}
            >
              <h2>{card.title}</h2>
              {card.description && <p>{card.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="home-bottom-grid">
        {bottomCards.map((card) => (
          <div
            key={card.title}
            className="home-card"
            onClick={() => navigate(card.link)}
            style={{ cursor: "pointer" }}
          >
            <h2>{card.title}</h2>
            <div className="card-footer">
              <span>View all →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
