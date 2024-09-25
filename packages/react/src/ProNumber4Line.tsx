import * as React from "react";
import { IconProps } from "./types";

export const ProNumber4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.81 1.5H16V16h3v2h-3v4h-2v-4H4v-1.295zM14 4.895 6.835 16H14z"
        />
      </svg>
    );
  },
);

export default ProNumber4Line;
