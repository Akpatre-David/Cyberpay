import { Field, Formik, FieldProps } from "formik";
import React, { FC, HtmlHTMLAttributes } from "react";
import style from "./input.module.css";

interface InputProps {
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  label?: string;
  disable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  value,
  label,
  disable,
  type,
  onChange,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className={style.details}>
          <label>{label}</label>
          <input
            {...field}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disable}
          />
          {meta.touched && meta.error && <div className={style.error}>{meta.error}</div>}
        </div>
      )}
    </Field>
  );
};

export default Input;

