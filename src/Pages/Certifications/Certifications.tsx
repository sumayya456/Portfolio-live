// src/Pages/Certifications/Certifications.tsx
import React, { useState } from "react";
import "./Certifications.css";

type Certificate = {
  title: string;
  thumbnail: string;
  fullImage: string;
};

const base = import.meta.env.BASE_URL; // important for GitHub Pages + local

const certificates: Certificate[] = [
  {
    title: "Salesforce Certification",
    thumbnail: `${base}assets/certifications/salesforce_thumb.jpg`,
    fullImage: `${base}assets/certifications/salesforce_full.jpg`,
  },
  {
    title: "Tricentis AS1 Certification",
    thumbnail: `${base}assets/certifications/Tricentis_AS1_thumb.jpg`,
    fullImage: `${base}assets/certifications/tricentis_as1_full.jpg`,
  },
  {
    title: "Tricentis AS2 Certification",
    thumbnail: `${base}assets/certifications/Tricentis_AS2_thumb.jpg`,
    fullImage: `${base}assets/certifications/tricentis_as2_full.jpg`,
  },
  {
    title: "Tricentis TDS1 Certification",
    thumbnail: `${base}assets/certifications/Tricentis_TDS1_thumb.jpg`,
    fullImage: `${base}assets/certifications/tricentis_tds1_full.jpg`,
  },
  {
    title: "Tricentis TDS2 Certification",
    thumbnail: `${base}assets/certifications/Tricentis_TDS2_thumb.jpg`,
    fullImage: `${base}assets/certifications/tricentis_tds2_full.jpg`,
  },
];

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="cert-page">
      <h1 className="cert-heading">Certifications & Achievements</h1>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="cert-box"
            onClick={() => setSelectedImage(cert.fullImage)}
          >
            <img
              src={cert.thumbnail}
              alt={cert.title}
              className="cert-thumb"
            />
            <p className="cert-title">{cert.title}</p>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
