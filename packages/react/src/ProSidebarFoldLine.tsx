import * as React from "react";
import { IconProps } from "./types";

export const ProSidebarFoldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M3 4h18v16H3z" strokeWidth="2" />
        <path
          stroke={color}
          d="M10.5 9.5 8 12l2.5 2.5M15 4v16"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProSidebarFoldLine;
