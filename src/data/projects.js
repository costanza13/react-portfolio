export const projects = [
  {
    name: 'Techdirt',
    url: 'https://www.techdirt.com',
    github: '',
    blurb: 'A blog about innovation, economics, policy and rights in the digital age.',
    description: 'Techdirt is an online publication that serves approximately 500,000 unique visitors each month. In addition to being a publishing platform and content management system, the site offers community engagement features such as commenting, comment rating, and story submissions, which are available to all visitors. Users can also register to enable additional features, and purchase membership subscriptions to access premium perks like early access to unpublished posts and a chat that connects them directly to the staff and other subscibers. Most features are built leveraging technologies like vanilla JavaScript, jQuery, and REST APIs, with a PHP/MySQL back end. As Techdirt\'s primary (and often sole) software developer, I have been responsible for building and maintaining nearly all of the pieces of the custom platform on which Techdirt runs.',
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
    description: 'Cool California was created to help California adventurers discover incredible places in California. The current version of the application is intended to serve as the basis for a social network to let people with similar interests share descriptions, tips & tricks, and useful information about the places they love. The app provides like/dislike functionality, tagging (of both places and the users themselves), and filters to help users zero in on destinations they may enjoy visiting. I was able to apply my prior experience with MySQL to structure the database, and used Express to handle and route requests made to the server. The app leverages the MVC pattern, using Handlebars for the views, and Sequelize (ORM) for the models.',
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
    blurb: 'An app to help baseball fans choose an upcoming MLB game to attend',
    description: 'An app to help baseball fans decide whether to buy a ticket for an upcoming game. The app fetches and displays MLB team home game schedules from the MLB Stats API and corresponding weather information from OpenWeather\'s One Call API. This app was built with vanilla JavaScript, leveraging the MaterializeCSS framework and Flexbox for the layout and structure. The app consumes data from two JSON REST APIs and utilized Day.js to manage date values.',
    technologies: [
      'MaterializeCSS',
      'Day.js',
      'JSON REST APIs'
    ]
  },
  {
    name: 'Budget Tracker',
    url: 'https://budget-tracker-12hundred.herokuapp.com/',
    github: 'https://github.com/costanza13/budget-tracker/',
    blurb: 'Track your cash flow - on the go!',
    description: 'Budget Tracker was designed with the world traveler in mind, allowing them to keep track of debits and credits while on the go. The app uses IndexedDB and local storage to permit its continued use, even when the connection to the internet is unreliable. Budget Tracker is implemented as a progressive web application and can be installed onto the user\'s mobile device. It uses Node,Express, Mongoose and MongoDB on the server side, as well as Chart.js on the client side to visualize the budget data',
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
    github: 'https://github.com/costanza13/work-day-scheduler/',
    blurb: 'Plan your day, the jQuery Way!',
    description: 'Work Day Scheduler is a simple web application for keeping track of the day\'s tasks. It was built primarily to demonstrate the handiness of jQuery and Bootstrap CSS to quickly prototype a useful app. The app takes advantage of the browser\'s local storage to persist schedule data across visits. Day.js is used to format dates and times, and JavaScript\'s setInterval() function is used to update the status throughout the day.',
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
    blurb: 'The Express-way to note-taking.',
    description: 'Note Taker is an application built to demonstrate the use of Express routes to power a basic API. In addition to Express, the app uses Bootstrap as its CSS framework.',
    technologies: [
      'Node',
      'Express'
    ]
  },
];