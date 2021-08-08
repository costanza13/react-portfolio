import React from 'react';
import skills from '../../data/skills';
import resume1 from '../../images/mcc-resume-p1.png';
import resume2 from '../../images/mcc-resume-p2.png';

function Resume() {
  const frontEndItems = skills.frontEnd.map((skill, i) => {
    return <li key={i}>{skill}</li>
  });

  const backEndItems = skills.backEnd.map((skill, i) => {
    return <li key={i}>{skill}</li>
  });

  return (
    <section className="resume">
      <div className="section-heading">
        <h2>Resumé</h2>
      </div>
      <div id="skills" className='section-content'>
        <div className="skills-list">
          <h3>Front-End Skills</h3>
          <ul>
            {frontEndItems}
          </ul>
        </div>
        <div className="skills-list">
          <h3>Back-End Skills</h3>
          <ul>
            {backEndItems}
          </ul>
        </div>
        <div className="resume-wrap">
          <img src={resume1} alt="resume page 1" />
          <img src={resume2} alt="resume page 2" />
        </div>
        <p className="links"><a href="https://drive.google.com/file/d/0BzTWWfPUrM0xNFEzTTZVaXZ2NlU/view?usp=sharing&amp;resourcekey=0-UMYEdQOHQLm2zakmhOexDA" target="_blank" rel="noreferrer">Click here to view/download a PDF of my resumé. <i className="fas fa-file-download"></i></a></p>
      </div>
    </section>
  )
};

export default Resume;