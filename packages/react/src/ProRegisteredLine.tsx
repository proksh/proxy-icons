import * as React from "react";
import { IconProps } from "./types";

export const ProRegisteredLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 7h4.5a3.5 3.5 0 0 1 1.914 6.431L17.009 17h-2.473l-2.181-3H10v3H8zm2 2v3h2.5a1.5 1.5 0 0 0 0-3z"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        />
      </svg>
    );
  },
);

export default ProRegisteredLine;
