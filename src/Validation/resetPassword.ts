import * as Yup from "yup";

export const resetPasswordValidation = Yup.object({
  newPassword: Yup.string().min(8).required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Enter Confirm Password"),
});
