import React, { useState, useEffect } from 'react';
import ContactTable from './ContactTable';
import styles from './contacts.module.css';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const saveContact = () => {
    if (name.trim() === '' || username.trim() === '' || phone.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    const newContact = {
      id: contacts.length + 1,
      name,
      username,
      phone
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setUserName('');
    setPhone('');
    setShowForm(false);
  };


  return (
    <div>
      <h2 className={styles.title}>User contacts</h2>
      <ContactTable
        contacts={contacts}
        deleteContact={deleteContact}
        showForm={showForm}
        setShowForm={setShowForm}
        name={name}
        setName={setName}
        username={username}
        setUserName={setUserName}
        phone={phone}
        setPhone={setPhone}
        saveContact={saveContact}
      />
    </div>
  );
}