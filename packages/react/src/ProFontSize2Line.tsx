import * as React from "react";
import { IconProps } from "./types";

export const ProFontSize2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 6h6v15h2V6h6V4H2z" />
        <path fill={color} d="M16 14h-3v-2h8v2h-3v7h-2z" />
      </svg>
    );
  },
);

export default ProFontSize2Line;
