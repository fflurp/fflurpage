import * as React from "react";
import type { SVGProps } from "react";

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#646464"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.334 8H2.667m0 0 4 4m-4-4 4-4"
    />
  </svg>
);

export default ArrowLeftIcon;
