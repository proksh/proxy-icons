import * as React from "react";
import { IconProps } from "./types";

export const ProImage2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M22 3H2v18h20zm-6.09 8.576-3.437 3.482L7 9.586l-3 3V5h16v10.721z"
        />
      </svg>
    );
  },
);

export default ProImage2Fill;
