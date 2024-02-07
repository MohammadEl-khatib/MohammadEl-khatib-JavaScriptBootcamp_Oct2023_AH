import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function Home() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    setContacts([...contacts, contactWithId]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleUpdateContact = (id) => {
    setContacts(
      contacts.map(contact =>
        contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
      )
    );
  };

  return (
    <div>
      <ContactForm onAdd={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} onUpdate={handleUpdateContact} />
    </div>
  );
}

export default Home;
