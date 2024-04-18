import * as Yup from "yup";

export const ResetPasswordValiation = Yup.object({
  newpassword: Yup.string().min(8).required("Password is required"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Enter Confirm Password"),
});
