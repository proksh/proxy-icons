import * as React from "react";
import { IconProps } from "./types";

export const ProUninstallLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3v18l1 1h16l1-1V3l-1-1h-3v2h2v10H5V4h2V2H4zm2 17v-4h14v4z"
        />
        <path
          fill={color}
          d="M13 5.414V11h-2V5.414L8.707 7.707 7.293 6.293l4-4h1.414l4 4-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProUninstallLine;
