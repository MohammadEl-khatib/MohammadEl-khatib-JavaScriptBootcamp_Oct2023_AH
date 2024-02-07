import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    isFavorite: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(contact);
    setContact({ firstName: '', lastName: '', phoneNumber: '', isFavorite: false });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={contact.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={contact.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="phoneNumber"
        type="tel"
        placeholder="Phone Number"
        value={contact.phoneNumber}
        onChange={handleChange}
        required
      />
      <label>
        Favorite:
        <input
          name="isFavorite"
          type="checkbox"
          checked={contact.isFavorite}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
