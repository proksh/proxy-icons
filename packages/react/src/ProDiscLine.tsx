import * as React from "react";
import { IconProps } from "./types";

export const ProDiscLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 9.17A3 3 0 1 0 15 12V4.582A8.003 8.003 0 0 1 12 20a8 8 0 0 1-1-15.938V2.049C5.947 2.551 2 6.815 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.185-3.947-9.449-9-9.95z"
        />
      </svg>
    );
  },
);

export default ProDiscLine;
