import { FC } from "react";
import clsx from "clsx";
import "./Button.modules.css";

interface IProps {
  children: string;
  variant: "delBtn" | "addBtn";
  type: "button" | "submit";
  onClick?(): void;
}

export const Button: FC<IProps> = ({ children, variant, type }) => {
  return (
    <button type={type} className={clsx(variant)}>
      {children}
    </button>
  );
};
