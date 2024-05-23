import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16.013 12h-2.751v4.008h-2.5V12H8.01l3.992-4z" />
        <path
          fill={color}
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-2.5 0a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProArrowUpCircleLine;