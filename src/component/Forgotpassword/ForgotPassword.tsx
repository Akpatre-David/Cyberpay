import React from "react";
import style from "./forgetPassword.module.css";
import { Card, Input } from "../../customs";
import { Form, Formik, FormikValues } from "formik";
import { forgotPasswordValidation } from "../../Validation/forgotPassword";
import Button from "../../customs/button/button";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import apiRequest from "../../utilis/Apicall";
import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";

interface Payload {
  email: string;
}

const baseurl = process.env.REACT_APP_BASE_URL;

const ForgotPassword = () => {
  const forgotPassword = async (payload: Payload) => {
    return await apiRequest("post", "/Account/Forgot", payload);
  };

  const forgotPasswordMutation = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPassword,
  });

  const forgotPasswordHandler = async (values: FormikValues) => {
    const payload: Payload = {
      email: values.email,
    };

    try {
      await forgotPasswordMutation.mutateAsync(payload, {
        onSuccess(data) {
          console.log(data);
        },
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={style.cyberPayLogo}>
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
              validationSchema={forgotPasswordValidation}
              onSubmit={(values) => {
              forgotPasswordHandler(values);
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

                    <div>
                      <Button variant="solid" type="submit">{forgotPasswordMutation.isPending ? <Spin /> : "Send resend Link"}</Button>
                    </div>

                    <div className={style.last}>
                      <span className={style.signUp}>
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
