import React, { FC, PropsWithChildren, } from "react";
import style from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
  type: string;
  onClick?: () => void;
  variant?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, variant, type }) => {
  const variantList = ["linear", "outline", "solid"];

  let buttonStyle;

  switch (true) {
    case variant === variantList[0]:
      buttonStyle = style.linear;
      break;
    case variant === variantList[1]:
      buttonStyle = style.outline;
      break;
    default:
      buttonStyle = style.solid;
      break;
  }

  return (
    <button className={buttonStyle} onClick={onClick}> 
      {children}
    </button>
  );
};

export default Button;
