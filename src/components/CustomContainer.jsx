import React from "react";

const CustomContainer = ({ className, children }) => {
  return (
    <div className={`bg-[var(--secondary-color)] rounded-2xl p-5 ${className}`}>
      {children}
    </div>
  );
};

export default CustomContainer;
