import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function Home() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  const handleDeleteContact = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="home">
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default Home;
