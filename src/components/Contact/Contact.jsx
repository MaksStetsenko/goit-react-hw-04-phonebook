import React from 'react';
import PropTypes from 'prop-types';

import { MdDelete } from 'react-icons/md';

import { Box } from 'components/Box';

import { ContactButtonStyled } from './Contact.styled';

const Contact = ({ contactId, name, phone, getContactId }) => {
  const handelClick = () => {
    getContactId(contactId);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {name}: {phone}
      <ContactButtonStyled type="button" onClick={handelClick}>
        <MdDelete size="30" />
      </ContactButtonStyled>
    </Box>
  );
};

export default Contact;

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  getContactId: PropTypes.func.isRequired,
}