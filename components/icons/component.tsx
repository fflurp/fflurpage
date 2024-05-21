import * as React from "react";
import type { SVGProps } from "react";
const ComponentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#202020"
      fillRule="evenodd"
      d="M5.006 3.38a.5.5 0 0 0 0 .707l2.64 2.64a.5.5 0 0 0 .707 0l2.64-2.64a.5.5 0 0 0 0-.707L8.353.74a.5.5 0 0 0-.707 0zm2.993 2.286L6.067 3.734 7.999 1.8l1.933 1.933zm1.274 1.98a.5.5 0 0 0 0 .708l2.64 2.64a.5.5 0 0 0 .707 0l2.64-2.64a.5.5 0 0 0 0-.707l-2.64-2.64a.5.5 0 0 0-.708 0zm2.993 2.287L10.333 8l1.933-1.932L14.199 8zm-7.26 2.688a.5.5 0 0 1 0-.708l2.64-2.64a.5.5 0 0 1 .707 0l2.64 2.64a.5.5 0 0 1 0 .707l-2.64 2.64a.5.5 0 0 1-.707 0zm1.06-.354L8 14.2l1.933-1.933L8 10.334zM.74 7.647a.5.5 0 0 0 0 .707l2.64 2.64a.5.5 0 0 0 .707 0l2.64-2.64a.5.5 0 0 0 0-.707l-2.64-2.64a.5.5 0 0 0-.707 0zm2.994 2.286L1.8 8l1.933-1.932L5.665 8z"
      clipRule="evenodd"
    />
  </svg>
);
export default ComponentIcon;
