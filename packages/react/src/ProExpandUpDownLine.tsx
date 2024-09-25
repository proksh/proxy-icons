import * as React from "react";
import { IconProps } from "./types";

export const ProExpandUpDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.793 15.207 1.414-1.414L12 18.586l4.793-4.793 1.414 1.414L12 21.414zm0-6.414 1.414 1.414L12 5.414l4.793 4.793 1.414-1.414L12 2.586z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProExpandUpDownLine;
