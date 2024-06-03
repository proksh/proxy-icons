import * as React from "react";
import { IconProps } from "./types";

export const ProTv2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v14l1 1h18l1-1V4l-1-1zm1 14V5h16v12zm1 5h14v-2H5z"
        />
      </svg>
    );
  },
);

export default ProTv2Line;
