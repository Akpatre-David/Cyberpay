import * as Yup from "yup";

export const forgotPasswordValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter a Valid Email"),
});
