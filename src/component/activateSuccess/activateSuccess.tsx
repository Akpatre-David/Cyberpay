import React from "react";
import style from "./activateSuccess.module.css";
import { Card } from "../../customs";
import Button from "../../customs/button/button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {ReactComponent as ActivationLogo} from "../../assets/ActivationLogo.svg"
import { useNavigate } from "react-router-dom";

const ActivateSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.cyberPayLogo}>
        <Logo />
      </div>
      <section className={style.container}>
        <Card>
          <div className={style.logoContainer}>
            <ActivationLogo />
          </div>

          <div>
            <p>Email verified</p>
            <p>
              Your email is verified <br />
              successfully. Click below to login
            </p>
          </div>

          <div className={style.button}>
            <Button onClick={() => navigate("/Log-in")} type="submit">
              {"Login"}
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
};

export default ActivateSuccess;
