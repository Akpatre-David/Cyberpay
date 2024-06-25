import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import Button from "../../../customs/button/button";

const navBar = () => {
  return (
    <section className={styles.container}>
      <Link to="/">DashBoard</Link>
      <Link to="/">Transaction</Link>
      <Link to="/">Sub Account</Link>
      <Link to="/">Digital Wallet</Link>
      <Link to="/">Payment Link</Link>
      <Link to="/">Payouts</Link>
      <Link to="/">Mandates</Link>
      <Link to="/">Profiles</Link>
      <Link to="/">Swi  tch Biz</Link>
      <Link to="/">Settings</Link>
    </section>
  );
};

export default navBar;
