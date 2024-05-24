import * as React from "react";
import type { SVGProps } from "react";

const ReadCVIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#646464"
        stroke="#646464"
        strokeWidth={0.8}
        d="m5.034 5 5.405 7.227L5 18.103h1.224l4.762-5.144 3.848 5.144H19l-5.71-7.633L18.354 5H17.13l-4.385 4.738L9.2 5zm1.8.902h1.914l8.451 11.3h-1.913z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ReadCVIcon;
