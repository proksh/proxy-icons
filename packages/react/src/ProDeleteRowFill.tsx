import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteRowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 2H2v8h20zm-6 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-3-4v-2h6v2z"
        />
      </svg>
    );
  },
);

export default ProDeleteRowFill;
