// src/pages/Contact/Contact.tsx
import React from 'react';
import './Contact.css';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message Sent! (Form submission logic goes here)");
    };

    return (
        <div className="contact-container">
            <h1>Get in Touch</h1>

            <div className="contact-main-grid">
                
                {/* Left Column: Contact Form */}
                <div className="contact-form-card">
                    <p>I look forward to hear about opportunities.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Type Your Message here" required rows={5}></textarea> 

                        <button type="submit" className="send-message-button">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Column: Contact Links/Cards */}
                <div className="contact-info-cards">
                    
                    {/* Email Card */}
                    <div className="info-card">
                        <FiMail className="info-icon" />
                        <div className="info-details">
                            <p className="info-label">Email Address</p>
                            <a href="mailto:shaiksumayya469@gmail.com">shaiksumayya469@gmail.com</a>
                        </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="info-card">
                        <FiLinkedin className="info-icon" />
                        <div className="info-details">
                            <p className="info-label">Connect on Linkedin</p>
                            <a href="https://linkedin.com/in/sumayyashaik">/in/sumayyashaik</a>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div className="info-card">
                        <FiGithub className="info-icon" />
                        <div className="info-details">
                            <p className="info-label">Connect on Github</p>
                            <a href="https://github.com/sumayya456">/sumayya456</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;