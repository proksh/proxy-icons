import * as React from "react";
import { IconProps } from "./types";

export const ProToggleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12a7 7 0 0 1 7-7h7.518v.016q.24-.015.482-.016a7 7 0 1 1 0 14H8a7 7 0 0 1-7-7m18 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
        />
      </svg>
    );
  },
);

export default ProToggleFill;
