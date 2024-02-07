import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts, onDelete, onUpdate }) {
  return (
    <div>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
          onUpdate={() => onUpdate(contact.id)}
        />
      ))}
    </div>
  );
}

export default ContactList;
