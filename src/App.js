import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const anchor = document.location.href.split('#')[1];
  const startSection = anchor ? anchor : 'about';
  const [currentSection, setCurrentSection] = useState(startSection);

  let section;
  switch (currentSection) {
    case 'portfolio':
      section = <Portfolio></Portfolio>;
      break;
    case 'contact':
      section = <ContactForm></ContactForm>;
      break;
    case 'resume':
      section = <Resume></Resume>;
      break;
    case 'about':
    default:
      section = <About></About>;
      break;
  }

  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}>
      </Header>
      <main>
        {section}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
