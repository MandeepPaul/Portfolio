import React from "react";

const Input = React.forwardRef(
  ({ className, type, name, placeholder, value, onChange }, ref) => {
    return (
      <input
        className={`bg-neutral-100 text-black h-10 w-full outline-none focus:border-b-4 border-teal-600 pl-4 ${className}`}
        type={type | "text"}
        ref={ref}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default Input;
