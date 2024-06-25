import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./title.module.css";

interface titleProps extends PropsWithChildren {
  children: ReactNode;
  className?: string
}

const TitleBar: FC<titleProps> = ({ children }) => {
    return(
    <section className={styles.container}>{children}</section>
)};

export default TitleBar;
