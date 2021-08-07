import React from 'react';

const Navigation = (props) => {
  const {
    setCurrentSection,
    currentSection
  } = props;

  return (
    <nav>
      <ul>
        <li className={`${currentSection === 'about' ? 'selected' : ''}`}><a href="#about" onClick={() => setCurrentSection('about')}>About Me</a></li>
        <li className={`${currentSection === 'portfolio' ? 'selected' : ''}`}><a href="#portfolio" onClick={() => setCurrentSection('portfolio')}>Portfolio</a></li>
        <li className={`${currentSection === 'contact' ? 'selected' : ''}`}><a href="#contact" onClick={() => setCurrentSection('contact')}>Contact Me</a></li>
        <li className={`${currentSection === 'resume' ? 'selected' : ''}`}><a href="#resume" onClick={() => setCurrentSection('resume')}>Resumé</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
