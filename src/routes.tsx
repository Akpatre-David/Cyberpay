import path from "path";
import React from "react";

import Email from "./component/email/email";
import ResetPassword from "./component/resetPassword/ResetPassword";
import Login from "./component/login/login";
import Signup from "./component/signUp/signUp";
import ForgotPassword from "./component/forgotPassword/forgotPassword";
import ActivateAccount from "./component/activateAccount/activateAccount";
import ActivateSuccess from "./component/activateSuccess/activateSuccess";

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
    path: "activate-Account",
    element: <ActivateAccount />,
  },

  {
    path: "activate-Success",
    element: <ActivateSuccess />,
  },

  {
    path: "sign-up",
    element: <Signup />,
  },
];
