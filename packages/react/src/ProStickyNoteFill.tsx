import * as React from "react";
import { IconProps } from "./types";

export const ProStickyNoteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 21H3V3h18v10h-7l-1 1z" />
        <path fill={color} d="m15 21 6-6h-6z" />
      </svg>
    );
  },
);

export default ProStickyNoteFill;
