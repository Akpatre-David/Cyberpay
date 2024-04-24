import React from "react";
import style from "./ForgetPassword.module.css";
import { Card, Input } from "../../customs";
import { Form, Formik } from "formik";
import { ForgotpasswordValidation } from "../../Validation/ForgotPassword";
import Button from "../../customs/button/button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className={style.container}>
      <Card>
        <div className={style.header}>
          <p>reset password</p>
          <p>enter email linked to your account</p>
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
                      text="send reset link"
                      type="submit"
                      onClick={() => {}}
                    />
                  </div>

                  <span className={style.signup}>Don't have an account? </span>
                  <Link to="/sign-up" className={style.link}>
                    Sign Up
                  </Link>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Card>
    </section>
  );
};

export default ForgotPassword;
