import * as React from "react";
import { IconProps } from "./types";

export const ProContractUpDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.207 3.293 5.793 4.707 12 10.914l6.207-6.207-1.414-1.414L12 8.086zm0 17.414-1.414-1.414L12 13.086l6.207 6.207-1.414 1.414L12 15.914z"
        />
      </svg>
    );
  },
);

export default ProContractUpDownLine;
