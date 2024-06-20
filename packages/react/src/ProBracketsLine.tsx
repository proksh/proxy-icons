import * as React from "react";
import { IconProps } from "./types";

export const ProBracketsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 3h5v2H6v14h3v2H4zm14 2h-3V3h5v18h-5v-2h3z" />
      </svg>
    );
  },
);

export default ProBracketsLine;
