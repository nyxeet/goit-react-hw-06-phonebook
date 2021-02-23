import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts-actions';

const Filter = ({ value, changeFilter }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={changeFilter} />
  </label>
);

const mapStateToProps = state => ({
  value: state.filter,
});
const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
