import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const tabs = ["Introduction", "Frontend", "Backend"];
  const [activeTab, setActiveTab] = useState("Introduction");

  const content = {
    "Introduction": "I am a Frontend Developer specializing in creating responsive, modern, and user-friendly web applications. I focus on building clean, maintainable code and seamless user experiences.",
    "Frontend": "I've been working in front-end development for over 4 months, primarily focusing on building responsive, interactive web applications using modern technologies like React.js, and CSS. I also have experience with HTML5, CSS3, and JavaScript (ES6+).",
    "Backend": "I have basic knowledge in Node.js, MySQL, and REST APIs. I have experience creating server-side logic and connecting front-end applications to databases for dynamic web applications."
  };

  return (
    <section id="about" className="about">
      <div className="container about-wrapper">
        {/* Tabs */}
        <div className="about-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <motion.div
          className="about-content"
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{content[activeTab]}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
