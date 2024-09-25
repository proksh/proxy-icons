import * as React from "react";
import { IconProps } from "./types";

export const ProStickyNoteAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 6v3h2V6h3V4H6V1H4v3H1v2z" />
        <path
          fill={color}
          d="M3 21V11h2v8h8v-5l1-1h5V5h-8V3h10v12.08L15.08 21zm12-2.747L18.253 15H15z"
        />
      </svg>
    );
  },
);

export default ProStickyNoteAddLine;
