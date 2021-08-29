import React from 'react';

const Project = ({ details: p, setSpotlightProject }) => {
  React.useEffect(() => {
    const handleClick = (e) => {
      // check if the click was inside the project spotlight
      const bubble = e.target.closest('.project-spotlight');
      if (!bubble) {
        setSpotlightProject(null);
      }
    }
    window.addEventListener('click', handleClick);

    // cleanup this component
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [setSpotlightProject]);

  const githubLink = p.github ? <a href={p.github}
    title={`${p.name}: ${p.blurb}`}
    rel="noreferrer" target="_blank"> GitHub Repo <i className="fas fa-external-link-alt"></i></a> : '';

  return (
    <div className="project-spotlight">
      <div className="close-modal"><i className="far fa-times-circle fa-2x" onClick={() => setSpotlightProject(null)}></i></div>
      <a href={p.url}
        title={p.blurb}
        rel="noreferrer" target="_blank">
        <div className={`screenshot project${p.idx} lg`}></div>
      </a>
      <div className="project-info">
        <h2>{p.name}</h2>
        <h3>{p.technologies.join(' / ')}</h3>
        <p>{p.description}</p>
        <ul className="links">
          <li>
            <a href={p.url}
              title={`${p.name}: ${p.blurb}`}
              rel="noreferrer" target="_blank">{p.name + ' '}<i className="fas fa-external-link-alt"></i></a>
          </li>
          {githubLink ?
            (<li>
              {githubLink}
            </li>) : ''}
        </ul>

      </div>
    </div>
  );
}

export default Project;