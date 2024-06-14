import * as React from "react";
import { IconProps } from "./types";

export const ProListRadioFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6.4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path
          fill={color}
          d="M6.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-2 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0M21 6.5h-8v-3h8zm-8 7h8v-3h-8zm8 7h-8v-3h8z"
        />
      </svg>
    );
  },
);

export default ProListRadioFill;
