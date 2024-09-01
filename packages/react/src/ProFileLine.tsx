import * as React from "react";
import { IconProps } from "./types";

export const ProFileLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.086 2H21v20H3V7.086zM19 20V4h-8v5l-1 1H5v10zM5 8h4V4h-.086L5 7.914z"
        />
      </svg>
    );
  },
);

export default ProFileLine;
