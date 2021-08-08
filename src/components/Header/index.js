import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {
  const {
    setCurrentSection,
    currentSection
  } = props;

  return (
    <header>
      <h1>
        <a href="/">Michael Costanza</a>
      </h1>
      <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection}></Navigation>
    </header>
  );
};

export default Header;
