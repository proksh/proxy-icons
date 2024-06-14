import * as React from "react";
import { IconProps } from "./types";

export const ProTextDirectionLFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 3v2h-2v10h-2V5h-2v10H9v-4a4 4 0 1 1 0-8zM9 5a2 2 0 1 0 0 4z"
        />
        <path
          fill={color}
          d="m17.207 21.707 3-3v-1.414l-3-3L15.5 15v2h-11v2h11v2z"
        />
      </svg>
    );
  },
);

export default ProTextDirectionLFill;
