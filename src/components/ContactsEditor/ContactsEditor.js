import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import './ContactsEditor.css';

class ContactsEditor extends Component {
  state = {
    text: '',
    tel: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleTelChange = e => {
    this.setState({
      tel: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.text, this.state.tel);

    this.setState({ text: '', tel: '' });
  };

  render() {
    return (
      <form className="TaskEditor" onSubmit={this.handleSubmit}>
        <label className="TaskEditor-label">
          Name
          <input
            className="TaskEditor-input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <label className="TaskEditor-label">
          Tel
          <input
            className="TaskEditor-input"
            type="tel"
            value={this.state.tel}
            onChange={this.handleTelChange}
          />
        </label>

        <button type="submit" className="TaskEditor-button">
          Добавить контакт
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactsEditor);
