import * as React from "react";
import type { SVGProps } from "react";
const UserOneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.667 14v-1.333c0-1.243-.85-2.287-2-2.583m-2.333-7.89a2.668 2.668 0 0 1 0 4.945m1 6.861c0-1.242 0-1.864-.203-2.354a2.67 2.67 0 0 0-1.444-1.443C9.197 10 8.576 10 7.334 10h-2c-1.243 0-1.864 0-2.354.203-.654.27-1.173.79-1.444 1.443-.203.49-.203 1.111-.203 2.354M9 4.667a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0"
    />
  </svg>
);
export default UserOneIcon;
