import React, { Children, FC, ReactNode } from "react";
import style from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
    return <div className={style.card}>{children}</div>;
};

export default Card;
