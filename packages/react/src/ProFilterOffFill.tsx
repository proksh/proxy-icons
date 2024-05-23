import * as React from "react";
import { IconProps } from "./types";

export const ProFilterOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="m6 3 12 12 1.414-1.414-12-12zm15.276 2.63-3.133 3.856L12.657 4H20.5z"
        />
        <path
          fill={color}
          d="M3.5 4H7l8.607 8.608-.607.747V21l-1 1h-4l-1-1v-7.645L2.724 5.631z"
        />
      </svg>
    );
  },
);

export default ProFilterOffFill;
