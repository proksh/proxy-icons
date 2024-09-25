import * as React from "react";
import { IconProps } from "./types";

export const ProRegisteredFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 9v3h2.5a1.5 1.5 0 0 0 0-3z" />
        <path
          fill={color}
          d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m6-5h4.5a3.5 3.5 0 0 1 1.914 6.431L17.009 17h-2.473l-2.181-3H10v3H8z"
        />
      </svg>
    );
  },
);

export default ProRegisteredFill;
