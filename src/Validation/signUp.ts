import * as Yup from "yup";

export const signupValidation = Yup.object({
  businessName: Yup.string().required("Please Enter Business Name"),
  businessType: Yup.string().required("Please Enter Business Type"),
  phoneNumber: Yup.string().min(11).max(11).required("Enter Valid Phone Number"),
  businessEmail: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),
  password: Yup.string().required("Please Enter Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please Confirm Password"),

  country: Yup.string().required("Plaese Enter Country"), 
  checkbox: Yup.string().required("please accept our terms")
});
