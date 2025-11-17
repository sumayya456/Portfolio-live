# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# Shaik Sumayya – Digital Portfolio

This repository contains my personal portfolio website developed. 
The site showcases my projects, skills, and learning journey and demonstrates modern front-end practices including modular React components, dynamic content, CI/CD with GitHub Actions, and several innovation features beyond a standard single-page portfolio.

---

## 🔗 Live Demo & Repository

- **Live Site:** https://sumayya456.github.io/Portfolio-live/  
- **GitHub Repository:** https://github.com/sumayya456/Portfolio-live  

---

## 📝 Project Overview

The goal of this portfolio is to:

- Present my skills, projects, certificates, and contact information in a clear and professional way.
- Apply software design principles such as **separation of concerns**, **modularity**, and **maintainability**.
- Implement a **fully automated deployment pipeline** using **GitHub Actions** and GitHub Pages.
- Integrate **dynamic data** (JSON), **API consumption**, and **interactive UI features** that go beyond standard class coverage.
- Reflect on peer feedback from Phase 1 and demonstrate iterative improvement through multiple development iterations.

The portfolio consists of multiple sections (Home, About, Projects, Blog, Certificates, Contact) and is fully responsive for desktop, tablet, and mobile devices.

---

## ✨ Main Features

### Core Portfolio Features

- Multi-page layout using **React Router** (Home, About, Projects, Blog, Certificates, Contact).
- Responsive navigation bar with active link highlighting.
- Updated hero section with **profile photograph**, title, and call-to-action buttons (e.g., “Download CV”).
- Project cards with descriptions, tech stack tags, and links (GitHub / live demo).
- Certificates gallery with an enhanced **expand/collapse** view for reading details.
- Contact section with an interactive form and clear call-to-action.
- Consistent colour palette, typography, and spacing based on peer review feedback.

### Dynamic Data & State

- Portfolio data (projects, blog posts, certificates, etc.) stored in **JSON files** and loaded dynamically.
- **Search and filter** functionality for blog posts and/or projects, using React state for keyword and category filtering.
- Basic **state management** using React hooks (`useState`, `useEffect`) to manage UI state such as filters, theme, modal visibility, etc.

### Innovation Features (Beyond Normal Single GitHub Page)

- **Quote of the Day API**:  
  - Fetches a new quote from a public API and displays it in the UI to make the site feel fresh and dynamic.
- **Instant Messaging / Chat Simulation**:  
  - A simple chat-style widget that simulates Q&A or “ask me anything” interaction with pre-defined responses.
- **Theme Toggle (Light / Dark Mode)**:  
  - Global theme switcher using React state and CSS variables/local storage.
- **Enhanced Certificates Viewer**:  
  - Clickable certificates that expand into a modal/card with full details.
- **Download CV Button**:  
  - One-click download of a PDF CV stored in the repository.
- **Animations (GSAP / CSS Transitions)**:  
  - Smooth fade-in/slide-in transitions for sections (on scroll) to improve user experience.
- **Lazy Loading (where applied)**:  
  - Selected images/components are lazy-loaded to improve performance on initial page load.

---

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Build Tool:** Vite (or Create React App – replace here if different)
- **Routing:** React Router
- **Styling:** CSS 
- **Animations:** CSS transitions,configure router
- **State Management:** React hooks (`useState`, `useEffect`)
- **Data:** Local JSON files for blog posts
- **API:** Public Quote API for “Quote of the Day”
- **CI/CD & Hosting:** GitHub Actions + GitHub Pages

---

## 📁 Project Structure

Actual structure used in this project:

                 
├── public/
│   └── assets/
│       ├── certifications/
│       ├── gallery/
│       ├── Profile-photo.jpeg
│       └── shaik Sumayya resume.pdf
│
├── src/
│   ├── components/
│   │   ├── ChatWidget/        # Chat/instant messaging widget
│   │   ├── layouts/Sidebar/   # Sidebar layout and navigation components
│   │   └── ui/CardBox/        # Reusable card-style UI components
│   │
│   ├── data/
│   │   └── blogs.json         # Blog data (title, date, tags, content)
│   │
│   ├── Pages/
│   │   ├── Blogs/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Featured Projects/
│   │   ├── Gallery/
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Research-Publications/
│   │   ├── Skills/
│   │   ├── Testimonies/
│   │   └── Volunteer/
│   │
│   ├── styles/                # Global and page-specific styles
│   ├── App.tsx                # Root component & routing
│   ├── App.css                # Global styles
│   └── main.tsx               # Entry point (React + Vite bootstrap)
│
├── package.json               # Dependencies and scripts
└── vite.config.ts             # Vite configuration (including base path for GitHub Pages)


