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
      <div className='row'>
        <div className='col-12'>
          <Header
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}>
          </Header>
        </div>
      </div>
      <div className='row'>
        <main>
          {section}
        </main>
      </div>
      <div className='row'>
        <Footer />
      </div>
    </>
  );
}

export default App;
