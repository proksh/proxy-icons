import * as React from "react";
import { IconProps } from "./types";

export const ProBox3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 1.134h1l8.258 4.767-8.755 4.949-8.71-4.977zM2.34 7.632V17l.5.866L11 22.577V12.58zM13 22.577l8.16-4.711.5-.866V7.689L13 12.584z"
        />
      </svg>
    );
  },
);

export default ProBox3Fill;
