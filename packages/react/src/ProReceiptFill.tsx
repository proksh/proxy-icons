import * as React from "react";
import { IconProps } from "./types";

export const ProReceiptFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M6 21a2 2 0 0 0 2-2v-2" strokeWidth="2" />
        <path
          fill={color}
          d="M5.966 1.775 9 3.798l3-2 3 2 3.034-2.023L21 4v11H5v4.5h2V17h16v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4z"
        />
      </svg>
    );
  },
);

export default ProReceiptFill;
