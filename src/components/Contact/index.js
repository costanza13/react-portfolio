import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  let { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({ name: '', email: '', message: '' });
    e.target.reset();
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
            <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label><br />
            <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label><br />
            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            {errorMessage && (
              <p className="error-text">{errorMessage}</p>
            )}
          </div>
          <button type="submit" data-testid="contact-submit">Submit</button>
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