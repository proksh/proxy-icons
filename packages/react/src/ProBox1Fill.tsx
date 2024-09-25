import * as React from "react";
import { IconProps } from "./types";

export const ProBox1Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 1.134h1l8.66 5 .5.866v10l-.5.866L13 22.577V11.42L3.293 5.873z"
        />
        <path fill={color} d="M2.34 7.632V17l.5.866L11 22.577V12.58z" />
      </svg>
    );
  },
);

export default ProBox1Fill;
