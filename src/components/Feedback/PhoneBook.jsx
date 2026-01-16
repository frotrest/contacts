import styles from './contacts.module.css';
import { Component } from 'react';
import Container from './Container.jsx';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  randomId = nanoid();
  render() {
    const {valueName, valueNumber, handleChange, handleSubmit} = this.props;
    return (
      <Container classTitle={styles.phonebook} sectionTitle="PhoneBook">
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor={this.randomId}>
            Name
            <input
              type="text"
              name="name"
              value={valueName}
              id={this.randomId}
              onChange={handleChange}
              placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.randomId}>
            Number
            <input 
            type="tel" 
            name="number" 
            value={valueNumber}
            onChange={handleChange}
            id={this.randomId}
            placeholder='Please write your real number'
            required />
          </label>
          <button type='submit'>Add Contact</button>
        </form>
      </Container>
    );
  }
}

export default PhoneBook;
