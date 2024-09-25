import * as React from "react";
import { IconProps } from "./types";

export const ProArmchairLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2.126a4.002 4.002 0 0 1 1 7.339V21h-2v-1H5v1H3v-4.535a4.002 4.002 0 0 1 1-7.339zm2 2.126A4.01 4.01 0 0 1 8.874 12h6.252A4.01 4.01 0 0 1 18 9.126V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zM3 13a2 2 0 0 0 1.333 1.886l.667.236V18h14v-2.878l.667-.236A2.001 2.001 0 0 0 19 11a2 2 0 0 0-2 2v3h-2v-2H9v2H7v-3a2 2 0 1 0-4 0"
        />
      </svg>
    );
  },
);

export default ProArmchairLine;
