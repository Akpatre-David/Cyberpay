import React from "react";
import style from "./ActivateAccount.module.css";
import { Card } from "../../customs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiIdentificationCard } from "react-icons/pi";
import Email from "../Email/email";
import Button from "../../customs/button/button";
import {ReactComponent as Logo} from "../../assets/logo.svg"

const AcctivateAccount = () => {
  return (
    <>
      

      <div className={style.cyberpaylogo}>
        <Logo />
        </div>
      <section className={style.container}>
        <Card>
          <div className={style.logocontainer}>
            <PiIdentificationCard size={33} className={style.icon} />
          </div>

          <div className={style.header}>
            <p>Verify email</p>
          </div>

          <div className={style.text}>
            <p>
              <p>
                click on the email sent to
                <br />
                {"email"}
                <br />
                to verify Email.
              </p>
            </p>
          </div>

          <div className={style.button}>
            <Button type="submit" text="Resend Link" onClick={() => {}} />
          </div>
        </Card>
      </section>
    </>
  );
};

export default AcctivateAccount;
