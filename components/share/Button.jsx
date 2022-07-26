import React from "react";
import { Spinner } from "./TextField";

const Button = ({ type, loading, props, children, variant }) => {
  const useVariant = () => {
    if (variant === "outline") return "btn-outline";
    if (variant === "primary") return "btn-primary";
    if (variant === "secondary") return "btn-secondary";
    if (!variant) return "btn-neutral";
  };
  const loader = () => {
    return (
      <span className="flex items-center space-x-4">
        <Spinner />
        Loading...
      </span>
    );
  };
  return (
    <button type={type} className={`btn ${useVariant()}`} {...props}>
      {loading ? loader() : children}
    </button>
  );
};

export default Button;
