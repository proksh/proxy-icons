import * as React from "react";
import { IconProps } from "./types";

export const ProUserReceivedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M16 14q.47 0 .916.084L15 16H8a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5zm3.414 3H23v2h-3.586l1.793 1.793-1.414 1.414L15.586 18l4.207-4.207 1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProUserReceivedLine;
