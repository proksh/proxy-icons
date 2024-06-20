import * as React from "react";
import { IconProps } from "./types";

export const ProCupFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h3l1-1V4l-1-1zm16 5h-2V5h2zM3 21h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProCupFill;
