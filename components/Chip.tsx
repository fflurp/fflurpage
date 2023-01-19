import React from "react";

type ChipProps = {
  children: string;
  background: string;
};

const Chip: React.FC<ChipProps> = ({ children, background }) => {
  return (
    <div
      className={`getBgColorgetBgColor inline-flex rounded-lg p-2 font-title text-sm ${background}`}
    >
      {children}
    </div>
  );
};

export default Chip;
