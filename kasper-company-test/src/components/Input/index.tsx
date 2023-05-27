import React, { useState } from "react";
import "./Input.css";
import classNames from "classnames";

import { EyeIcon, EyeSlashIcon } from "../../assets/icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, type, ...restProps }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === "password";

  const PasswordIcon = isShowPassword ? (
    <EyeIcon className="icon" />
  ) : (
    <EyeSlashIcon className="icon" />
  );

  const inputType =
    type !== "password" ? type : isPassword && isShowPassword ? "text" : type;

  const onPasswordClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div
      className={classNames("input-wrapper", isPassword && "input-password")}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input {...restProps} name={name} id={name} type={inputType} />
      {isPassword && (
        <div className="password-icon" onClick={onPasswordClick}>
          {PasswordIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
