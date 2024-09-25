import * as React from "react";
import { IconProps } from "./types";

export const ProTextDirectionRFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 5v10h-2V5h-2v10H9v-4a4 4 0 1 1 0-8h8v2zM7 7a2 2 0 0 0 2 2V5a2 2 0 0 0-2 2"
        />
        <path
          fill={color}
          d="m3.293 18.707 3 3L8 21v-2h11v-2H8v-2l-1.707-.707-3 3z"
        />
      </svg>
    );
  },
);

export default ProTextDirectionRFill;
