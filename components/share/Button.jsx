import React from "react";
import { Spinner } from "./TextField";

const Button = ({ type, loading, props, children, variant }) => {
  const useVariant = () => {
    if (variant === "outline") return "btn-outline";
    if (variant === "primary") return "btn-primary";
    if (variant === "secondary") return "btn-secondary";
    if (!variant) return "btn-neutral";
  };
  return (
    <button
      type={type}
      disabled={loading}
      className={`btn ${useVariant()} disabled:bg-current-color disabled:text-current-color disabled:opacity-75`}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
