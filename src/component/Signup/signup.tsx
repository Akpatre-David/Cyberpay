import React from "react";
import style from "./signup.module.css";
import { Form, Formik } from "formik";
import { Input } from "../../customs";
import Button from "../../customs/button/button";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { SignupValidation } from "../../Validation/signup";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Signup = () => {
  return (
    <>
      <section className={style.container}>
        <section className={style.details}>
          <div className={style.cyberpaylogo}>
            <Logo />
          </div>

          <p>build the future with cyberpay</p>

          <div>
            <Formik
              initialValues={{
                BusinessName: "",
                BusinessType: "",
                Phone: "",
                email: "",
                password: "",
                cpassword: "",
                country: "",
              }}
              validationSchema={SignupValidation}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <div className={style.place}>
                      <Input
                        type="text"
                        label="Business Name"
                        placeholder="Business Name"
                        name="BusinessName"
                      />
                      <Input
                        type="text"
                        label="Business Type"
                        placeholder="Business Type"
                        name="BusinessType"
                      />
                    </div>

                    <div className={style.place}>
                      <Input
                        type="text"
                        label="Phone Number"
                        name="Phone"
                        placeholder="Phone Number"
                      />

                      <Input
                        type="email"
                        label="Business Email"
                        placeholder="Business Email"
                        name="email"
                      />
                    </div>

                    <div className={style.place}>
                      <Input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Input password"
                      />

                      <Input
                        type="password"
                        label="Confirm Password"
                        name="cpassword"
                        placeholder="Confirm passowrd"
                      />
                    </div>

                    <Input
                      type="text"
                      label="Country"
                      placeholder="Input Country"
                      name="country"
                    />

                    <div className={style.button}>
                      <Button
                        text="Create my account"
                        type="submit"
                        onClick={() => {}}
                      />
                    </div>

                    <div className={style.end}>
                      <span>Have an account?</span>

                      <Link to="/Log-in" className={style.link}>
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

          <div className={style.listing}>
            <FaCheckCircle size={25} className={style.circle} />

            <span>
              Access our API which include access to
              <br />
              bank account and transaction details.
            </span>
          </div>

          <div className={style.listing}>
            <FaCheckCircle size={25} className={style.circle} />

            <span>
              Use sample data to try out our APIs in our <br /> sandbox
              environment.
            </span>
          </div>

          <div className={style.listing}>
            <FaCheckCircle size={25} className={style.circle} />

            <span>
              Use information from up to 1000 free API calls <br /> when you are
              ready to start building.
            </span>
          </div>

          <div className={style.endofutures}>
            <span>Got Question?</span>
            <Link to="" className={style.link}>
              Contact Sales
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Signup;
