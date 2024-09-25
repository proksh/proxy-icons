import * as React from "react";
import { IconProps } from "./types";

export const ProStackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 .82 21.887 7 12 13.18 2.113 7zM5.887 7 12 10.82 18.113 7 12 3.18zm-3.408 9.853 1.042-1.706L12 20.328l8.479-5.181 1.042 1.706L12 22.672z"
        />
        <path
          fill={color}
          d="M3.521 10.147 2.48 11.853 12 17.672l9.521-5.819-1.043-1.706L12 15.328z"
        />
      </svg>
    );
  },
);

export default ProStackLine;
