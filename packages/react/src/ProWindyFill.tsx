import * as React from "react";
import { IconProps } from "./types";

export const ProWindyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 4.5a1 1 0 0 0-.937.65l-2.81-1.052A4.001 4.001 0 1 1 13.5 9.5H5a.5.5 0 0 0 0 1h13.5a4 4 0 1 1-3.747 5.402l2.81-1.051A1.001 1.001 0 1 0 18.5 13.5H5a3.5 3.5 0 1 1 0-7h8.5a1 1 0 1 0 0-2M4 14.5h6.5a4 4 0 1 1-3.747 5.402l2.81-1.052a1.001 1.001 0 1 0 .937-1.35H4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProWindyFill;
