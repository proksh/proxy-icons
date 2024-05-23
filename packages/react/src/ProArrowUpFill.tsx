import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.293 11.793 4 13.5h7v7h2v-7h7l.707-1.707-8-8h-1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowUpFill;
