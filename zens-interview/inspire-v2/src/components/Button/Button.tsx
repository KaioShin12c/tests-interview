import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  buttonType?: "primary" | "default";
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = "default",
  ...restProps
}) => {
  return <button {...restProps}>{children}</button>;
};

export default Button;
