import * as React from "react";
import { IconProps } from "./types";

export const ProGroupLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
        <path
          fill={color}
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M1 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3h-2v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1zm21.5 3h-2v-3a6.47 6.47 0 0 0-1.107-3.63A5 5 0 0 1 22.5 20zm-8-10a5 5 0 0 1-.332-.012 6.5 6.5 0 0 0 1.835-2.49 2.496 2.496 0 0 0 .4-3.618 6.5 6.5 0 0 0-1.242-2.832 4.501 4.501 0 0 1-.66 8.952"
        />
      </svg>
    );
  },
);

export default ProGroupLine;