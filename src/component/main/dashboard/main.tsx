import React from "react";
import SideBar from "../../layout/sideBar/sideBar";
import TitleBar from "../../../customs/title/titleBar";
import { Steps } from "antd";
import styles from "./main.module.css";
import Header from "../../layout/header/header";
import { Input, Select } from "../../../customs";
import { Form, Formik } from "formik";

const DashBoard = () => {
  const { Step } = Steps;
  return (
    <>
      <section className={styles.container}>
        {/* This the sidebar component from the layout */}
        <SideBar />

        <div className={styles.fullwidth}>
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
              onSubmit={(values) => {}}>
              {(props) => {
                return (
                  <Form>
                    <div className={styles.firstRow}>
                      <Select
                        type="text"
                        label="Bank"
                        placeholder="GT Bank"
                        name="bank">
                        <option>
                          hdhdhdh
                        </option>
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
                      />

                      <Input
                        label="BVN"
                        type="text"
                        name="bvn"
                        placeholder="Enter BVN"
                      />
                    </div>
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
