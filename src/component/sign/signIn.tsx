import React, { useState } from "react";
import Card from "../../customs/card/card";
import style from "./signin.module.css";
import { Formik } from "formik";
import { Form, Link, useNavigate } from "react-router-dom";
import { Input } from "../../customs";
import * as Yup from "yup";
import Button from "../../customs/button/button";
import { SigninValidation } from "../../Validation/Signin";



const SignIn = () => {
  const navigate = useNavigate();
  // const [remember, setremember] = useState(false);

  // const Handleremember = () => {
  //   setremember(!remember);
  // };

  return (
    <section className={style.container}>
      <Card>
        <div className={style.writeup}>
          <p>welcome back</p>
          <p>sign in to your account</p>

          <div className={style.design}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninValidation}
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
                      <Button text="Sign In" onClick={() => {}} />
                    </div>

                    <span className={style.signup}>Dont have an account? </span>
                    <Link to="" className={style.link}>Sign Up</Link>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SignIn;
