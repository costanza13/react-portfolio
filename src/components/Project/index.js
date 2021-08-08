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

  return (
    <div className={`project project${p.idx}`}>
      <div className="screenshot" onClick={handleProjectClick}>
        <div className="expand-modal">
          <div className="expand-button">Expand <i className="far fa-plus-square"></i></div>
        </div>
      </div>
      <div className="project-label">
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