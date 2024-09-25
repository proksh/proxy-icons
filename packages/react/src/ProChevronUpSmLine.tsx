import * as React from "react";
import { IconProps } from "./types";

export const ProChevronUpSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.293 12.793 1.414 1.414L12 10.914l3.293 3.293 1.414-1.414L12 8.086z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProChevronUpSmLine;
