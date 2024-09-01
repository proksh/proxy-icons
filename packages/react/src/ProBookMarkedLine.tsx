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
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm16-1h-2v8l-3.5-2-3.5 2V4H6a1 1 0 0 0-1 1v10.337A3.5 3.5 0 0 1 6.5 15H19zM5 18.5A1.5 1.5 0 0 0 6.5 20H19v-3H6.5A1.5 1.5 0 0 0 5 18.5"
        />
      </svg>
    );
  },
);

export default ProBookMarkedLine;
