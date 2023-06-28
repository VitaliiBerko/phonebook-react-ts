import { FC } from "react";
import css from "./Button.module.css";

interface IProps {
  children: string;
  variant: "delBtn" | "addBtn";
  type: "button" | "submit";
  onClick?(): void;
}

export const Button: FC<IProps> = ({ children, variant, type }) => {
  return (
    <button type={type} className={css[variant]}>
      {children}
    </button>
  );
};
