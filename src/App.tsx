// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sidebar
import Sidebar from "./components/layouts/Sidebar/Sidebar";

// ⭐ NEW: analytics listener
import AnalyticsListener from "./AnalyticsListener";

// Sidebar Pages
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";

// Home Card Pages
import Blogs from "./Pages/Blogs/Blogs";
import Certifications from "./Pages/Certifications/Certifications";
import Experience from "./Pages/Experience/Experience";
import Testimonies from "./Pages/Testimonies/Testimonies";
import Volunteer from "./Pages/Volunteer/Volunteer";
import FeaturedProjects from "./Pages/Featured Projects/Featured Projects";
import ResearchPublications from "./Pages/Research-Publications/Research-Publications";

import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="app-root">
        {/* Sidebar */}
        <Sidebar />

        {/* ⭐ Analytics listener – inside Router, outside Routes */}
        <AnalyticsListener />

        {/* Top-right controls */}
        <div className="top-right-controls">
          <a
            href={`${import.meta.env.BASE_URL}shaik%20Sumayya%20resume.pdf`}
            download
            className="cv-button"
          >
            Download CV
          </a>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/projects" element={<FeaturedProjects />} />
            <Route path="/research" element={<ResearchPublications />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
