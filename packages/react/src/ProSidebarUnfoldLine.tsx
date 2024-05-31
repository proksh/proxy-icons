import * as React from "react";
import { IconProps } from "./types";

export const ProSidebarUnfoldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.086 12-1.793-1.793 1.414-1.414L11.914 12l-3.207 3.207-1.414-1.414z"
        />
        <path fill={color} d="M2 3h20v18H2zm2 2v14h10V5zm12 0v14h4V5z" />
      </svg>
    );
  },
);

export default ProSidebarUnfoldLine;
