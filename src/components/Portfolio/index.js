import React, { useState } from 'react';
import Project from '../Project';
import ProjectSpotlight from '../ProjectSpotlight';
import { projects } from '../../data/projects';

function Portfolio() {
  const [spotlightProject, setSpotlightProject] = useState();

  // show spotlight only if something is selected
  const spotlightModal = spotlightProject ? <ProjectSpotlight details={spotlightProject} setSpotlightProject={setSpotlightProject} /> : '';

  return (
    <section className="portfolio">
      {spotlightModal}
      <div className="section-heading">
        <h2>Portfolio</h2>
      </div>
      <div id="projects" className='section-content'>
        {projects.map((object, i) => <Project details={{ idx: i + 1, ...object }} setSpotlightProject={setSpotlightProject} key={i} />)}
      </div>
    </section>
  )
};

export default Portfolio;