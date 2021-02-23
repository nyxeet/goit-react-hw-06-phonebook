import React from 'react';
import Layout from './Layout/Layout';
import ContactsEditor from './ContactsEditor';
import ContactsList from './ContactsList';
import Filter from './Filter';

const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsEditor />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Layout>
  );
};

export default App;
