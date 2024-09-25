import * as React from "react";
import { IconProps } from "./types";

export const ProExpandHeightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 4h12V2H6zm1.793 11.207L8.5 13.5H11v-3H8.5l-.707-1.707 3.5-3.5h1.414l3.5 3.5L15.5 10.5H13v3h2.5l.707 1.707-3.5 3.5h-1.414zM6 22v-2h12v2z"
        />
      </svg>
    );
  },
);

export default ProExpandHeightFill;
