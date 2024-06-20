import * as React from "react";
import { IconProps } from "./types";

export const ProBreadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 6.5C5 4.453 6.45 3 8 3h11a4 4 0 0 1 2 7.465V22H7V9.796C5.88 9.327 5 8.094 5 6.5M5 22H3V10.465A4.002 4.002 0 0 1 4.063 3.11 5.9 5.9 0 0 0 3 6.5c0 1.754.767 3.383 2 4.406z"
        />
      </svg>
    );
  },
);

export default ProBreadFill;
