import * as React from "react";
import { IconProps } from "./types";

export const ProBookMarkedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm16-1v11H6.5c-.537 0-1.045.12-1.5.337V5a1 1 0 0 1 1-1h4v8l3.5-2 3.5 2V4zM5 18.5A1.5 1.5 0 0 0 6.5 20H19v-3H6.5A1.5 1.5 0 0 0 5 18.5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookMarkedLine;
