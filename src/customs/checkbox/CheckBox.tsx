import { Field, Formik, FieldProps } from "formik";
import React, { FC, HtmlHTMLAttributes } from "react";
import style from "./checkbox.module.css"

interface CheckBoxProps {
  name?: string;
  value?: string;
  type?: string;
  label?: string;
  text?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputCheckBox: FC<CheckBoxProps> = ({
  name,

  value,
  label,

  type,
  onChange,
}) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <div className={style.header}>
            <label>{label}</label>
            <input {...field} type={type} value={value} onChange={onChange} />
            {meta.touched && meta.error && <div>{meta.error}</div>}
          </div>
        )}
      </Field>
    </>
  );
};

export default InputCheckBox;
