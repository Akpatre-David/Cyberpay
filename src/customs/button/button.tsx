import React, { FC } from "react";
import style from "./button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={style.primary} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
