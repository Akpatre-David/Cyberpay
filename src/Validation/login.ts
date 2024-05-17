import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),

  password: Yup.string().min(8).required("Password is required"),

  checkbox: Yup.string().required("Please Check"),
});
