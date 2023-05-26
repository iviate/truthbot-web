import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder16: "rounded-[16px]",
  RoundedBorder12: "rounded-[12px]",
  CircleBorder24: "rounded-[24px]",
  RoundedBorder2: "rounded-sm",
  CustomBorderTL8: "rounded-bl-lg rounded-tl-lg",
  CustomBorderLR8: "rounded-br-lg rounded-tr-lg",
  CircleBorder20: "rounded-[20px]",
};
const variants = {
  OutlineLightgreen90094:
    "bg-gradient  border-[3px] border-light_green_900_94 border-solid text-black_900",
  OutlineIndigoA100:
    "bg-gray_900 border border-indigo_A100 border-solid text-gray_500",
  OutlineGray90001:
    "bg-gradient2  border-[3px] border-gray_900_01 border-solid shadow-bs2 text-black_900_01",
  FillGray600: "bg-gray_600 text-white_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-blue_gray_100 border-solid shadow-bs",
  Outline: "bg-gradient1  border-[3px] border-solid shadow-bs1 text-white_A700",
  OutlineAmber600:
    "border-amber_600 border-l-[3px] border-solid border-y-[3px] text-white_A700",
  OutlineAmber600_1:
    "border-[3px] border-amber_600 border-solid text-white_A700",
  FillRedA70001: "bg-red_A700_01 text-white_A700",
  FillLightblueA200: "bg-light_blue_A200 text-white_A700",
  FillTeal90001: "bg-teal_900_01 text-white_A700",
};
const sizes = {
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-[11px]",
  xl: "p-[17px]",
  "2xl": "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder16",
    "RoundedBorder12",
    "CircleBorder24",
    "RoundedBorder2",
    "CustomBorderTL8",
    "CustomBorderLR8",
    "CircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "OutlineLightgreen90094",
    "OutlineIndigoA100",
    "OutlineGray90001",
    "FillGray600",
    "OutlineBluegray100",
    "Outline",
    "OutlineAmber600",
    "OutlineAmber600_1",
    "FillRedA70001",
    "FillLightblueA200",
    "FillTeal90001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
