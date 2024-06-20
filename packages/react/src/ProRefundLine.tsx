import * as React from "react";
import { IconProps } from "./types";

export const ProRefundLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.914 13H16v2h-4.086l.793.793-1.414 1.414L8.086 14l3.207-3.207 1.414 1.414z"
        />
        <path fill={color} d="M22 3H2v18h20zM4 7V5h16v2zm0 2h16v10H4z" />
      </svg>
    );
  },
);

export default ProRefundLine;
