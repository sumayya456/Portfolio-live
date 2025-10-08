// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. IMPORT ALL COMPONENTS


import Sidebar from './components/layouts/Sidebar/Sidebar'; 

import Home from './Pages/Home/Home';                      
import Education from './Pages/Education/Education';        
import Skills from './Pages/Skills/Skills';                
import Contact from './Pages/Contact/Contact';              
import Projects from './Pages/Projects/Projects';          
import Gallery from './Pages/Gallery/Gallery';              



const Blogs = () => <div style={{padding: '40px', color: 'white'}}><h2>Blog Posts (Coming Soon)</h2></div>;
const Testimonials = () => <div style={{padding: '40px', color: 'white'}}><h2>Testimonials & Reviews (Coming Soon)</h2></div>;
const Research = () => <div style={{padding: '40px', color: 'white'}}><h2>Research/Publications (Coming Soon)</h2></div>;


const App: React.FC = () => {
  return (
    <Router>
      <div 
        style={{
          display: 'flex',
          height: '100vh',        
          width: '100vw',
          overflow: 'hidden',     
          backgroundColor: '#121212', 
        }}
      >
        <Sidebar />
        
        {/* Main Content Wrapper - Scrollable Area */}
        <div 
          style={{
            flexGrow: 1,
            padding: '40px', 
            overflowY: 'auto', 
            display: 'flex',
            flexDirection: 'column', 
            height: '100%',
          }}
        >
          <Routes>
            {/* Primary Sidebar Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} /> 
            <Route path="/skills" element={<Skills />} />
            
            {/* Sidebar Link: Gallery (Photo/Video) */}
            <Route path="/gallery" element={<Gallery />} /> 
            
            <Route path="/contact" element={<Contact />} />
            
            {/* Home Card Link: Projects (Technical Cards) */}
            <Route path="/projects" element={<Projects />} /> 
            
            {/* Other Home Card Routes */}
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/testimonials" element={<Testimonials />} /> 
            <Route path="/research" element={<Research />} /> 

            {}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;