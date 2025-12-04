import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Icons (you can replace with your own images or react-icons)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Skills() {
  const categories = ["Frontend Skills", "Backend Skills", "Database"];
  const [activeCategory, setActiveCategory] = useState("Frontend Skills");

  const skills = [
    { name: "HTML", level: 85, category: "Frontend Skills", icon: <FaHtml5 /> },
    { name: "CSS", level: 80, category: "Frontend Skills", icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 75, category: "Frontend Skills", icon: <FaJs /> },
    { name: "React JS", level: 75, category: "Frontend Skills", icon: <FaReact /> },
    { name: "Node JS", level: 30, category: "Backend Skills", icon: <FaNodeJs /> },
    { name: "MySQL", level: 30, category: "Database", icon: <FaDatabase /> },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          
          {/* Categories */}
          <div className="skills-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="skills-icons">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-icon"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + index * 0.2 }}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Bars */}
        <div className="skills-bars">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 + index * 0.2, ease: "easeOut" }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
