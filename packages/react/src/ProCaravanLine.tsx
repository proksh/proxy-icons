import * as React from "react";
import { IconProps } from "./types";

export const ProCaravanLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 11V7h6v4z" />
        <path
          fill={color}
          d="M15.946 3H2v16h6.126a4.002 4.002 0 0 0 7.748 0H22V9.742zM12 14a4 4 0 0 0-3.874 3H4V5h11.054L20 10.508V17h-4.126A4 4 0 0 0 12 14"
        />
      </svg>
    );
  },
);

export default ProCaravanLine;
