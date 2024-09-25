import * as React from "react";
import { IconProps } from "./types";

export const ProPagesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 12h-4v-2h4zm-4 3h4v-2h-4zm4 1v2H7v-2zm-5-6H7v5h5zm-3 3v-1h1v1z"
        />
        <path
          fill={color}
          d="M4 2 3 3v18l1 1h16l1-1V3l-1-1zm1 4V4h14v2zm0 2h14v12H5z"
        />
      </svg>
    );
  },
);

export default ProPagesLine;
