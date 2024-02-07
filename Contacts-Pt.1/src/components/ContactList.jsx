import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} onDelete={() => onDeleteContact(index)} />
      ))}
    </div>
  );
}

export default ContactList;
