import * as React from "react";
import { IconProps } from "./types";

export const ProChevronRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.707 5.293 17.414 12l-6.707 6.707-1.414-1.414L14.586 12 9.293 6.707z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProChevronRightLine;
