// ContactUsPage.js
import React from 'react';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-us-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: info@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="email-form">
          <h2>Send Us an Email</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Write your message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
