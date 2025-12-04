import React from "react";
import "./projects.css";

import Web from "../assets/website.png";
import Dashboard from "../assets/dashboard.png";
import App from "../assets/app_cost.png";

// Import tech icons from react-icons
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMysql } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "AppCost Calculator",
description: `AppCost Calculator helps estimate the cost of developing mobile applications based on features and complexity.
It provides a quick, interactive way to calculate budgets for different app types.
Designed for developers, startups, and businesses to plan project costs efficiently.`, demo: "https://website-calculator-gold.vercel.app/",
    demo: "https://project-cost-calculator-olive.vercel.app/",
      code: "https://github.com/upparakash/ProjectCost_Calculator",

      tech: ["html", "css", "js", "react", "nodejs", "mysql"],
      image: App,
    },
    {
      title: "Web Cost Calculator",
     description: `Website Cost Calculator helps users estimate website development costs based on pages, features, and complexity.
It offers a simple and interactive way to understand pricing for different website types.
Ideal for businesses, freelancers, and agencies to plan budgets accurately.`,

      demo: "https://website-calculator-gold.vercel.app/",
      code: "https://github.com/jada-chandana/website-calculator.git",
      tech: ["html", "css", "tailwind", "js", "react", "nodejs", "mysql"],
      image: Web,
    },
    {
      title: "Dashboard",
     description: `A responsive and interactive dashboard designed to visualize key project metrics and analytics.
It provides clear data insights through charts, tables, and customizable widgets.
Built for efficient monitoring and decision-making across various workflows.`,

      demo: "#",
      code: "#",
      tech: ["html", "css", "js", "react", "nodejs", "mysql"],
      image: Dashboard,
    },
  ];

  // Map tech names to react-icons
  const techIcons = {
    html: <SiHtml5 title="HTML" />,
    css: <SiCss3 title="CSS" />,
    js: <SiJavascript title="JavaScript" />,
    react: <SiReact title="React" />,
    nodejs: <SiNodedotjs title="Node.js" />,
    mysql: <SiMysql title="MySQL" />,

  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Left Image with tech icons below */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="tech-icons">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-icon">
                    {techIcons[tech]}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Description */}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Buttons */}
              <div className="project-buttons">
                /* {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn code-btn"
                  >
                    Github Code
                  </a>
                )} */
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn live-btn"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
