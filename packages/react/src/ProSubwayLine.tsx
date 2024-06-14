import * as React from "react";
import { IconProps } from "./types";

export const ProSubwayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M7 3a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21V7a4 4 0 0 0-4-4zM5 18v-5h14v5zm8-7V5h4a2 2 0 0 1 2 2v4zm-2 0H5V7a2 2 0 0 1 2-2h4z"
        />
      </svg>
    );
  },
);

export default ProSubwayLine;
