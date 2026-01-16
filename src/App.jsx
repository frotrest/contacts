import './App.css';
import { Component } from 'react';
import PhoneBook from './components/Feedback/PhoneBook';
import Contacts from './components/Feedback/Contacts';
import { nanoid } from 'nanoid';
import { number } from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, contacts, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`contact with name: ${name} has already been added`);
      this.setState({ name: '', number: '' });
      return;
    }
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    return (
      <>
        <PhoneBook
          valueName={this.state.name}
          valueNumber={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleChange={this.handleChange}
          handleDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
