import * as React from "react";
import { IconProps } from "./types";

export const ProNurseLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M11 3.75V5H9.75v2H11v1.25h2V7h1.25V5H13V3.75z" />
        <path
          fill={color}
          d="M5.366 3.263A9.96 9.96 0 0 1 11.701 1c2.52 0 4.825.933 6.583 2.472l.5.438-2.293 6.882a4.5 4.5 0 0 1-8.98.018L4.809 3.72zm1.837 1.12L8.96 9h6.019l1.477-4.433A7.96 7.96 0 0 0 11.702 3c-1.669 0-3.217.51-4.498 1.384M12 13a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 13m0 4.086-1.628-1.628L4 16.095V22h16v-5.905l-6.372-.637zM6 20v-2.095l3.628-.363L12 19.914l2.372-2.372 3.628.363V20z"
        />
      </svg>
    );
  },
);

export default ProNurseLine;
