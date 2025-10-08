// src/pages/Gallery/Gallery.tsx
import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
    
    
    const mediaItems = [
       
        { type: 'photo', url: '/assets/gallery/Envi.jpg', alt: 'Environment Photo' },
        { type: 'photo', url: '/assets/gallery/taylor.jpeg', alt: 'Taylor Photo' },
        { type: 'photo', url: '/assets/gallery/tosca.jpg', alt: 'Tosca Certification' },
        { type: 'photo', url: '/assets/gallery/ul.jpeg', alt: 'University of Limerick' },
        
        
        { type: 'video', url: '/assets/gallery/demo video.mp4', alt: 'Demo Video' },
        
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-header">Personal Gallery</h1>
            <p className="gallery-subtitle">A visual collection of my professional and academic moments.</p>

            <div className="gallery-grid">
                {mediaItems.map((item, index) => (
                    <div key={index} className="media-card">
                        {item.type === 'photo' ? (
                            <img 
                                
                                src={item.url} 
                                alt={item.alt} 
                                className="media-image" 
                            />
                        ) : (
                            
                            <div className="video-wrapper">
                                <iframe 
                                    src={item.url} 
                                    title={item.alt}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="media-video"
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;