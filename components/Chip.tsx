import React from "react";

type ChipProps = {
  children: string;
  variant?: "primary" | "secondary" | "tertiary";
};

const getBgColor = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "bg-[#A7BCFF]";
    case "secondary":
      return "bg-[#FFD3F8]";
    case "tertiary":
      return "bg-[#FFF2CF]";
    default:
      return "bg-[#A7BCFF]";
  }
};

const Chip: React.FC<ChipProps> = ({ children, variant }) => {
  return (
    <div
      className={`getBgColorgetBgColor inline-flex rounded-lg p-2 font-title text-sm ${getBgColor(
        variant
      )}`}
    >
      {children}
    </div>
  );
};

export default Chip;
