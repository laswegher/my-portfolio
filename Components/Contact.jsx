import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div
      id="contact"
      className="CenterComponent shadow-md dark:shadow-black/40"
    >
      <h3 className="SectionTitle">Contact</h3>
      <ContactForm />
    </div>
  );
};

export default Contact;
