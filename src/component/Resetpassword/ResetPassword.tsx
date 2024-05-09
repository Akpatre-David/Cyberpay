import React from "react";
import style from "./ResetPassword.module.css";
import { Card, Input } from "../../customs";
import { Form, Formik } from "formik";
import Button from "../../customs/button/button";
import { ResetPasswordValiation } from "../../Validation/ResetPassword";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const ResetPassword = () => {
  return (
    <>
      <div className={style.cyberpaylogo}>
        <Logo />
      </div>

      <section className={style.container}>
        <Card>
          <div className={style.header}>
            <p>create new password</p>
            <p>Set a password different from the old one</p>
          </div>

          <div>
            <Formik
              initialValues={{
                newpassword: "",
                confirmpassword: "",
              }}
              validationSchema={ResetPasswordValiation}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <Input
                      label="New Password"
                      type="password"
                      name="newpassword"
                      placeholder="New Password"
                      value={props.values.newpassword}
                      onChange={props.handleChange("newpassword")}
                    />

                    <Input
                      label="Confirm Password"
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={props.values.confirmpassword}
                      onChange={props.handleChange("confirmpassword")}
                    />

                    <div className={style.button}>
                      <Button
                        text="Reset Password"
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

export default ResetPassword;
