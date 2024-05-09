import React from "react";
import { Card } from "../../customs";
import { FaEnvelopeOpen } from "react-icons/fa";
import style from "./email.module.css";
import Button from "../../customs/button/button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Letter } from "../../assets/letter.svg";

const Email = () => {
  return (
    <>
      <div className={style.cyberpaylogo}>
        <Logo />
      </div>

      <section className={style.container}>
        <Card>
          <div className={style.envelop}>
            <Letter />
          </div>

          <div>
            <p className={style.check}>Check your email</p>

            <p className={style.text}>
              Click on the link sent to your email <br />
              and reset password
            </p>

            <div className={style.button}>
              <Button text="Resend email" type="submit" onClick={() => {}} />
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Email;
