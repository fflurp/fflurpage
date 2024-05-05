import * as React from "react";
import type { SVGProps } from "react";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#646464" stroke="#646464" strokeWidth={0.6} clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="m9.613 4.076 8.715 2.3c1.203.318 1.917 1.537 1.595 2.722L17.15 19.294c-.323 1.185-1.56 1.889-2.763 1.57l-8.715-2.3c-1.203-.317-1.917-1.536-1.595-2.721L6.85 5.648c.323-1.186 1.56-1.89 2.763-1.572ZM9.32 5.15a1.13 1.13 0 0 0-1.381.786L5.167 16.131a1.11 1.11 0 0 0 .797 1.36l8.715 2.3a1.13 1.13 0 0 0 1.381-.785l2.773-10.195a1.11 1.11 0 0 0-.797-1.361z"
        clipRule="evenodd"
      />
      <path d="M9.057 7.974a.555.555 0 0 1 .68-.392l6.435 1.724a.555.555 0 0 1-.287 1.072L9.45 8.654a.555.555 0 0 1-.393-.68ZM8.338 10.654a.555.555 0 0 1 .68-.393l6.435 1.725a.555.555 0 1 1-.287 1.072L8.73 11.334a.555.555 0 0 1-.393-.68ZM7.62 13.336a.555.555 0 0 1 .68-.392l3.754 1.006a.555.555 0 0 1-.287 1.072l-3.754-1.006a.555.555 0 0 1-.392-.68Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default XIcon;
