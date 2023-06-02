import React, { ReactNode, HtmlHTMLAttributes } from "react";
import "./Button.css";
import clsx from "clsx";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: ButtonType;
  className?: string;
}

const Button = ({ type, className, children, ...restProps }: ButtonProps) => {
  const classNames = clsx(
    "button",
    type === ButtonType.primary && "button--primary",
    type === ButtonType.secondary && "button--secondary",
    className
  );

  return (
    <button {...restProps} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
