import React, { useState } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { IContact } from "../../types/contact";
import { Form } from "./ContactForm.styled";
import { Button } from "../Button/Button";

interface IProps {
  onAddContact: (data: Pick<IContact, "name" | "number">) => void;
  contacts: IContact[];
}

Notiflix.Notify.init({
  position: "center-top",
});

export const ContactForm: React.FC<IProps> = ({ onAddContact, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = (): void => {
    setName("");
    setNumber("");
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (contacts.find((contact) => contact.name === name)) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      setName("");
      return;
    }

    onAddContact({ name, number });
    resetForm();
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <label htmlFor={nameInputId}>Name:</label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={numberInputId}>Number:</label>
      <input
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <Button type="button" variant="addBtn">
        Add contact
      </Button>
    </Form>
  );
};
