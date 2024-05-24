import * as React from "react";
import type { SVGProps } from "react";

const CheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#C9CCDB"
      fillRule="evenodd"
      d="M12.21 4.01c.288.19.37.576.18.865L7.857 11.81a.625.625 0 0 1-.944.12L3.98 9.262a.625.625 0 1 1 .84-.925l2.392 2.174 4.132-6.32a.625.625 0 0 1 .865-.18"
      clipRule="evenodd"
    />
  </svg>
);

export default CheckedIcon;
