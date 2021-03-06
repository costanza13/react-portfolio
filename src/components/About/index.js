import React from 'react';
import mcc from '../../images/mcc-20200827.jpeg';

function About() {
  return (
    <section className="about-me">
      <div className="section-heading">
        <h2>About&nbsp;Me</h2>
      </div>
      <div>
        <div className="profile-photo"><img src={mcc} alt="Michael Costanza" /></div>
        <p>
          I'm a full stack web application developer with a backround in Physics and Electrical Engineering. I grew up and
          went to college on the east coast, but currently reside in the San Franciso Bay Area with my family. I have
          experience with a variety of web-related technologies, including JavaScript, PHP, Perl, JSP, Java, MySQL, HTML5
          and CSS3, and I've worked with several common software engineering tools, including GitHub/Git, Subversion, CVS,
          Bugzilla, VS Code, Coda, Intellij IDEA, and more. I got my first taste of real software development in college,
          writing programs to process data and simulate systems, first in BASIC, then Pascal and later in C &ndash; even
          using assembly language to create instruction sets for custom-designed systems. I'm a problem solver, and like
          digging in on software challenges as well as figuring out how to best addess the needs of my business partners
          and team members.
        </p>
        <p>
          Outside of work, I enjoy coaching my kids' baseball and soccer teams, tutoring middle and high school students
          in math and science, participating in Tough Mudder obstacle courses and having fun with my family and my two
          mini-dachshunds, Vienna (Sausage) and Pepper(oni).
        </p>
      </div>
    </section>
  )
};

export default About;