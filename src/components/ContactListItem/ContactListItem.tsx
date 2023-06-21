import { IContact } from "../../types/contact";
import { ButtonDel, Item } from "./ContactListItem.styled";

interface IProps {
  contact: IContact;
  onClickDelete: (id: string) => void;
}
export const ContactListItem: React.FC<IProps> = ({
  contact,
  onClickDelete,
}) => {
  const { id, name, number } = contact;
  return (
    <Item>
      {name} : {number}
      <ButtonDel type="button" onClick={() => onClickDelete(id)}>
        Delete
      </ButtonDel>
    </Item>
  );
};
