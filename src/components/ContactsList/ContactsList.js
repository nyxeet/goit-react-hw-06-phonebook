import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import './ContactsList.css';

const TaskList = ({ contacts, onRemove }) => (
  <ul className="TaskList">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onRemove(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ state: { contacts, filter } }) => ({
  contacts: filterContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
