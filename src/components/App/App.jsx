import React, { useState, useEffect } from 'react';

import localStorageAPI from '../../localStorageAPI';
import { message } from '../settings';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

import { AppStyled, AppTitleStyled } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isContactExist = abonentName => {
    return contacts.find(({ name }) => name === abonentName);
  };

  const onSubmit = ({ id, name, phone }) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(contacts => [{ id, name, phone }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const clearFilter = () => {
    setFilter({ filter: '' });
  };

  //=========== component Did Mount ==============================

  useEffect(() => {
    const savedContacts = localStorageAPI.readContacts();

    if (savedContacts) {
      setContacts(savedContacts);
    }
    console.log('mount');
  }, []);

  //=========== component Did Update ==============================

  useEffect(() => {
    localStorageAPI.writeContacts(contacts);
    console.log('update');
  }, [contacts]);

  //=========== messages ===========================================

  const { isEmptyBook, noMatches } = message;

  const filterNormalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalized)
  );

  const isPhonebookEmpty = contacts.length === 0;
  const isFilteredContactsEmpty = filteredContacts.length === 0;

  //=========== render ==============================================

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="l"
      color="primary"
    >
      <AppTitleStyled>My phonebook</AppTitleStyled>

      <AppStyled>
        <Section title="Contacts">
          <ContactForm onSubmit={onSubmit} />
        </Section>

        <Section title="Contacts">
          {isPhonebookEmpty ? (
            <Notification message={isEmptyBook} />
          ) : (
            <>
              <Filter
                filterString={filter}
                onChange={handleChangeFilter}
                clearFilter={clearFilter}
                noContactsFiltred={isFilteredContactsEmpty}
              />

              {isFilteredContactsEmpty ? (
                <Notification message={noMatches} />
              ) : (
                <ContactList
                  contacts={filteredContacts}
                  onDeleteContact={deleteContact}
                />
              )}
            </>
          )}
        </Section>
      </AppStyled>
    </Box>
  );
};
