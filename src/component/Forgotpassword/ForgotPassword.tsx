import React from "react";
import style from "./ForgetPassword.module.css";
import { Card, Input } from "../../customs";
import { Form, Formik } from "formik";
import { ForgotpasswordValidation } from "../../Validation/ForgotPassword";
import Button from "../../customs/button/button";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/logo.svg"

const ForgotPassword = () => {
  return (
    <>
      
      <div className={style.cyberpaylogo}>

<Logo />


      </div>

      <section className={style.container}>
        <Card>
          <div className={style.header}>
            <p>reset password</p>
            <p>Enter email linked to your account</p>
          </div>
          <div>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={ForgotpasswordValidation}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <Input
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Email"
                    />

                    <div className={style.button}>
                      <Button
                        text="Send reset link"
                        type="submit"
                        onClick={() => {}}
                      />
                    </div>

                    <div className={style.last}>
                      <span className={style.signup}>
                        Don't have an account?
                      </span>
                      <Link to="/sign-up" className={style.link}>
                        Sign Up
                      </Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Card>
      </section>
    </>
  );
};

export default ForgotPassword;
