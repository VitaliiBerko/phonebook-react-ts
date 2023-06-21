import { IContact } from "../../types/contact"
import { ContactListItem } from "../ContactListItem/ContactListItem";

interface IProps {
    contacts: IContact[];
    onClickDelete: (id: string)=> void;
}

export const ContactList: React.FC<IProps> =({contacts, onClickDelete})=>{
return (
    <ul>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}        
        contact ={contact}
        onClickDelete={onClickDelete}
      />
    ))}
  </ul>
)
}