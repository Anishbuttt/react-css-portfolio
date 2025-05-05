import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import { useInView } from 'react-intersection-observer';
import './expertises.css'; 

const skills = [
  { name: 'JavaScript', level: 90, description: 'Expert in ECMAScript7 with experience in modern JavaScript.', color: '#4db8ff' },
  { name: 'React', level: 81, description: 'Experienced in building dynamic user interfaces with React.', color: '#ffa726' },
  { name: 'HTML', level: 97, description: 'Expert in crafting semantic and SEO-friendly HTML.', color: '#ff7043' },
  { name: 'CSS', level: 93, description: 'Experienced in creating responsive designs with CSS.', color: '#66bb6a' },
  { name: 'SASS', level: 86, description: 'Skilled in using SASS for writing scalable CSS.', color: '#ab47bc' },
  { name: 'Bootstrap', level: 83, description: 'Experienced in using Bootstrap for rapid UI development.', color: '#26c6da' },
  { name: 'Tailwind CSS', level: 79, description: 'Proficient in using Tailwind CSS for utility-first design.', color: '#ffca28' },
  { name: 'Redux Toolkit', level: 51, description: 'Basic knowledge of state management with Redux Toolkit.', color: '#8d6e63' },
];

const Expertises = () => {
  return (
    <div className="expertises-container">
      {skills.map((skill, index) => (
        <SkillProgress key={index} skill={skill} />
      ))}
    </div>
  );
};

const SkillProgress = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="circular-progress-container" ref={ref}>
      <CircularProgressbar
        value={inView ? skill.level : 0}
        text={`${skill.level}%`}
        styles={buildStyles({
          pathColor: skill.color,
          trailColor: '#d6d6d6',
          strokeLinecap: 'round',
          pathTransitionDuration: 1,
          pathWidth: 10, 
          textSize: '18px',
          textColor: '#333',
        })}
      />
      <div className="skill-name">{skill.name}</div>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
};

export default Expertises;
