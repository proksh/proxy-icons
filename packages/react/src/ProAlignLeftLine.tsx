import * as React from "react";
import { IconProps } from "./types";

export const ProAlignLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 7H3V5h18zm0 12H3v-2h18zM3 13h14v-2H3z" />
      </svg>
    );
  },
);

export default ProAlignLeftLine;
