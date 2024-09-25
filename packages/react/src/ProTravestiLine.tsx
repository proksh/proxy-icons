import * as React from "react";
import { IconProps } from "./types";

export const ProTravestiLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M14 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m5.207 4.793 5.5 5.5-1.414 1.414-5.5-5.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m8.707 3.207-6.5 6.5L.793 8.293l6.5-6.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProTravestiLine;
