import * as React from "react";
import { IconProps } from "./types";

export const ProSuitcaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3 8 4v2H3L2 7v13l1 1h18l1-1V7l-1-1h-5V4l-1-1zm1 3V5h4v1zM6 19V8h2v11zm10 0V8h2v11z"
        />
      </svg>
    );
  },
);

export default ProSuitcaseFill;
