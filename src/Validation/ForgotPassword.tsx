import * as Yup from "yup";

export const ForgotpasswordValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter a Valid Email"),
});
