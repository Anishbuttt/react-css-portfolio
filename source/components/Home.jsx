
import React from 'react';
import './home.css';
import meImage from '../assets/me.jfif';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Hello, I'm Aneesh Butt</h1>
        <p>Frontend Developer</p>
        <p>Crafting elegant and responsive user interfaces with modern web technologies.</p>
      </div>
      <div className="image-section">
        <img src={meImage} alt="Rizwan Anjum" className="profile-image" />
      </div>
    </div>
  );
}; 

export default Home;