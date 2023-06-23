import React, { FC, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { IContact } from "./types/contact";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

const App: FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storedContacts = window.localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }: Pick<IContact, "name" | "number">) => {
    const newContact: IContact = {
      id: nanoid(),
      name: name.trim(),
      number: number
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value.trim().toLowerCase());
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} onClickDelete={handleDeleteContact} />
    </>
  );
};

export default App;
