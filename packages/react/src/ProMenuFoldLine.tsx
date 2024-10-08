import * as React from "react";
import { IconProps } from "./types";

export const ProMenuFoldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.707 5.707 5.414 9l3.293 3.293-1.414 1.414L2.586 9l4.707-4.707zM12 7h9V5h-9zM3 19v-2h18v2zm9-6h9v-2h-9z"
        />
      </svg>
    );
  },
);

export default ProMenuFoldLine;
