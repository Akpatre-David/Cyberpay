import React, { useState } from "react";
import Card from "../../customs/card/card";
import style from "./login.module.css";
import { Form, Formik, FormikValues } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../customs";
import Button from "../../customs/button/button";
import { loginValidation } from "../../Validation/login";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { InputCheckBox } from "../../customs";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "../../utilis/Apicall";
import { notify } from "../../utilis/notify";
import { Spin } from "antd";
import { LoginResponse } from "./type";

interface Payload {
  email: string;
  password: string;
}

const baseurl = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const navigate = useNavigate();

  const userLogin = async (payload: Payload) => {
    return await apiRequest<LoginResponse>("post", "/Account/Login", payload);
  };

  const loginUserMutation = useMutation({
    mutationKey: ["login-user"],
    mutationFn: userLogin,
  });

  const loginUserHandler = async (values: FormikValues) => {
    const payload: Payload = {
      email: values.email,
      password: values.password,
    };

    try {
      await loginUserMutation.mutateAsync(payload, {
        onSuccess(data) {
          notify(data?.data?.message || "Login successful", "success");
          console.log(data?.data?.message);
        },
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.cyberpaylogo}>
        <Logo />
      </div>

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
                checkbox: "",
              }}
              validationSchema={loginValidation}
              onSubmit={(values) => {
               loginUserHandler(values);
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
                      isPasswordInput
                      
                    />

                    <div className={style.check}>
                      <InputCheckBox type="checkbox" name="checkbox" />

                      <span>Remeber me</span>

                      <Link to="/Forgot-Password" className={style.forgotlink}>
                        Forgot your password
                      </Link>
                    </div>

                    <div className={style.button}>
                      <Button type="submit">
                        {loginUserMutation.isPending ? <Spin /> : "Sign in"}
                      </Button>
                    </div>

                    <span className={style.signup}>Dont have an account? </span>

                    <Link to="/sign-up" className={style.link}>
                      {"Sign Up"}
                    </Link>
<Spin />
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

export default Login;
