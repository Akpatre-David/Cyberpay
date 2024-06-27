import * as Yup from "yup";

export const accountCreationValidation = Yup.object({
  bank: Yup.string().required("Bank is required"),
  bvn: Yup.number ().max(11).required("BVN is required"),
  accountNumber: Yup.number().required("Account Number is Required"),
});
