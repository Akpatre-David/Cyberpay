import { Field, Formik, FieldProps } from "formik";
import React, { FC, InputHTMLAttributes, ReactNode, useState } from "react";
import style from "./input.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  label?: string;
  disable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isPasswordInput?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  label,
  disable,
  type,
  isPasswordInput,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const showPasswordHandle = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className={style.details}>
          <label>{label}</label>
          <div className={style.inputContainer}>
            <input
              {...field}
              placeholder={placeholder}
              type={isShowPassword ? "type" : "text"}
              disabled={disable}
            />
            <div className={style.eye}>
              {isPasswordInput && (
                <button
                  className={style.buttonStyle}
                  onClick={showPasswordHandle}>
                  {isShowPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </button>
              )}
            </div>
          </div>

          {meta.touched && meta.error && (
            <div className={style.error}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
