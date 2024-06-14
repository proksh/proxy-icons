import * as React from "react";
import { IconProps } from "./types";

export const ProOmegaLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 11a6 6 0 1 1 12 0c0 1.302-.507 2.474-1.372 3.664-.714.984-1.626 1.922-2.628 2.923V20h7v-2h-4.6c.666-.697 1.305-1.414 1.847-2.16C19.257 14.446 20 12.87 20 11a8 8 0 1 0-16 0c0 1.87.743 3.447 1.753 4.84.542.746 1.181 1.463 1.848 2.16H3v2h7v-2.413c-1.002-1.001-1.914-1.939-2.628-2.923C6.507 13.474 6 12.302 6 11"
        />
      </svg>
    );
  },
);

export default ProOmegaLine;
