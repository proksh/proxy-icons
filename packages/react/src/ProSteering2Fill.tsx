import * as React from "react";
import { IconProps } from "./types";

export const ProSteering2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 0 0-7.938 7H6l1-1h10l1 1h1.938A8 8 0 0 0 12 4m-1 15.938V15H9a3 3 0 0 1-2.83-2H4.063A8.004 8.004 0 0 0 11 19.938m2 0A8.004 8.004 0 0 0 19.938 13H17.83A3 3 0 0 1 15 15h-2z"
        />
      </svg>
    );
  },
);

export default ProSteering2Fill;
