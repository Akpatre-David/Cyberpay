import React from "react";
import { Card } from "../../customs";
import { FaEnvelopeOpen } from "react-icons/fa";
import style from "./email.module.css";
import Button from "../../customs/button/button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Letter } from "../../assets/letter.svg";

const email = () => {
  return (
    <>
      <div className={style.cyberPayLogo}>
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

            <div>
              <Button variant="solid" type="submit">
                Resend email
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default email;
