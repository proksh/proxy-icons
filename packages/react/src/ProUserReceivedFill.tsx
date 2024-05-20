import * as React from "react";
import { IconProps } from "./types";

export const ProUserReceivedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3 19a5 5 0 0 1 5-5h8q.47 0 .916.084L13 18l4 4H3z"
        />
        <path
          fill={color}
          d="M19.414 17H23v2h-3.586l1.793 1.793-1.414 1.414L15.586 18l4.207-4.207 1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProUserReceivedFill;
