import * as React from "react";
import { IconProps } from "./types";

export const ProRoundedCornerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h2v2H3zm4 0h2v2H7zm4 0h5a5 5 0 0 1 5 5v5H11zM3 9V7h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm18-2v2h-2v-2zM3 19h2v2H3zm6 2H7v-2h2zm6 0v-2h2v2zm4 0v-2h2v2zm-6 0h-2v-2h2z"
        />
      </svg>
    );
  },
);

export default ProRoundedCornerFill;
