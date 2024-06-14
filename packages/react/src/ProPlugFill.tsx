import * as React from "react";
import { IconProps } from "./types";

export const ProPlugFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 2v4h-4V2H8v4H4v3h16V6h-4V2zm6 9H4v3a4 4 0 0 0 4 4h3v3l1 1h7v-2h-6v-2h3a4 4 0 0 0 4-4zm-6.5 4h-3v-2h3z"
        />
      </svg>
    );
  },
);

export default ProPlugFill;
