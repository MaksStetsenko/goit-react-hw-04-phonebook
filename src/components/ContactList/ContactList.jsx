import React from 'react';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func
};
