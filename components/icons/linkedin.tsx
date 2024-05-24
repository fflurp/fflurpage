import * as React from "react";
import type { SVGProps } from "react";

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#646464"
      d="M7.528 5.74c0 .96-.787 1.738-1.757 1.738S4.014 6.7 4.014 5.74C4.014 4.78 4.8 4 5.771 4s1.757.78 1.757 1.74m.014 3.13H4V20h3.542zm5.654 0h-3.52V20h3.52v-5.843c0-3.248 4.27-3.514 4.27 0V20H21v-7.048c0-5.481-6.32-5.282-7.804-2.583z"
    />
  </svg>
);

export default LinkedinIcon;
