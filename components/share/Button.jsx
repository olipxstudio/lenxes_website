import React from "react";

const Button = ({ type, loading, props, children, variant }) => {
  const useVariant = () => {
    if (variant === "outline") return "btn-outline";
    if (variant === "primary") return "btn-primary";
    if (variant === "secondary") return "btn-secondary";
    if (!variant) return "btn-neutral";
  };
  return (
    <button type={type} className={`btn ${useVariant()}`} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
