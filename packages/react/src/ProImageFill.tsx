import * as React from "react";
import { IconProps } from "./types";

export const ProImageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M22 3H2v18h20zm-8 6.086L4.086 19H4V5h16v10.086z"
        />
      </svg>
    );
  },
);

export default ProImageFill;
