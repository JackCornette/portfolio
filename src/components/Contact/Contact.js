import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_wfac5jc', 'template_gaoqjnb', formData, 'IkwZD5iDEYXw3tsR9')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again later.');
      });

    setFormData({
      name: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
        <p><strong>Email:</strong> jamescornette1@gmail.com     <strong>Phone:</strong> (254)-760-4483</p>
      <p>Provide feedback, suggest new things to learn, offer a job.... 
        write a joke, whatever you'd like! The message will be sent to me via 
        email using emailjs :)</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required
        />
        <label>Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
