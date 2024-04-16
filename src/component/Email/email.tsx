import React from "react";
import { Card } from "../../customs";
import { FaEnvelopeOpen } from "react-icons/fa";
import style from "./email.module.css";
import Button from "../../customs/button/button";

const Email = () => {
  return (
    <section className={style.container}>
      <Card>
        <div>
          <div className={style.envelop}>
            <FaEnvelopeOpen size={28} className={style.envo} />
          </div>

          <div>
            <p className={style.check}>check your email</p>

            <p className={style.text}>
              Click on the link sent to your email <br />
              and reset password
            </p>

            <div className={style.button}>
              <Button text="Resend Mail" onClick={() => {}} />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Email;
