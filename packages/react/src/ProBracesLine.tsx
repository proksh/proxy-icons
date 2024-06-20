import * as React from "react";
import { IconProps } from "./types";

export const ProBracesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 6a3 3 0 0 0-3-3h-1v2h1a1 1 0 0 1 1 1v4c0 .768.289 1.47.764 2A3 3 0 0 0 18 14v4a1 1 0 0 1-1 1h-1v2h1a3 3 0 0 0 3-3v-4a1 1 0 0 1 1-1h1v-2h-1a1 1 0 0 1-1-1zM7 3a3 3 0 0 0-3 3v4a1 1 0 0 1-1 1H2v2h1a1 1 0 0 1 1 1v4a3 3 0 0 0 3 3h1v-2H7a1 1 0 0 1-1-1v-4c0-.768-.289-1.47-.764-2 .475-.53.764-1.232.764-2V6a1 1 0 0 1 1-1h1V3z"
        />
      </svg>
    );
  },
);

export default ProBracesLine;
