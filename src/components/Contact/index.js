import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  let { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleKeyUp = (e) => {
    if (e.target.name === 'email') {
      if (validateEmail(e.target.value)) {
        setErrorMessage('');
      }
    } else if (e.target.value.length) {
      setErrorMessage('');
    }
  }

  function handleChange(e) {
    if (e.target.name === 'email' && e.target.value.length) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    if (validateEmail(formState.email) && formState.name.length && formState.message.length) {
      emailjs.sendForm('service_6e222ss', 'template_i9srjpv', e.target, 'user_ISdsVNn0uWxvdh90GMxtZ')
        .then((result) => {
          console.log(result.text);
          setSuccessMessage('Thank you! Your message was sent.');
          setTimeout(() => setSuccessMessage(''), 5000);
        }, (error) => {
          console.log(error.text);
        });

      setFormState({ name: '', email: '', message: '' });
      e.target.reset();
    } else {
      setErrorMessage(`Name, Message and valid Email address are required.`);
    }
  };

  return (
    <section className="contact">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>
      <div className="form-wrap">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label><br />
            <input type="text" defaultValue={name} onChange={handleChange} onKeyUp={handleKeyUp} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label><br />
            <input type="email" defaultValue={email} onChange={handleChange} onKeyUp={handleKeyUp} name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label><br />
            <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
          </div>
          <button type="submit" data-testid="contact-submit">Submit</button>
          <p className='message'>
            {(errorMessage && (
              <span className="error-text">{errorMessage}</span>
            )) || (successMessage && (
              <span className="success-text">{successMessage}</span>
            )) || <span>&nbsp;</span>}
          </p>
        </form>
        <ul className="links">
          <li>
            Phone: <a href="tel:646-770-2622">646-770-2622</a>
          </li>
          <li>
            Email: <a href="mailto:costanza@gmail.com">costanza@gmail.com</a>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default ContactForm;