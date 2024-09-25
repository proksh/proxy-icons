import * as React from "react";
import { IconProps } from "./types";

export const ProShareBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 3 3 4v16l1 1h16l1-1v-6h-2v5H5V5h5V3z" />
        <path
          fill={color}
          d="M13 3h7l1 1v7h-2V6.414l-6.793 6.793-1.414-1.414L17.586 5H13z"
        />
      </svg>
    );
  },
);

export default ProShareBoxLine;
