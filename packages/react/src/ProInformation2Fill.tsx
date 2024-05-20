import * as React from "react";
import { IconProps } from "./types";

export const ProInformation2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11.5-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.5 2.5h-3v2h1V15h-1v2h4v-2h-1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProInformation2Fill;
