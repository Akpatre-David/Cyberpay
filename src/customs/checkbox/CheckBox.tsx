import { Field, Formik, FieldProps } from "formik";
import React, { FC, HtmlHTMLAttributes } from "react";
import style from "./checkbox.module.css";

interface CheckBoxProps {
  name?: string;
  type?: string;
  label?: string;
  text?: string;
}

const InputCheckBox: FC<CheckBoxProps> = ({
  name,
  label,
  type,
}) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <div className={style.header}>
            <label>{label}</label>
            <input {...field} type={type} />
            {meta.touched && meta.error && (
              <div className={style.error}>{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </>
  );
};

export default InputCheckBox;
