import * as React from "react";
import { IconProps } from "./types";

export const ProSkipDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 18h12v-2H6zm6-4.086 6.207-6.207-1.414-1.414L12 11.086 7.207 6.293 5.793 7.707z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSkipDownLine;
