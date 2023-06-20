import { nanoid } from "nanoid";

interface IProps {
    onChangeFilter: (evt: React.ChangeEvent<HTMLInputElement>)=>void;
    value: string;
}

export const Filter: React.FC<IProps> =({onChangeFilter, value })=>{
    const filterInputId = nanoid();
return (
<div
//  className={s.filter}
>
      <label htmlFor={filterInputId} 
    //   className={s.title}
      >Find contacts by name</label>
      <input 
    //   className={s.input} 
      type="text" name="filter" value={value} onChange={onChangeFilter} id={filterInputId} />
    </div>
)
}