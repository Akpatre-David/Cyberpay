import React, { FC, PropsWithChildren, ReactNode } from "react";
import style from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
  type: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={style.primary} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
