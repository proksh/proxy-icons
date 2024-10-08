import * as React from "react";
import { IconProps } from "./types";

export const ProInstallLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 17h-2v2h2z" />
        <path
          fill={color}
          d="M3 3v18l1 1h16l1-1V3l-1-1h-5v2h4v10H5V4h4V2H4zm2 17v-4h14v4z"
        />
        <path
          fill={color}
          d="M13 7.586V2h-2v5.586L8.707 5.293 7.293 6.707l4 4h1.414l4-4-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProInstallLine;
