import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function ContactCard({ contact, onDelete }) {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.phoneNumber}</p>
      </div>
      <div className="contact-actions">
        <FontAwesomeIcon icon={contact.isFavorite ? solidHeart : regularHeart} className="icon favorite" />
        <FontAwesomeIcon icon={faTrashAlt} className="icon delete" onClick={onDelete} />
      </div>
    </div>
  );
}

export default ContactCard;
