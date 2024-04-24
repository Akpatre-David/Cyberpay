import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),

  password: Yup.string().min(8).required("Password is required"),
});
