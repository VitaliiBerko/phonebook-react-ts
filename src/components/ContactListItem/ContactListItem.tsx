import { IContact } from "../../types/contact";
import { Button } from "../Button/Button";
import { Item } from "./ContactListItem.styled";

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
      <Button variant="delBtn" type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};
