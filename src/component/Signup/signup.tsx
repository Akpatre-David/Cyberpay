import style from "./signUp.module.css";
import { Form, Formik, FormikValues } from "formik";
import { Input, Modal } from "../../customs";
import { Select } from "../../customs";
import Button from "../../customs/button/button";
import { Link, useNavigate } from "react-router-dom";
import { signupValidation } from "../../Validation/signUp";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { InputCheckBox } from "../../customs";
import { FaCircleCheck } from "react-icons/fa6";
import { Country } from "../../utilis/country-data";
import apiRequest from "../../utilis/Apicall";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../../utilis/notify";
import { Spin } from "antd";
import { Business } from "../../utilis/business-data";
import { signupResponse } from "./signuptype";
import CustomModal from "../../customs/modals/modal";
import { useState } from "react";
import ModalBody from "./modal/modalBody";

interface Payload {
  businessName: string;
  businessType: string;
  phoneNumber: string;
  businessEmail: string;
  password: string;
  confirmPassword: string;
  country: string;
}

const baseurl = process.env.REACT_APP_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // for the countryOptions
  const countryOptions = Country.map((item, index) => (
    <option key={index} value={item.CountryName}>
      {item.CountryName}
    </option>
  ));

  // for the businessOptions
  const businessOptions = Business.map((item, index) => (
    <option key={index} value={item.businessType}>
      {item.businessType}
    </option>
  ));

  const createUser = async (payload: Payload) => {
    return await apiRequest<signupResponse>(
      "post",
      "/Account/Register",
      payload
    );
  };

  const createAcctMutation = useMutation({
    mutationKey: ["create-user"],
    mutationFn: createUser,
  });

  const createUserHandler = async (values: FormikValues) => {
    const payload: Payload = {
      businessName: values.businessName,
      businessType: values.businessType,
      phoneNumber: values.phoneNumber,
      businessEmail: values.businessEmail,
      password: values.password,
      confirmPassword: values.confirmPassword,
      country: values.country,
    };

    try {
      await createAcctMutation.mutateAsync(payload, {
        onSuccess(data) {
          notify(
            data?.data?.message ||
              "Signin successful. You will be  redirected to the Login Page",
            "success"
          );
          navigate("/");
        },
      });
    } catch (error: any) {
      console.log(error);
      notify(
        "An error occurred while creating the account. Please try again.",
        "error"
      );
    }
  };

  return (
    <>
      <section className={style.container}>
        <section className={style.details}>
          <div className={style.cyberPayLogo}>
            <Logo />
          </div>

          <p>Build the future with Cyberpay</p>

          <div>
            <Formik
              initialValues={{
                businessName: "",
                businessType: "",
                phoneNumber: "",
                businessEmail: "",
                password: "",
                confirmPassword: "",
                country: "",
              }}
              validationSchema={signupValidation}
              onSubmit={(values) => {
                createUserHandler(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <div className={style.typing}>
                      <Input
                        type="text"
                        label="Business Name"
                        placeholder="Business Name"
                        name="businessName"
                      />
                      <div className={style.selectContainer}>
                        <Select
                          type="text"
                          label="Business Type"
                          placeholder="Select"
                          name="businessType"
                          className={style.select}>
                          {businessOptions}
                        </Select>
                      </div>
                    </div>

                    <div className={style.typing}>
                      <Input
                        type="text"
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />

                      <Input
                        type="email"
                        label="Business Email"
                        placeholder="Business Email"
                        name="businessEmail"
                      />
                    </div>

                    <div className={style.typing}>
                      <Input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Input password"
                        isPasswordInput
                      />

                      <Input
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        isPasswordInput
                      />
                    </div>

                    <div className={style.selectContainer}>
                      <Select
                        type="text"
                        label="Country"
                        placeholder="Select Country"
                        name="country"
                        className={style.select}>
                        {countryOptions}
                      </Select>
                    </div>

                    <div className={style.check}>
                      <InputCheckBox type="checkbox" name="checkbox" />

                      <label className={style.accept}>
                        I accept
                        <span onClick={showModal}>
                          Cyberpay’s Privacy Policy and Terms of Use
                        </span>
                      </label>
                    </div>

                    <div>
                      <Button variant="solid" type="submit">
                        {createAcctMutation.isPending ? <Spin /> : "Sign up"}
                      </Button>
                    </div>

                    <div className={style.end}>
                      <span>Have an account?</span>

                      <Link to="/" className={style.link}>
                        Sign In
                      </Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>

        <section className={style.futures}>
          <p>Awesome features that awaits you</p>

          <section>
            <div className={style.cycle}>
              <FaCircleCheck size={20} className={style.svg} />
              <p className={style.txt}>
                Access our API which include access to
                <br />
                bank account and transaction debit.
              </p>
            </div>
            <div className={style.cycle}>
              <FaCircleCheck size={20} className={style.svg} />
              <p className={style.txt}>
                Use sample data to try out our APIs in our
                <br />
                Sandbox environment.
              </p>
            </div>
            <div className={style.cycle}>
              <FaCircleCheck size={20} className={style.svg} />
              <p className={style.txt}>
                Use information from up to 100 free API calls
                <br />
                when you're ready to start building.
              </p>
            </div>
          </section>

          <div className={style.contact}>
            <span>Got Questions?</span>
            <Link to="" className={style.link}>
              Contact Sales
            </Link>
          </div>
        </section>
      </section>

      <Modal
        title="title"
        isModalOpen={isModalOpen}
        handleButtonCancel={handleCancel}
        handleButtonOk={handleOk}
        showModal={showModal}>
        <ModalBody
          handleButtonCancel={handleCancel}
          handleButtonOk={handleOk}
        />
      </Modal>
    </>
  );
};

export default Signup;
