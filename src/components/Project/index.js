import React from 'react';

const Project = ({ details : p }) => {
  return (
    <div id={`project${p.idx}`} className="project">
      <div className="screenshot">
        <ul className="links">
          <li><a href={p.url}
            title={`${p.name}: ${p.blurb}`}
            rel="noreferrer" target="_blank">Web <sup><i className="fas fa-external-link-alt"></i></sup></a></li>
        </ul>
      </div>
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