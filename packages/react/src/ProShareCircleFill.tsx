import * as React from "react";
import { IconProps } from "./types";

export const ProShareCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 12a7 7 0 0 1 7-7V3a9 9 0 1 0 9 9h-2a7 7 0 1 1-14 0"
        />
        <path
          fill={color}
          d="M13.293 4.707 14 3h6l1 1v6l-1.707.707L17 8.414l-4.793 4.793-1.414-1.414L15.586 7z"
        />
      </svg>
    );
  },
);

export default ProShareCircleFill;
