import React from "react";
import style from "./ResetPassword.module.css";
import { Card, Input } from "../../customs";
import { Form, Formik, FormikValues } from "formik";
import Button from "../../customs/button/button";
import { resetPasswordValidation } from "../../Validation/resetPassword";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import apiRequest from "../../utilis/Apicall";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../../utilis/notify";
import { Spin } from "antd";

interface Payload {
  newPassword: string;
  confirmPassword: string;
}

const baseurl = process.env.REACT_APP_BASE_URL;

const ResetPassword = () => {
  const userRestPassword = async (payload: Payload) => {
    return await apiRequest("post", "/Account/Reset-Password", payload);
  };

  const resetPasswordMutation = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: userRestPassword,
  });

  const resetPasswordHandler = async (values: FormikValues) => {
    const payload: Payload = {
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };

    try {
      await resetPasswordMutation.mutateAsync(payload, {
        onSuccess(data) {
          // notify(data?.data?.message || "Password Reset Successful", "success");
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
            <p>create new password</p>
            <p>Set a password different from the old one</p>
          </div>

          <div>
            <Formik
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={resetPasswordValidation}
              onSubmit={(values) => {
                resetPasswordHandler(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <Input
                      label="New Password"
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      isPasswordInput
                    />

                    <Input
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      isPasswordInput
                    />

                    <div>
                      <Button variant="solid" type="submit">
                        {resetPasswordMutation.isPending ? <Spin /> : "Sign in"}
                      </Button>
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

export default ResetPassword;
