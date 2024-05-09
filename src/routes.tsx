import path from "path";
import React from "react";

import ForgotPassword from "./component/Forgotpassword/ForgotPassword";
import Email from "./component/Email/email";
import ResetPassword from "./component/Resetpassword/ResetPassword";
import AcctivateAccount from "./component/ActivateAccount/ActivateAccount";
import ActivateSuccess from "./component/activate Success/activatesuccess";
import Login from "./component/Login/login";
import Signup from "./component/Signup/signup";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/email",
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
  },

  {
    path: "sign-up",
    element: <Signup />,
  },
];
