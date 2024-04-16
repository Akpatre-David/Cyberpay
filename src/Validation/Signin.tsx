import * as Yup from "yup";

export const SigninValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter a Email"),

  password: Yup.string().min(8).required("Password is required"),
});
