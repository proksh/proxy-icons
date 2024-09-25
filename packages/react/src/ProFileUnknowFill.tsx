import * as React from "react";
import { IconProps } from "./types";

export const ProFileUnknowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm9 7a1.5 1.5 0 0 0-1.5 1.5h-2A3.5 3.5 0 1 1 12 14h-1v-2h1a1.5 1.5 0 0 0 0-3m-1 8v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProFileUnknowFill;
