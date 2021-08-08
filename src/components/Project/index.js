import React from 'react';

const Project = ({ details: p, setSpotlightProject }) => {
  let spotlightEnabled = true;
  const handleProjectClick = () => {
    spotlightEnabled && setSpotlightProject(p);
  }

  const disableSpotlight = () => {
    spotlightEnabled = false;
  }

  const enableSpotlight = () => {
    spotlightEnabled = true;
  }

  const githubLink = p.github ? <a href={p.github}
    title={`View the ${p.name} GitHub repository`}
    rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a> : '';

  return (
    <div className={`project project${p.idx}`}>
      <div className="screenshot">
        <div className="expand-modal">
          <div className="expand-button" onClick={handleProjectClick}><i className="fas fa-info-circle fa-3x"></i><br />More Info</div>
        </div>
      </div>
      <div className="project-label">
        <div class="project-links">
          <a href={p.url}
            title={`Visit ${p.name}`}
            rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt"></i></a>
          {githubLink}
        </div>
        <h3><a href={p.url}
          title={p.blurb}
          onMouseEnter={disableSpotlight}
          onMouseOut={enableSpotlight}
          rel="noreferrer" target="_blank">{p.name}</a></h3>
        <p>{p.technologies.join(' / ')}</p>
      </div>
    </div>
  );
}

export default Project;