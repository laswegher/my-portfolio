import React, { useState } from 'react';
import Button from './Button';
import SocialIcons from './SocialIcons';

const Form = () => {
  const [formData, setFormData] = useState({} || initialForm);

  //Initial Form Data
  const initialForm = {
    userName: '',
    companyName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  };

  //Handeling OnChange Event
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //Handeling onSubmit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialForm);
  };

  return (
    <div className="w-[95%] max-w-[600px] mx-auto shadow-xl p-5 dark:shadow-black/60 rounded-xl">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-3 "
      >
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            className="flex-1 border p-3 bg-transparent rounded-md"
            type="text"
            name="username"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            className="flex-1 border p-3 bg-transparent rounded-md"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
        </div>
        <input
          className="border p-3 bg-transparent rounded-md"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          className="border p-3 bg-transparent rounded-md"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="border p-3 bg-transparent rounded-md"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          className="border p-3 bg-transparent resize-none rounded-md"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          cols="20"
          rows="5"
        ></textarea>
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default Form;
