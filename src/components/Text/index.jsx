import React from "react";

const variantClasses = {
  h1: "font-semibold text-3xl sm:text-[26px] md:text-[28px]",
  h2: "font-medium sm:text-2xl md:text-[26px] text-[28px]",
  h3: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  h4: "text-2xl md:text-[22px] sm:text-xl",
  h5: "font-medium sm:text-[17px] md:text-[19px] text-[21px]",
  h6: "text-xl",
  body1: "font-semibold text-lg",
  body2: "font-medium text-[16.38px]",
  body3: "text-base",
  body4: "font-bold text-[15px]",
  body5: "font-medium text-[14.4px]",
  body6: "text-sm",
  body7: "font-normal text-[13.6px]",
  body8: "font-medium text-[11px]",
  body9: "font-normal text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
