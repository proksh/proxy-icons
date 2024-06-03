import * as React from "react";
import { IconProps } from "./types";

export const ProImageLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M2 3v18h20V3zm18 2v10.086l-6-6L4.086 19H4V5zm0 14H6.914L14 11.914l6 6z"
        />
      </svg>
    );
  },
);

export default ProImageLine;
