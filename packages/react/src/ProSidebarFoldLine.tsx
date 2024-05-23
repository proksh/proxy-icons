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
        <path
          fill={color}
          d="M11.707 10.207 9.914 12l1.793 1.793-1.414 1.414L7.086 12l3.207-3.207z"
        />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h10V5zm16 14h-4V5h4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSidebarFoldLine;