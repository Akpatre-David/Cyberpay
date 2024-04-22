import React from "react";
import style from "./ActivateAccount.module.css";
import { Card } from "../../customs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiIdentificationCard } from "react-icons/pi";
import Email from "../Email/email";
import Button from "../../customs/button/button";

const AcctivateAccount = () => {
  return (
    <section className={style.container}>
      <Card>
        <div>
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
        </div>
      </Card>
    </section>
  );
};

export default AcctivateAccount;
