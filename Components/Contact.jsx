import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div
      id="contact"
      className="CenterComponent shadow-md dark:shadow-black/40"
    >
      <h1 className="text-2xl mt-[80px] mb-5 md:text-4xl md:mb-10 border-b-2 border-red-600">
        Contact
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
