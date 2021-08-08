import React from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import skills from '../../data/skills';
// import resumePdf from `$;


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
          <Document file={process.env.PUBLIC_URL + '/assets/MichaelCCostanza.pdf'}>
            <Page
              key="page-1"
              pageNumber={1}
            />
            <Page
              key="page-2"
              pageNumber={2}
            />
          </Document>
        </div>
        <p className="links"><a href="https://drive.google.com/file/d/0BzTWWfPUrM0xNFEzTTZVaXZ2NlU/view?usp=sharing&amp;resourcekey=0-UMYEdQOHQLm2zakmhOexDA" target="_blank" rel="noreferrer">View/download my resumé here. <i className="fas fa-file-download"></i></a></p>
      </div>
    </section>
  )
};

export default Resume;