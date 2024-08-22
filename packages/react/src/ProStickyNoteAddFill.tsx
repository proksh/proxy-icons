import * as React from "react";
import { IconProps } from "./types";

export const ProStickyNoteAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 6v3h2V6h3V4H6V1H4v3H1v2z" />
        <path
          fill={color}
          d="M11 5a6 6 0 0 1-8 5.659V21h10v-7l1-1h7V3H10.659A6 6 0 0 1 11 5"
        />
        <path fill={color} d="m15 21 6-6h-6z" />
      </svg>
    );
  },
);

export default ProStickyNoteAddFill;
