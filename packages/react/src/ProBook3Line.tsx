import * as React from "react";
import { IconProps } from "./types";

export const ProBook3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h15v2H7a2 2 0 1 0 0 4h14v14zM5 9.465c.588.34 1.271.535 2 .535h12v10H6a1 1 0 0 1-1-1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M7 5a1 1 0 0 0 0 2h14V5z" />
      </svg>
    );
  },
);

export default ProBook3Line;
