import React from 'react';

const Project = ({ details : p, setSpotlightProject }) => {
  const handleProjectClick = () => {
    setSpotlightProject(p);
  }
  
  return (
    <div className={`project project${p.idx}`} onClick={handleProjectClick}>
      <div className="expand-modal">Expand <i className="far fa-plus-square"></i></div>
      <div className="project-label">
        <h3><a href={p.url}
          title={p.blurb}
          rel="noreferrer" target="_blank">{p.name}</a></h3>
        <p>{p.technologies.join(' / ')}</p>
      </div>
    </div>
  );
}

export default Project;