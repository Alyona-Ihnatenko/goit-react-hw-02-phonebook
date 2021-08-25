import react from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import './App.css';

class App extends react.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.sameName(contact)) {
      return;
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  handleRemove = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  sameName = contactName => {
    const { contacts } = this.state;
    contacts.map(contact => {
      if (contact.name === contactName.name) {
        alert(`${contactName.name} is already in contacts`);
      }
      return contact;
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1 className="mainTitle">Phonebook</h1>
        <ContactForm handleSubmit={this.addContact} />
        <h2 className="contactsTitle">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contactList={visibleContacts}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
