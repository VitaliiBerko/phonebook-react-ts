import { FC, useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { IContact } from "./types/contact";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

const App: FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(
    () => JSON.parse(window.localStorage.getItem("contacts") || "null") ?? []
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact: Pick<IContact, "name" | "number">) => {
    setContacts([
      { id: nanoid(), name: contact.name.trim(), number: contact.number },
      ...contacts,
    ]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handlerFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value.trim().toLowerCase());
  };

  const findedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChangeFilter={handlerFilter} />
      <ContactList
        contacts={findedContacts}
        onClickDelete={handleDeleteContact}
      />
    </>
  );
};

export default App;
