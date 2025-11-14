import React from "react";
import "./Blogs.css";

interface BlogCard {
  title: string;
  description: string;
  date: string;
  link: string; // External link
}

const blogPosts: BlogCard[] = [
  {
    title: "Enhancing Software Quality with Automation",
    description:
      "Exploring how test automation frameworks like Tosca improve accuracy, reduce manual effort, and accelerate delivery in enterprise QA pipelines.",
    date: "2025",
    link: "https://medium.com/@sumayyashaik2002/enhancing-software-quality-with-automation-6e71a839b95a", //  blog link
  },
  
  {
    title: "Effective Bug Tracking and Reporting in QA Teams",
    description:
      "Learn how using proper defect lifecycle management and collaboration tools can increase productivity and transparency in QA processes.",
    date: "2025",
    link: "https://medium.com/@sumayyashaik2002/effective-bug-tracking-and-reporting-in-qa-teams-1fad475a587c", // Blog link
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">My Blog Posts</h1>
      <p className="blogs-subtitle">
        Insights and discussions about QA, automation, and modern software testing.
      </p>

      <div className="blogs-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-meta">
              <span>{post.date}</span>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
