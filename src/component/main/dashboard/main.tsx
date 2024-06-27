import React from "react";
import SideBar from "../../layout/sideBar/sideBar";
import TitleBar from "../../../customs/title/titleBar";
import { Steps } from "antd";
import styles from "./main.module.css";
import Header from "../../layout/header/header";
import { Input, Select } from "../../../customs";
import { Form, Formik, FormikValues } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import apiRequest from "../../../utilis/Apicall";
import { createResponse } from "./type";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../../../utilis/notify";
import Button from "../../../customs/button/button";
import { accountCreationValidation } from "../../../Validation/accountCreation";

interface Payload {
  bvn: string;
  accountName: string;
  accountNumber: string;
  bank: string;
}

const baseurl = process.env.REACT_APP_BASE_URL;

const DashBoard = () => {
  const Navigate = useNavigate();

  const createAccount = async (payload: Payload) => {
    return await apiRequest<createResponse>(
      "post",
      "CreateAccount/CreateAccount",
      payload
    );
  };

  const accountCreationMutation = useMutation({
    mutationKey: ["accountCreation"],
    mutationFn: createAccount,
  });

  const accountCreationHandler = async (values: FormikValues) => {
    const payload: Payload = {
      bvn: values.bvn.trim(),
      bank: values.bank.trim(),
      accountName: values.accountName.trim(),
      accountNumber: values.accountNumber.trim(),
    };

    try {
      await accountCreationMutation.mutateAsync(payload, {
        onSuccess(data) {
          notify(data?.data?.message || "Login successful", "success");
          Navigate("/");
        },
      });
    } catch (error: any) {
      notify(error.message, "error");
    }
  };

  const { Step } = Steps;
  return (
    <>
      <section className={styles.container}>
        {/* This the sidebar component from the layout */}
        <SideBar />

        <div>
          <Header />

          {/* this is the titlebar design from custom */}
          <TitleBar>
            <p className={styles.GetStarted}>get started</p>
            <p className={styles.information}>
              To get started provide information
            </p>
          </TitleBar>

          <div className={styles.formikContainer}>
            <Formik
              initialValues={{
                bank: "",
                accountName: "",
                bvn: "",
                accountNumber: "",
              }}
              validationSchema={accountCreationValidation}
              onSubmit={(values) => {
                accountCreationHandler(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <div className={styles.firstRow}>
                      <Select
                        label="bank"
                        type="text"
                        name="bank"
                        placeholder="GT Bank"
                        className={styles.selectStyle}>
                        <option>djfhdhd</option>
                      </Select>
                      <Input
                        label="Account Number"
                        type="text"
                        name="accountNumber"
                        placeholder="Enter Account Number"
                      />
                    </div>

                    <div className={styles.secondRow}>
                      <Input
                        label="Account Name"
                        type="text"
                        name="accountName"
                        placeholder="Enter Account Name"
                        disable
                      />

                      <Input
                        label="BVN"
                        type="text"
                        name="bvn"
                        placeholder="Enter BVN"
                      />
                    </div>
                    <footer>
                      <Button variant="outline" type="submit">
                        Back
                      </Button>
                      <Button variant="solid" type="submit">
                        save changes
                      </Button>
                    </footer> 
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
