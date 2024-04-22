import path from "path";
import React from "react";
import SignIn from "./component/sign/signIn";
import ForgotPassword from "./component/Forgotpassword/ForgotPassword";
import Email from "./component/Email/email";
import ResetPassword from "./component/Resetpassword/ResetPassword";
import AcctivateAccount from "./component/ActivateAccount/ActivateAccount";
import ActivateSuccess from "./component/activate Success/activatesuccess";

export const routes = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/Email",
    element: <Email />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

  {
    path: "activate-account",
    element: <AcctivateAccount />,
  },

  {
    path: "activate-success",
    element: <ActivateSuccess />,
  }
];
