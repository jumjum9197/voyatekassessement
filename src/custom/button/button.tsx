import React from "react";
import { Spin } from "antd";
import classNames from "classnames";
import "../../../src/styles/tailwind.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isLoading?: boolean;
  iconBefore?: React.ReactNode;
  variant?: "default" | "text";
  bgColor?: string; // New prop for background color
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  isLoading,
  iconBefore,
  disabled,
  bgColor,
  variant,
  ...rest
}) => {
  const buttonStyle = {
    backgroundColor: bgColor || "var(--color-primary)", // Use the passed bgColor or fallback to default
  };

  if (variant === "text") {
    return (
      <button
        {...rest}
        className={classNames(
          "flex items-center",
          "textButton",
          className
        )}
        disabled={disabled}
      >
        {iconBefore}
        {isLoading ? <Spin className="spinner" /> : text}
      </button>
    );
  }

  return (
    <button
      {...rest}
      className={classNames(
        "flex items-center justify-center",
        "button",
        className
      )}
      style={buttonStyle} // Apply the style
      disabled={disabled}
    >
      {iconBefore}
      {isLoading ? <Spin className="spinner" /> : text}
    </button>
  );
};

export default Button;
