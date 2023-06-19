

import { FC, useEffect, useState } from 'react';
import './App.css'
import { nanoid } from 'nanoid';
import { IContact } from './types/contact';

const App: FC =()=> {
  const [contacts, setContacts] = useState<IContact[]>(
    () => JSON.parse(window.localStorage.getItem('contacts') || "null") ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact: IContact) => {
    setContacts([{ id: nanoid(), name: contact.name.trim(), number: contact.number}, ...contacts]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handlerFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value.trim().toLowerCase());
  };

  const findedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <h1 className={s.container}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} addContact={contacts} />

      <h2 className={s.container}>Contacts</h2>
      <Filter value={filter} onChange={handlerFilter} />
      <ContactList contacts={findedContacts} onClick={handleDeleteContact} />
    </>
  );
}

export default App
