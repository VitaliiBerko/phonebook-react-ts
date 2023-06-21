import { nanoid } from "nanoid";
import { FilterStyled } from "./Filter.styled";

interface IProps {
  onChangeFilter: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Filter: React.FC<IProps> = ({ onChangeFilter, value }) => {
  const filterInputId = nanoid();
  return (
    <FilterStyled>
      <label
        htmlFor={filterInputId}
        //   className={s.title}
      >
        Find contacts by name:
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </FilterStyled>
  );
};
