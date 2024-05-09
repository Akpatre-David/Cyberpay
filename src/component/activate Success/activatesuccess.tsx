import React from "react";
import style from "./activatesuccess.module.css";
import { Card } from "../../customs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Button from "../../customs/button/button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import {ReactComponent as ActivationSuccess} from "../../assets/activatonsuccess.svg"

const ActivateSuccess = () => {
  const Navigate = useNavigate();

  return (
    <>
      
      <div className={style.cyberpaylogo}>
< Logo/>

      </div>
      <section className={style.container}>
        <Card>
          <div className={style.logocontainer}>
            <ActivationSuccess />
          </div>

          <div>
            <p>Email verified</p>
            <p>
              Your email is verified <br />
              successfully. Click below to login
            </p>
          </div>

          <div className={style.button}>
            <Button
              text="Login"
              type="submit"
              onClick={() => Navigate("/Log-in")}
            />
          </div>
        </Card>
      </section>
    </>
  );
};

export default ActivateSuccess;
