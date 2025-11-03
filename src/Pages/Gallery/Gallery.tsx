// src/Pages/Gallery/Gallery.tsx
import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  // Base URL — ensures it works in localhost and production
  const base = import.meta.env.BASE_URL;

  // Gallery items
  const mediaItems = [
    { type: 'photo', url: `${base}assets/gallery/Envi.jpg`, alt: 'Environment Photo' },
    { type: 'photo', url: `${base}assets/gallery/taylor.jpeg`, alt: 'Taylor Photo' },
    { type: 'photo', url: `${base}assets/gallery/tosca.jpg`, alt: 'Tosca Certification' },
    { type: 'photo', url: `${base}assets/gallery/ul.jpeg`, alt: 'University of Limerick' },
    { type: 'video', url: `${base}assets/gallery/demo-video.mp4`, alt: 'Demo Video' },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-header">Personal Gallery</h1>
      <p className="gallery-subtitle">
        A visual collection of my professional and academic moments.
      </p>

      <div className="gallery-grid">
        {mediaItems.map((item, index) => (
          <div key={index} className="media-card">
            {item.type === 'photo' ? (
              <img src={item.url} alt={item.alt} className="media-image" />
            ) : (
              <div className="video-wrapper">
                <video controls className="media-video">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
