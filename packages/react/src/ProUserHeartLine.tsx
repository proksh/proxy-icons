import * as React from "react";
import { IconProps } from "./types";

export const ProUserHeartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M13.732 14a4.6 4.6 0 0 0-1.089 2H8a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5z"
        />
        <path
          fill={color}
          d="M23.07 14.918a3.18 3.18 0 0 0-4.07-.335 3.18 3.18 0 0 0-4.07.335 3.133 3.133 0 0 0 0 4.455L19 23.409l4.07-4.036a3.133 3.133 0 0 0 0-4.455m-6.732 3.035L19 20.593l2.662-2.64c.45-.447.45-1.168 0-1.614a1.177 1.177 0 0 0-1.652 0L19 17.34l-1.01-1.001a1.177 1.177 0 0 0-1.652 0 1.133 1.133 0 0 0 0 1.614"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserHeartLine;