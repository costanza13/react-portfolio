import React from 'react';
import Project from '../Project';

function Portfolio() {
  const projectData = [
    {
      name: 'Techdirt',
      url: 'https://www.techdirt.com',
      github: '',
      blurb: 'A blog about innovation, economics, policy and rights in the digital age.',
      technologies: [
        'LAMP Stack',
        'jQuery',
        'Responsive CSS'
      ]
    },
    {
      name: 'Cool California',
      url: 'https://cool-california.herokuapp.com/',
      github: 'https://github.com/costanza13/cool-california',
      blurb: 'A social network for California Adventurers',
      technologies: [
        'Express',
        'Sequelize',
        'Handlebars'
      ]
    },
    {
      name: 'Should I Go?',
      url: 'https://costanza13.github.io/should-i-go/',
      github: 'https://github.com/costanza13/should-i-go',
      blurb: 'An app to help baseball fans choose an upcoming game to attend',
      technologies: [
        'MaterializeCSS',
        'Day.js',
        'JSON REST APIs'
      ]
    },
    {
      name: 'Budget Tracker',
      url: 'https://costanza13.github.io/work-day-scheduler/',
      github: 'https://costanza13.github.io/budget-tracker/',
      blurb: 'Track your cash flow - on the go!',
      technologies: [
        'Express',
        'MongoDB',
        'IndexedDB',
        'PWA'
      ]
    },
    {
      name: 'Work Day Scheduler',
      url: 'https://costanza13.github.io/work-day-scheduler/',
      github: 'https://costanza13.github.io/work-day-scheduler/',
      blurb: 'Plan your day, the jQuery Way!',
      technologies: [
        'JavaScript',
        'jQuery',
        'Bootstrap'
      ]
    },
    {
      name: 'Note Taker',
      url: 'https://note-taker-12hundred.herokuapp.com/',
      github: 'https://github.com/costanza13/note-taker',
      blurb: 'The Express way to note-taking.',
      technologies: [
        'Node',
        'Express'
      ]
    },
  ];

  return (
    <section id="work">
      <h2 className="section-heading">Work</h2>
      <div id="projects" className='section-content'>
        {projectData.map((object, i) => <Project details={{ idx: i + 1, ...object }} key={i} />)}
      </div>
    </section>
  )
};

export default Portfolio;