import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import chandu from "../assets/chandu.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* Text Section */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
        
          <h2>
            I'm <span className="highlight">chandana!</span>
          </h2>
          <h3 className="role">Frontend Developer</h3>
          
          <p className="summary">
            I am a Frontend Developer specializing in creating responsive, modern,
            and user-friendly web applications.<br />
            With expertise in HTML, CSS, JavaScript, and React, and basic knowledge
            of Node.js, MySQL, and REST APIs, I focus on building clean,
            maintainable code and seamless user experiences.<br />
            I am passionate about translating design concepts into functional and
            visually appealing interfaces.
          </p>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="radial-border"></div>

          <motion.img
            src={chandu}
            alt="chandu"
            className="hero-image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
