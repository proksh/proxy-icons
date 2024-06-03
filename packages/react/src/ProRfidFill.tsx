import * as React from "react";
import { IconProps } from "./types";

export const ProRfidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556zM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9zM8.464 8.464a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path
          fill={color}
          d="M1 12c0-3.038 1.231-5.788 3.222-7.778l1.414 1.414A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364l-1.414 1.414A10.97 10.97 0 0 1 1 12"
        />
        <path
          fill={color}
          d="M5 12c0-1.933.784-3.683 2.05-4.95l1.414 1.414A4.98 4.98 0 0 0 7 12c0 1.38.56 2.63 1.464 3.536L7.05 16.95A6.98 6.98 0 0 1 5 12m14.778 7.778A10.97 10.97 0 0 0 23 12c0-3.038-1.231-5.788-3.222-7.778l-1.414 1.414A8.97 8.97 0 0 1 21 12a8.97 8.97 0 0 1-2.636 6.364z"
        />
        <path
          fill={color}
          d="M16.95 16.95A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95l-1.414 1.414A4.98 4.98 0 0 1 17 12c0 1.38-.56 2.63-1.464 3.536zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        />
      </svg>
    );
  },
);

export default ProRfidFill;
