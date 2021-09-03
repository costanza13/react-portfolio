import React from 'react';
import skills from '../../data/skills';
import './Resume.css';

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
          <embed title={`Michael C Costanza's Resumé`} src="/react-portfolio/assets/MichaelCCostanza.pdf#toolbar=0&amp;statusbar=0&amp;navpanes=0" type="application/pdf" width="100%" height="100%" />
        </div>
        <p className="links"><a href="/react-portfolio/assets/MichaelCCostanza.pdf" target="_blank" rel="noreferrer">Click here to view/download a PDF of my resumé. <i className="fas fa-file-download"></i></a></p>
      </div>
    </section>
  )
};

export default Resume;