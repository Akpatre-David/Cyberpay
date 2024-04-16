import path from "path";
import React from "react";
import SignIn from "./component/sign/signIn";
import ForgotPAssword from "./component/Forgotpassword/ForgotPassword";
import Email from "./component/Email/email";

export const routes = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "/Forgot-Password",
    element: <ForgotPAssword />,
  },

  {
    path: "/Email",
    element: <Email />,
  },
];
