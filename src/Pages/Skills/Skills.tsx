// src/pages/Skills/Skills.tsx
import React from 'react';
import './Skills.css';
import { FaLaptopCode, FaSalesforce, FaRobot, FaClipboardCheck, FaTools } from 'react-icons/fa';


const skillsData = [
    {
       
        title: 'Salesforce Testing',
        icon: <FaSalesforce />,
        details: 'Deep expertise in end-to-end quality assurance for Salesforce Sales and Service Clouds, ensuring data integrity and user workflow validity across complex customizations.'
    },
    {
        
        title: 'Tosca Automation',
        icon: <FaRobot />,
        details: 'Proficient in designing, executing, and maintaining automated test cases using Tricentis Tosca, focusing on efficiency and high coverage for enterprise applications.'
    },
    {
       
        title: 'API Testing (Postman/SoapUI)',
        icon: <FaClipboardCheck />,
        details: 'Experience in validating RESTful and SOAP APIs, including security, performance, and functionality tests using industry-standard tools.'
    },
    {
        yearRange: '2+ Years', 
        title: 'QA Methodologies & Tools',
        icon: <FaLaptopCode />,
        details: 'Skilled in Agile/Scrum environments, encompassing test planning, bug lifecycle management (Jira), test case documentation, and continuous integration practices.'
    },
];


const techStack = [
    'Tricentis Tosca', 'Salesforce', 'Selenium', 'Jira', 'Postman', 
    'SQL/Database', 'Agile/Scrum', 'Git', 
    'React (Basic)', 'GitHub'
];

const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <h1 className="skills-header">My Expertise & Experience</h1>
            
            {/* NEW SECTION 1: Key Metrics/Statistics */}
            <div className="skills-metrics-grid">
                <div className="metric-card">
                    <h2 className="metric-number">2+</h2>
                    <p className="metric-label">Years in QA</p>
                </div>
                <div className="metric-card">
                    <h2 className="metric-number">500+</h2>
                    <p className="metric-label">Automation Cases Developed</p>
                </div>
                <div className="metric-card">
                    <h2 className="metric-number">30%</h2>
                    <p className="metric-label">Efficiency Improvement</p>
                </div>
                <div className="metric-card">
                    <h2 className="metric-number">Salesforce</h2>
                    <p className="metric-label">Certified Tester</p>
                </div>
            </div>

            {/* NEW SECTION 2: Tech Stack Badges */}
            <div className="skills-tech-stack">
                <h2 className="tech-stack-title"><FaTools /> Core Tech Stack</h2>
                <div className="tech-stack-badges">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>

            {}
           
            <div className="timeline">
                {skillsData.map((item, index) => (
                    <div 
                        key={index} 
                        className="timeline-item"
                    >
                        <div className="timeline-icon">{item.icon}</div>
                        <div className="timeline-content">
                            <span className="timeline-year-range">{item.yearRange}</span>
                            <h3>{item.title}</h3>
                            <p className="details">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;