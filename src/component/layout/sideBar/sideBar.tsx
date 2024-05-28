import React from "react";
import styles from "./sideBar.module.css";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as DashBoard } from "../../../assets/dashboard.svg";
import { ReactComponent as Transaction } from "../../../assets/transaction.svg";
import { ReactComponent as SubAccount } from "../../../assets/subAccount.svg";
import { ReactComponent as DigitalWallet } from "../../../assets/digitalWallet.svg";
import { ReactComponent as Products } from "../../../assets/products.svg";
import { ReactComponent as PaymentLinks } from "../../../assets/paymentLink.svg";
import { ReactComponent as PayOuts } from "../../../assets/payouts.svg";
import { ReactComponent as Mandate } from "../../../assets/mandates.svg";
import { ReactComponent as Profiles } from "../../../assets/profiles.svg";
import { ReactComponent as SwitchBiz } from "../../../assets/switchBiz.svg";
import { ReactComponent as Settings } from "../../../assets/settings.svg";
import SideBarItem from "../sideBarItem/sideBarItem";
import HelpButton from "../../../customs/helpButton/helpButton";
import { ReactComponent as Documentation } from "../../../assets/documentation.svg";

const SideBar = () => {
  return (
    <aside>
      <section className={styles.container}>
        <div className={styles.log}>
          <Logo />
        </div>

        <div className={styles.sideBar}>
          {items.map((item) => (
            <SideBarItem
              key={item.id}
              name={item.name}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
        {/* This is the button section for the documentation and FAQ */}
        <section className={styles.ButtonStyle}>
          <HelpButton>
            <span className={styles.docspan}>
              <Documentation />
            </span>
            <span>
              <p>Documentation</p>
            </span>
          </HelpButton>
          {/* The second button in the sidebar */}
          <HelpButton>
            <span className={styles.docspan}>
              <Documentation />
            </span>
            <span className={styles.textSpan}>
              <p>Help & FAQ</p>
            </span>
          </HelpButton>
        </section>
      </section>
    </aside>
  );
};

export default SideBar;

const items = [
  { id: 1, name: "Dashboard", icon: <DashBoard />, link: "/" },
  { id: 2, name: "Transaction", icon: <Transaction />, link: "/" },
  { id: 3, name: "Sub Account", icon: <SubAccount />, link: "/" },
  { id: 4, name: "Digital Wallet", icon: <DigitalWallet />, link: "/" },
  { id: 5, name: "Products", icon: <Products />, link: "/" },
  { id: 6, name: "Payment Link", icon: <PaymentLinks />, link: "/" },
  { id: 7, name: "Payouts", icon: <PayOuts />, link: "/" },
  { id: 8, name: "Mandates", icon: <Mandate />, link: "/" },
  { id: 9, name: "Profiles", icon: <Profiles />, link: "/" },
  { id: 10, name: "Switch Biz", icon: <SwitchBiz />, link: "/" },
  { id: 11, name: "Settings", icon: <Settings />, link: "/" },
];
