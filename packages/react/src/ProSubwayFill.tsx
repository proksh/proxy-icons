import * as React from "react";
import { IconProps } from "./types";

export const ProSubwayFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21V7a4 4 0 0 0-4-4zm12 8h-6V5h4a2 2 0 0 1 2 2zm-8 0H5V7a2 2 0 0 1 2-2h4zm-2 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    );
  },
);

export default ProSubwayFill;
