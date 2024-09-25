import * as React from "react";
import { IconProps } from "./types";

export const ProRfidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12c0-3.038 1.231-5.788 3.222-7.778l1.414 1.414A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364l-1.414 1.414A10.97 10.97 0 0 1 1 12"
        />
        <path
          fill={color}
          d="M5 12c0-1.933.784-3.683 2.05-4.95l1.414 1.414A4.98 4.98 0 0 0 7 12c0 1.38.56 2.63 1.464 3.536L7.05 16.95A6.98 6.98 0 0 1 5 12m14.778 7.778A10.97 10.97 0 0 0 23 12c0-3.038-1.231-5.788-3.222-7.778l-1.414 1.414A8.97 8.97 0 0 1 21 12a8.97 8.97 0 0 1-2.636 6.364z"
        />
        <path
          fill={color}
          d="M16.95 16.95A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95l-1.414 1.414A4.98 4.98 0 0 1 17 12c0 1.38-.56 2.63-1.464 3.536zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
      </svg>
    );
  },
);

export default ProRfidLine;
