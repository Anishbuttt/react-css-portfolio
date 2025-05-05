import React from "react";
import "./education.css";
import itImage from "../assets/itu2.jpg";
import pgcImage from "../assets/pgc.jpg";

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-card">
          <img
            src={itImage}
            alt="University of Engineering and Technology"
            className="education-image"
          />
          <div className="education-details">
            <h3 className="institution-name">
              <a href="https://www.uet.edu.pk/home/" target="_blank">
                University of Information and Technology (ITU)
              </a>
            </h3>
            <p className="degree">Bachelor of Science in Computer Science</p>
            <p className="education-duration">2023 - 2027(Expected)</p>
          </div>
        </div>
        <div className="education-card">
          <img
            src={pgcImage}
            alt="Punjab Group of Colleges"
            className="education-image"
          />
          <div className="education-details">
            <h3 className="institution-name">
              <a href="https://pgc.edu/" target="_blank">
                Punjab Group of Colleges
              </a>
            </h3>
            <p className="degree">Intermediate in Computer Science </p>
            <p className="education-duration">2021 - 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
