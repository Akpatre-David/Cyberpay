import React, { useState } from "react";
import Card from "../../customs/card/card";
import style from "./login.module.css";
import { Formik } from "formik";
import { Form, Link, useNavigate } from "react-router-dom";
import { Input } from "../../customs";
import Button from "../../customs/button/button";
import { LoginValidation } from "../../Validation/Login";

const Login = () => {
  const navigate = useNavigate();
  // const [remember, setremember] = useState(false);

  // const Handleremember = () => {
  //   setremember(!remember);
  // };

  return (
    <section className={style.container}>
      <Card>
        <div className={style.header}>
          <p>welcome back</p>
          <p>Sign in to your account</p>
        </div>

        <div className={style.design}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginValidation}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {(props) => {
              return (
                <Form>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter Email"
                    name="email"
                  />

                  <Input
                    label="Password"
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                  />

                  <div className={style.button}>
                    <Button text="Sign In" type="submit" onClick={() => {}} />
                  </div>

                  <span className={style.signup}>Dont have an account? </span>
                  <Link to="/Log-in" className={style.link}>
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

export default Login;
