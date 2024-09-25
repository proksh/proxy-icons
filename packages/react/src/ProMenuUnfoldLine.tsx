import * as React from "react";
import { IconProps } from "./types";

export const ProMenuUnfoldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.793 5.707 18.086 9l-3.293 3.293 1.414 1.414L20.914 9l-4.707-4.707zM3 7h9V5H3zm0 12v-2h18v2zm0-6h9v-2H3z"
        />
      </svg>
    );
  },
);

export default ProMenuUnfoldLine;
