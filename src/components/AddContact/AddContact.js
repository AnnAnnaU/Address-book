import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddContact.css';

export const AddContact = ({ addContact, initialFormState }) => {
  const [contact, setContact] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmita = (event) => {
    event.preventDefault()
    if (!contact.name || !contact.surname || !contact.phone || !contact.email || !contact.address) {
      return;
    }
    addContact(contact);
    setContact(initialFormState);
  }

  return (
    <form
      className="air"
      onSubmit={handleSubmita}>
      <div className="form-inner">
        <div className="form-row">
          <label>First name</label>
          <input
            required
            minLength="2"
            maxLength="20"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Last name</label>
          <input
            required
            minLength="2"
            maxLength="20"
            type="text"
            name="surname"
            value={contact.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input
            required
            minLength="10"
            maxLength="20"
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Address</label>
          <input
            required
            minLength="2"
            maxLength="100"
            type="text"
            name="address"
            value={contact.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="add-button">
        <button>Add new contact</button>
      </div>
    </form>
  )
}

AddContact.propTypes = {
  initialFormState: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  addContact: PropTypes.func.isRequired,
}