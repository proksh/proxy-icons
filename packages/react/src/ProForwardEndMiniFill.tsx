import * as React from "react";
import { IconProps } from "./types";

export const ProForwardEndMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 7v10h2V7zM2 8l1.496-.868 7 4v1.736l-7 4L2 16zm9 0 1.496-.868 7 4v1.736l-7 4L11 16z"
        />
      </svg>
    );
  },
);

export default ProForwardEndMiniFill;
