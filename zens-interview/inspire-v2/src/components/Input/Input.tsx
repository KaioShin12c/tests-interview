import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  prefixIcon,
  className = "",
  ...restProps
}) => {
  const classNames = `bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full pl-12 p-2.5 ${className}`;
  return (
    <div className="relative mb-6">
      {prefixIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {prefixIcon}
        </div>
      )}
      <input {...restProps} className={classNames} />
    </div>
  );
};

export default Input;
