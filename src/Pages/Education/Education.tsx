// src/pages/Education/Education.tsx
import React from 'react';
import './Education.css';
import { FaGraduationCap , FaBookOpen } from 'react-icons/fa';


const educationData = [
    {
        year: 'Present',
        title: 'MSc in Software Engineering',
        institution: 'University of Limerick, Ireland',
        details: 'Currently in first semester.',
        icon: <FaBookOpen />
    },
    {
        year: '2023',
        title: 'B.Tech in Computer Science & Engineering',
        institution: 'Lovely Professional University, India',
        details: 'Achieved a 7.56 CGPA.',
        icon: <FaGraduationCap />
    },
    {
        year: '2019',
        title: 'Higher Secondary Certificate',
        institution: 'Intermediate/High School',
        details: 'Achieved a 9.4 CGPA.',
        icon: <FaGraduationCap />
    },
    {
        year: '2017',
        title: 'Secondary School Certificate',
        institution: 'Secondary School',
        details: 'Achieved a 10 CGPA.',
        icon: <FaGraduationCap />
    },
];

const Education: React.FC = () => {
    return (
        <div className="education-container">
            <h1 className="education-header">My Educational Journey</h1>
            <div className="timeline">
                {educationData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        {}
                        <div className="timeline-year-circle">
                            <span className="timeline-year">{item.year}</span>
                        </div>

                        {/* Timeline Icon */}
                        <div className="timeline-icon">{item.icon}</div>

                        {/* Timeline Content Card */}
                        <div className="timeline-content">
                            <h3>{item.title}</h3>
                            <p className="institution">{item.institution}</p>
                            <p className="details">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;