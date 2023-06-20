import { IContact } from "../../types/contact";

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
    <li
    // className={s.item}
    >
      {name} : {number}
      <button
        //   className={s.btnDelete}
        type="button"
        onClick={() => onClickDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
