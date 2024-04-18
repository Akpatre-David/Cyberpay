import React, { FC } from "react";
import style from "./button.module.css";

interface ButtonProps {
  text: string;
  type:string
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button className={style.primary} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
