import React from 'react';

import Contact from 'components/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <Contact
          key={id}
          contactId={id}
          name={name}
          phone={phone}
          getContactId={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
