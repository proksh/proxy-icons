import * as React from "react";
import { IconProps } from "./types";

export const ProExpandUpDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.793 8.793 5.5-5.5h1.414l5.5 5.5L17.5 10.5h-11zm0 6.414 5.5 5.5h1.414l5.5-5.5L17.5 13.5h-11z"
        />
      </svg>
    );
  },
);

export default ProExpandUpDownFill;
