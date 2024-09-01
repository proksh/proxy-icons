import * as React from "react";
import { IconProps } from "./types";

export const ProReservedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v10l-1 1h-7v4h3v2H8v-2h3v-4H4l-1-1zm5 6h8V8H8z"
        />
      </svg>
    );
  },
);

export default ProReservedFill;
