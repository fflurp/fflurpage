import * as React from "react";
import type { SVGProps } from "react";

const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#646464"
      fillRule="evenodd"
      d="M1.1 10.2a1.5 1.5 0 0 0 1.5 1.5h1.666v-1H2.6a.5.5 0 0 1-.5-.5V2.6a.5.5 0 0 1 .5-.5h7.6a.5.5 0 0 1 .5.5v1.666h1V2.6a1.5 1.5 0 0 0-1.5-1.5H2.6a1.5 1.5 0 0 0-1.5 1.5zm4.7-5.9a1.5 1.5 0 0 0-1.5 1.5v7.6a1.5 1.5 0 0 0 1.5 1.5h7.6a1.5 1.5 0 0 0 1.5-1.5V5.8a1.5 1.5 0 0 0-1.5-1.5zm-.5 1.5a.5.5 0 0 1 .5-.5h7.6a.5.5 0 0 1 .5.5v7.6a.5.5 0 0 1-.5.5H5.8a.5.5 0 0 1-.5-.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default CopyIcon;
