import styles from './contacts.module.css';
import { Component } from 'react';
import Container from './Container.jsx';
import { nanoid } from 'nanoid';

class Contacts extends Component {
  randomId = nanoid();
  getFilteredContacts = () => {
    const { contacts, filter } = this.props;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  render() {
    const { filter, handleChange, handleDelete } = this.props;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container  classTitle={styles.contacts} sectionTitle="Contacts">
        <label htmlFor={this.randomId}>
          Search
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder="Search by name"
            id={this.randomId}
          />
        </label>
        <ul className={styles.listNumbers}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.listNumber}>
              {name}: {number} <button className={styles.buttonDelete} onClick={() => handleDelete(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Contacts;
