import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./HelpButton.module.css";



interface helpButtonProps extends PropsWithChildren {
    children: ReactNode;
    onClick?: () => void;
}

const HelpButton: FC<helpButtonProps> = ({ children }) => {
  return <button className={styles.HelpButton}>{children}</button>;
};

export default HelpButton;
