import React from "react";
import style from "./activatesuccess.module.css";
import { Card } from "../../customs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Button from "../../customs/button/button";
import { useNavigate } from "react-router-dom";

const ActivateSuccess = () => {
  const Navigate = useNavigate();

  return (
    <section className={style.container}>
      <Card>
        <div className={style.logocontainer}>
          <RiVerifiedBadgeFill size={28} className={style.verified} />
        </div>
        
        <div>
          <p>Email verified</p>
          <p>
            Your email is verifed <br />
            successfully click below to login
          </p>
        </div>

        <div className={style.button}>
          <Button
            text="Login"
            type="submit"
            onClick={() => Navigate("/sign-in")}
          />
        </div>
      </Card>
    </section>
  );
};

export default ActivateSuccess;
