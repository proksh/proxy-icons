import * as React from "react";
import { IconProps } from "./types";

export const ProSkipUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 6H6v2h12zm-6.707 4.793-5.5 5.5L6.5 18h11l.707-1.707-5.5-5.5z"
        />
      </svg>
    );
  },
);

export default ProSkipUpFill;
