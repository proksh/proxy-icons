import * as React from "react";
import { IconProps } from "./types";

export const ProMenuAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7h18V5H3zm15 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm-7 5H3v-2h8zm-8-6h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProMenuAddLine;
