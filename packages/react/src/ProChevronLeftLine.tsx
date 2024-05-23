import * as React from "react";
import { IconProps } from "./types";

export const ProChevronLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.293 5.293 6.586 12l6.707 6.707 1.414-1.414L9.414 12l5.293-5.293z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProChevronLeftLine;
