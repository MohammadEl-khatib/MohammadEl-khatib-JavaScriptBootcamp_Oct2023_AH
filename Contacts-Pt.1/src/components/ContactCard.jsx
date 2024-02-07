import React from 'react';

function ContactCard({ contact, onDelete, onUpdate }) {
  return (
    <div className="contact-card">
      <div>
        <p>{contact.firstName} {contact.lastName}</p>
        <p>{contact.phoneNumber}</p>
      </div>
      <button onClick={() => onUpdate(contact.id)}>
        {contact.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactCard;
