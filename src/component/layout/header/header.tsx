import React from "react";
import styles from "./header.module.css";
import { ReactComponent as Notification } from "../../../assets/notification.svg";
import { ReactComponent as Avatar } from "../../../assets/avatar.svg";

const Header = () => {
  return (
    <section className={styles.container}>
      <div>
        <p>CyberPay Marchant/Get Started/ Create Account/</p>
      </div>

      <div>
        <Notification />
        <Avatar />
      </div>
    </section>
  );
};

export default Header;
