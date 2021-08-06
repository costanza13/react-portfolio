import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  let mainContent;
  switch (currentSection) {
    case 'portfolio':
      mainContent = <Portfolio></Portfolio>;
      break;
    case 'contact':
      mainContent = <ContactForm></ContactForm>;
      break;
    case 'resume':
      mainContent = <Resume></Resume>;
      break;
    case 'about':
    default:
      mainContent = <About></About>;
      break;
  }
  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}>
      </Header>
      <main>
        {mainContent}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
