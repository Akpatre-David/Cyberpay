import * as Yup from "yup";

export const SignupValidation = Yup.object({
  BusinessName: Yup.string().required("Please Enter Business Name"),
  BusinessType: Yup.string().required("Please Enter Business Type"),
  Phone: Yup.string().required("Enter Valid Phone Number"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),
  password: Yup.string().required("Please Enter Password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please Confirm Password"),

  country: Yup.string().required("Plaese Enter Country")
});
