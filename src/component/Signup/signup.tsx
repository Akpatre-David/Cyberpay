import style from "./signup.module.css";
import { Form, Formik } from "formik";
import { Input } from "../../customs";
import { Select } from "../../customs";
import Button from "../../customs/button/button";
import { Link } from "react-router-dom";
import { SignupValidation } from "../../Validation/signup";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { InputCheckBox } from "../../customs";
import { FaCircleCheck } from "react-icons/fa6";

const Signup = () => {
  const Country = [
    { CountryName: "Algeria" },
    { CountryName: "Angola" },
    { CountryName: "Benin" },
    { CountryName: "Botswana" },
    { CountryName: "Burkina Faso" },
    { CountryName: "Burundi" },
    { CountryName: "Cape Verde" },
    { CountryName: "Cameroon" },
    { CountryName: "Central African Republic" },
    { CountryName: "Chad" },
    { CountryName: "Comoros" },
    { CountryName: "Democratic Republic of the Congo" },
    { CountryName: "Republic of the Congo" },
    { CountryName: "Djibouti" },
    { CountryName: "Egypt" },
    { CountryName: "Equatorial Guinea" },
    { CountryName: "Eritrea" },
    { CountryName: "Ethiopia" },
    { CountryName: "Côte d’Ivoire (Ivory Coast)" },
    { CountryName: "Gabon" },
    { CountryName: "Gambia" },
    { CountryName: "Ghana" },
    { CountryName: "Guinea" },
    { CountryName: "Guinea" },

    // Add more user types as needed

    ,
  ];

  // Map the array to generate the options
  const countryOptions = Country.map((type) => (
    <option key={type.CountryName} value={type.CountryName}>
      {type.CountryName}
    </option>
  ));

  return (
    <>
      <section className={style.container}>
        <section className={style.details}>
          <div className={style.cyberpaylogo}>
            <Logo />
          </div>

          <p>Build the future with Cyberpay</p>

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
                checkbox: "",
              }}
              validationSchema={SignupValidation}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {(props) => {
                return (
                  <Form>
                    <div className={style.typing}>
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

                    <div className={style.typing}>
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

                    <div className={style.typing}>
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

                    <Select
                      type="text"
                      label="Country"
                      placeholder="Input Country"
                      name="country"
                      className={style.select}>
                      {countryOptions}
                    </Select>

                    <div className={style.check}>
                      <InputCheckBox type="checkbox" name="checkbox" />
                      <span>
                        I accept Cyberpay’s Privacy Policy and Terms of Use
                      </span>
                    </div>

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
            <Link to="/" className={style.link}>
              Contact Sales
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Signup;
