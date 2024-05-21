import * as React from "react";
import type { SVGProps } from "react";
const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#202020"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M5.333 5.333h.007M1.333 3.466V6.45c0 .326 0 .49.037.643q.05.205.16.385c.082.135.197.25.428.48L7.07 13.07c.792.792 1.188 1.188 1.645 1.337a2 2 0 0 0 1.236 0c.457-.149.853-.545 1.645-1.337l1.474-1.474c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.457-.545-.853-1.337-1.645L7.958 1.958c-.23-.23-.346-.346-.48-.429a1.3 1.3 0 0 0-.386-.16c-.153-.036-.317-.036-.643-.036H3.466c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583-.145.285-.145.659-.145 1.405m4.333 1.867a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TagIcon;
