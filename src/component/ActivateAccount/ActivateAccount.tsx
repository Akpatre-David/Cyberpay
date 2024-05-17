import React from "react";
import style from "./activateAccount.module.css";
import { Card } from "../../customs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiIdentificationCard } from "react-icons/pi";
import Email from "../email/email";
import Button from "../../customs/button/button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Verifiedemail } from "../../assets/verifiedemail.svg";

const activateAccount = () => {
  return (
    <>
      <div className={style.cyberpaylogo}>
        <Logo />
      </div>

      <section className={style.container}>
        <Card>
          <div className={style.logocontainer}>
            <Verifiedemail />
          </div>

          <div className={style.header}>
            <p>Verify email</p>
          </div>

          <div className={style.text}>
            <p>
              Click on the email sent to
              <br />
              <span> akpatredavid17@gmail.com</span>
              <br />
              to verify Email.
            </p>
          </div>

          <div className={style.button}>
            <Button type="submit">{"Resend Link"}</Button>
          </div>
        </Card>
      </section>
    </>
  );
};

export default activateAccount;
