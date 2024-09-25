import * as React from "react";
import { IconProps } from "./types";

export const ProCaravanFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.946 3H2v16h6.126a4.002 4.002 0 0 0 7.748 0H22V9.742zM14 7v4H8V7zm-4 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </svg>
    );
  },
);

export default ProCaravanFill;
