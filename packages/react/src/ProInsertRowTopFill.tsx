import * as React from "react";
import { IconProps } from "./types";

export const ProInsertRowTopFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0m-6 1v2h2V8h2V6h-2V4h-2v2H9v2zM3 22v-8h18v8z"
        />
      </svg>
    );
  },
);

export default ProInsertRowTopFill;
