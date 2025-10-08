// src/components/ui/CardBox/CardBox.tsx
import React from 'react';
import './CardBox.css'; 

interface CardBoxProps {
    title: string;
    content: React.ReactNode;
    category?: string;
    linkTo?: string;
    viewLinkText?: string;
}

const CardBox: React.FC<CardBoxProps> = ({ title, content, category, linkTo, viewLinkText }) => {
    return (
        <div className="card-box">
            {category && <p className="card-category">{category}</p>}
            <h2 className="card-title">{title}</h2>
            
            <div className="card-content">
                {content}
            </div>

            {viewLinkText && linkTo && (
                <a href={linkTo} className="view-link">
                    {viewLinkText} &rarr;
                </a>
            )}
        </div>
    );
}

export default CardBox;