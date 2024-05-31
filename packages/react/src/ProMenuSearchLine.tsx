import * as React from "react";
import { IconProps } from "./types";

export const ProMenuSearchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 8a5 5 0 1 1 8.925 3.097L22 13.172l-1.414 1.414-2.194-2.194A5 5 0 0 1 11 8m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 7h6V5H3zm18 12H3v-2h18zM3 13h6v-2H3z"
        />
      </svg>
    );
  },
);

export default ProMenuSearchLine;
