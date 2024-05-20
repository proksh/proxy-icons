import * as React from "react";
import { IconProps } from "./types";

export const ProStackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 .82 21.887 7 12 13.18 2.113 7zM3.521 15.147 2.48 16.853 12 22.672l9.521-5.819-1.043-1.706L12 20.328z"
        />
        <path
          fill={color}
          d="M3.521 10.147 2.48 11.853 12 17.672l9.521-5.819-1.043-1.706L12 15.328z"
        />
      </svg>
    );
  },
);

export default ProStackFill;
