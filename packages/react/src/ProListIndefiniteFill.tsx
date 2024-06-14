import * as React from "react";
import { IconProps } from "./types";

export const ProListIndefiniteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 6.5h8v-3h-8zM3 5l1-1h5l1 1v5l-1 1H4l-1-1zm-.5 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0M21 13.5h-8v-3h8zm-8 7h8v-3h-8z"
        />
      </svg>
    );
  },
);

export default ProListIndefiniteFill;
