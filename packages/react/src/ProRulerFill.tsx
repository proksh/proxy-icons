import * as React from "react";
import { IconProps } from "./types";

export const ProRulerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.782 13.061.54 17.304l6.364 6.364L23.168 7.404 16.804 1.04l-3.536 3.536 2.828 2.828-1.414 1.414-2.828-2.828L9.73 8.11l3.525 3.537-1.401 1.414L8.32 9.53l-2.123 2.117 2.828 2.828L7.61 15.89z"
        />
      </svg>
    );
  },
);

export default ProRulerFill;
