import * as React from "react";
import { IconProps } from "./types";

export const ProMovie2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a8 8 0 1 0 0 16h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L17.292 18A8 8 0 0 0 12 4"
        />
        <path
          fill={color}
          d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProMovie2Line;
